/* ============================================================
   SIM-WIN10 CORE — Bộ máy giả lập Windows 10 dùng chung
   Được điều khiển bởi sim-scenarios.js (kịch bản từng bài)
   ============================================================ */
(function () {
    "use strict";

    const $ = (sel, root) => (root || document).querySelector(sel);
    const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

    const params = new URLSearchParams(location.search);
    const lessonId = params.get("lesson") || "4";

    const APPS = [
        { id: "explorer", name: "File Explorer", icon: "📁" },
        { id: "notepad", name: "Notepad", icon: "📝" },
        { id: "calculator", name: "Calculator", icon: "🧮" },
        { id: "paint", name: "Paint", icon: "🎨" },
        { id: "settings", name: "Settings", icon: "⚙️" },
        { id: "taskmgr", name: "Task Manager", icon: "📊" },
        { id: "edge", name: "Microsoft Edge", icon: "🌐" },
        { id: "store", name: "Microsoft Store", icon: "🛍️" },
        { id: "recycle", name: "Recycle Bin", icon: "🗑️" }
    ];

    const DESKTOP_ICONS = [
        { app: "explorer", label: "This PC", icon: "🖥️", path: "This PC" },
        { app: "explorer", label: "HocTap_Win10", icon: "📁", path: "Documents/HocTap_Win10" },
        { app: "recycle", label: "Recycle Bin", icon: "🗑️" },
        { app: "notepad", label: "Notepad", icon: "📝" },
        { app: "paint", label: "Paint", icon: "🎨" },
        { app: "calculator", label: "Calculator", icon: "🧮" },
        { app: "edge", label: "Microsoft Edge", icon: "🌐" },
        { app: "settings", label: "Settings", icon: "⚙️" }
    ];

    const DEFAULT_FOLDERS = [
        "Desktop",
        "Documents",
        "Documents/HocTap_Win10",
        "Downloads",
        "Pictures"
    ];

    const DEFAULT_FILES = [
        { name: "GhiChuDauTien.txt", folder: "Desktop", size: 1024, content: "Xin chào Windows 10!\nTôi là lập trình viên nhí." },
        { name: "BaiGiang.pdf", folder: "Documents", size: 2457600 },
        { name: "DanhSach.txt", folder: "Documents", size: 2048, content: "Danh sách bài tập tuần này." },
        { name: "BaiHoc.txt", folder: "Documents/HocTap_Win10", size: 1536, content: "Bài học đầu tiên về tệp tin." },
        { name: "GhiChu.txt", folder: "Documents/HocTap_Win10", size: 900, content: "Ghi chú: nhớ bật hiển thị phần mở rộng." },
        { name: "AnhKyNiem.png", folder: "Documents/HocTap_Win10", size: 1258291 },
        { name: "setup_ung_dung.exe", folder: "Downloads", size: 15728640 },
        { name: "bai_hat.mp3", folder: "Downloads", size: 4194304 },
        { name: "AnhGiaDinh.jpg", folder: "Pictures", size: 2516582 },
        { name: "Logo.png", folder: "Pictures", size: 512000 }
    ];

    const FALLBACK_SCENARIO = {
        title: "Khám phá Windows 10",
        subtitle: "Luyện thao tác cơ bản",
        steps: [
            { id: "s1", text: "Mở Start Menu", hint: "Bấm nút ⊞ ở góc trái dưới.", match: { action: "start-open" } },
            { id: "s2", text: "Mở Notepad", hint: "Bấm Notepad trong Start Menu.", match: { action: "app-open", app: "notepad" } },
            { id: "s3", text: "Mở File Explorer", hint: "Bấm biểu tượng This PC trên Desktop.", match: { action: "app-open", app: "explorer" } }
        ],
        finish: "Bé đã biết mở ứng dụng và khám phá tệp tin trên Windows 10!"
    };

    let scenario = null;

    const state = {
        scenario: null,
        lessonId,
        stepDone: {},
        files: [],
        folders: [],
        recycle: [],
        zIndex: 100,
        openApps: {},
        minimized: {},
        maximized: {},
        snapped: {},
        explorerPath: "This PC",
        extensionsShown: false,
        settingsSection: "system",
        settingsPage: "display",
        darkMode: false,
        updateChecked: false,
        updateRunning: false,
        browserUrl: "home",
        selectedTaskProc: null,
        notepadFile: null,
        celebrateShown: false,
        powerState: "on",
        soundOn: true
    };

    /* ================= HELPERS ================= */
    function metaOf(appId) {
        return APPS.find(a => a.id === appId) || { id: appId, name: appId, icon: "▫️" };
    }
    function pad(n) { return n < 10 ? "0" + n : String(n); }
    function fmtSize(bytes) {
        if (bytes == null) return "";
        if (bytes < 1024) return bytes + " B";
        if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + " KB";
        if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1).replace(".0", "") + " MB";
        return (bytes / (1024 * 1024 * 1024)).toFixed(1) + " GB";
    }
    function extOf(name) {
        const i = name.lastIndexOf(".");
        return i > 0 ? name.slice(i + 1).toLowerCase() : "";
    }
    function baseName(path) {
        const parts = String(path).split("/");
        return parts[parts.length - 1];
    }
    function parentPath(path) {
        const parts = String(path).split("/");
        parts.pop();
        return parts.join("/");
    }
    function fileType(name) {
        const ext = extOf(name);
        const map = {
            txt: ["Văn bản thuần", "📄"],
            pdf: ["Tài liệu PDF", "📕"],
            docx: ["Tài liệu Word", "📘"],
            jpg: ["Hình ảnh JPEG", "🖼️"],
            jpeg: ["Hình ảnh JPEG", "🖼️"],
            png: ["Hình ảnh PNG", "🖼️"],
            mp3: ["Âm thanh MP3", "🎵"],
            wav: ["Âm thanh WAV", "🎵"],
            mp4: ["Video MP4", "🎬"],
            exe: ["Ứng dụng", "⚙️"],
            zip: ["Tệp nén ZIP", "🗜️"],
            html: ["Trang web HTML", "🌐"],
            js: ["Mã JavaScript", "📜"],
            css: ["Tệp CSS", "🎨"],
            py: ["Mã Python", "🐍"]
        };
        return map[ext] || ["Tệp tin", "📄"];
    }
    function iconFor(name) {
        if (name === "This PC" || name === "Local Disk (C:)" || name === "Data (D:)") return "🖥️";
        return fileType(name)[1];
    }
    function isFolderEntry(entry) { return entry.type === "folder" || entry.type === "drive"; }

    function getEntries(path) {
        if (path === "This PC") {
            return [
                { name: "Local Disk (C:)", type: "drive", icon: "💽", size: 256 * 1024 * 1024 * 1024, free: "84 GB free of 256 GB" },
                { name: "Data (D:)", type: "drive", icon: "💽", size: 512 * 1024 * 1024 * 1024, free: "310 GB free of 512 GB" }
            ];
        }
        const folders = state.folders
            .filter(p => parentPath(p) === path && p !== path)
            .map(p => ({ name: baseName(p), type: "folder", icon: "📁", path: p }));
        const files = state.files
            .filter(f => f.folder === path)
            .map(f => ({
                name: f.name, type: "file", icon: iconFor(f.name),
                size: f.size, modified: f.modified || "15/01/2025 09:00", content: f.content
            }));
        return folders.concat(files);
    }

    function addFile(file) {
        state.files.push({
            name: file.name,
            folder: file.folder || "Desktop",
            size: file.size || 2048,
            content: file.content || "",
            modified: "15/01/2025 09:00"
        });
    }
    function addFolder(path) {
        if (!state.folders.includes(path)) state.folders.push(path);
    }
    function findFile(name, folder) {
        return state.files.find(f => f.name === name && (!folder || f.folder === folder));
    }
    function deleteFile(name, folder) {
        const idx = state.files.findIndex(f => f.name === name && (!folder || f.folder === folder));
        if (idx < 0) return false;
        const [file] = state.files.splice(idx, 1);
        state.recycle.push(file);
        return true;
    }

    /* ================= TOAST / DIALOG / CONTEXT ================= */
    let toastTimer = null;
    function toast(text, ms) {
        const el = $("#toast");
        el.textContent = text;
        el.classList.remove("hidden");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => el.classList.add("hidden"), ms || 2400);
    }

    function dialog(opts) {
        const overlay = document.createElement("div");
        overlay.className = "dlg-overlay";
        const inputHtml = opts.input ? `<input id="dlg-input" type="text" value="${(opts.value || "").replace(/"/g, "&quot;")}" placeholder="${opts.placeholder || ""}">` : "";
        overlay.innerHTML =
            `<div class="dlg" role="dialog">
                <div class="dlg-head">${opts.title || "Windows"}</div>
                <div class="dlg-body">${opts.body || ""}${inputHtml}</div>
                <div class="dlg-actions">
                    <button data-dlg="cancel">${opts.cancelText || "Cancel"}</button>
                    <button data-dlg="ok" class="primary">${opts.okText || "OK"}</button>
                </div>
            </div>`;
        $("#desktop-area").appendChild(overlay);
        const close = () => overlay.remove();
        const input = $("#dlg-input", overlay);
        if (input) {
            setTimeout(() => { input.focus(); input.select(); }, 20);
            input.addEventListener("keydown", e => {
                if (e.key === "Enter") { e.preventDefault(); ok(); }
                if (e.key === "Escape") close();
            });
        }
        function ok() {
            const val = input ? input.value.trim() : null;
            close();
            if (opts.onOk) opts.onOk(val);
        }
        $("[data-dlg=cancel]", overlay).onclick = close;
        $("[data-dlg=ok]", overlay).onclick = ok;
        overlay.addEventListener("mousedown", e => { if (e.target === overlay) close(); });
        return overlay;
    }

    function showContextMenu(x, y, items) {
        const menu = $("#ctx-menu");
        menu.innerHTML = items.map((it, i) => {
            if (it.sep) return `<div class="sep"></div>`;
            return `<button data-i="${i}">${it.icon ? `<span>${it.icon}</span>` : ""}<span>${it.label}</span></button>`;
        }).join("");
        menu.classList.remove("hidden");
        const area = $("#desktop-area").getBoundingClientRect();
        const w = 205, h = items.length * 34 + 10;
        menu.style.left = Math.min(x, area.width - w - 6) + "px";
        menu.style.top = Math.min(y, area.height - h - 50) + "px";
        $$("button", menu).forEach(btn => {
            btn.onclick = () => {
                const item = items[Number(btn.dataset.i)];
                menu.classList.add("hidden");
                if (item && item.action) item.action();
            };
        });
    }
    function hideContextMenu() { $("#ctx-menu").classList.add("hidden"); }

    /* ================= DESKTOP / START / TASKBAR ================= */
    function renderDesktopIcons() {
        const wrap = $("#desktop-icons");
        wrap.innerHTML = "";
        DESKTOP_ICONS.forEach((item, i) => {
            const el = document.createElement("div");
            el.className = "desktop-icon";
            el.dataset.i = i;
            el.innerHTML = `<span class="ico">${item.icon}</span><span>${item.label}</span>`;
            el.addEventListener("mousedown", e => { e.stopPropagation(); });
            el.addEventListener("click", () => {
                $$(".desktop-icon").forEach(x => x.classList.remove("selected"));
                el.classList.add("selected");
            });
            el.addEventListener("dblclick", () => {
                if (item.app === "explorer" && item.path) state.explorerPath = item.path;
                openApp(item.app);
                fire("desktop-icon-open", { app: item.app, label: item.label });
            });
            el.addEventListener("contextmenu", e => {
                e.preventDefault(); e.stopPropagation();
                showContextMenu(e.clientX, e.clientY, [
                    { label: "Open", icon: "📂", action: () => openApp(item.app) },
                    { label: "Properties", icon: "ℹ️", action: () => toast("Thuộc tính: " + item.label) }
                ]);
            });
            wrap.appendChild(el);
        });
    }

    function renderStartApps(filter) {
        const wrap = $("#start-apps");
        const q = (filter || "").toLowerCase().trim();
        wrap.innerHTML = "";
        APPS.filter(a => !q || a.name.toLowerCase().includes(q)).forEach(app => {
            const b = document.createElement("button");
            b.className = "start-app";
            b.innerHTML = `<span class="ico">${app.icon}</span><span>${app.name}</span>`;
            b.onclick = () => { hideStart(); openApp(app.id); };
            wrap.appendChild(b);
        });
        if (!wrap.children.length) {
            wrap.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:#9fb3c2;font-size:.75rem;padding:18px">Không tìm thấy ứng dụng.</div>`;
        }
    }

    function toggleStart(force) {
        const menu = $("#start-menu");
        const shouldShow = force === undefined ? menu.classList.contains("hidden") : force;
        if (shouldShow) {
            menu.classList.remove("hidden");
            renderStartApps("");
            $("#start-search").value = "";
            setTimeout(() => $("#start-search").focus(), 30);
            fire("start-open");
        } else {
            menu.classList.add("hidden");
            if ($("#power-menu").classList.contains("hidden") === false) $("#power-menu").classList.add("hidden");
            fire("start-close");
        }
    }
    function hideStart() {
        if (!$("#start-menu").classList.contains("hidden")) {
            $("#start-menu").classList.add("hidden");
            $("#power-menu").classList.add("hidden");
        }
    }

    function setClock() {
        const d = new Date();
        const text = pad(d.getHours()) + ":" + pad(d.getMinutes());
        $("#tray-clock").textContent = text;
        $("#lock-time").textContent = text;
        const days = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
        $("#lock-date").textContent = days[d.getDay()] + ", " + pad(d.getDate()) + "/" + pad(d.getMonth() + 1) + "/" + d.getFullYear();
    }

    function renderTaskbar() {
        const wrap = $("#taskbar-apps");
        wrap.innerHTML = "";
        Object.keys(state.openApps).forEach(appId => {
            const app = metaOf(appId);
            const b = document.createElement("button");
            const isActive = !state.minimized[appId] && isTopWindow(appId);
            b.className = "task-app" + (isActive ? " active" : "");
            b.title = app.name;
            b.innerHTML = `<span class="ico">${app.icon}</span><span>${app.name}</span>`;
            b.onclick = () => {
                if (state.minimized[appId]) {
                    restoreWindow(appId);
                    focusWindow(appId);
                } else if (isTopWindow(appId)) {
                    minimizeWindow(appId);
                } else {
                    focusWindow(appId);
                }
            };
            wrap.appendChild(b);
        });
    }

    /* ================= WINDOW MANAGER ================= */
    function defaultRect(appId) {
        const area = $("#desktop-area").getBoundingClientRect();
        const base = {
            notepad: [620, 420],
            calculator: [300, 460],
            paint: [660, 480],
            explorer: [740, 500],
            settings: [760, 520],
            taskmgr: [760, 520],
            edge: [780, 540],
            store: [720, 500],
            recycle: [620, 440]
        }[appId] || [600, 420];
        const count = Object.keys(state.openApps).length;
        const off = (count % 6) * 26;
        return {
            w: Math.min(base[0], area.width - 24),
            h: Math.min(base[1], area.height - 70),
            x: Math.max(20, Math.round((area.width - base[0]) / 2) + off - 40),
            y: Math.max(12, Math.round((area.height - base[1]) / 2) + off - 30)
        };
    }

    function createWindow(appId, opts) {
        const app = metaOf(appId);
        const rect = defaultRect(appId);
        const win = document.createElement("div");
        win.className = "win focused";
        win.dataset.app = appId;
        win.style.left = rect.x + "px";
        win.style.top = rect.y + "px";
        win.style.width = rect.w + "px";
        win.style.height = rect.h + "px";
        win.style.zIndex = ++state.zIndex;
        win.innerHTML = `
            <div class="win-titlebar">
                <div class="win-title"><span class="ico">${app.icon}</span><span class="title-text">${app.name}</span></div>
                <div class="win-controls">
                    <button data-win="min" title="Thu nhỏ">—</button>
                    <button data-win="max" title="Phóng to">□</button>
                    <button data-win="close" class="close" title="Đóng">✕</button>
                </div>
            </div>
            <div class="win-body"></div>`;
        $("#windows-layer").appendChild(win);
        state.openApps[appId] = win;
        state.minimized[appId] = false;
        state.maximized[appId] = false;

        const body = $(".win-body", win);
        const renderer = (window.SIM_APPS && window.SIM_APPS.render && window.SIM_APPS.render[appId]);
        if (renderer) renderer(body, win, opts || {});
        else body.innerHTML = `<div style="padding:24px;font-size:.85rem">Ứng dụng ${app.name} đang được xây dựng.</div>`;

        win.addEventListener("mousedown", () => focusWindow(appId));
        win.addEventListener("contextmenu", e => { if (appId === "explorer") e.preventDefault(); });

        $("[data-win=min]", win).onclick = e => { e.stopPropagation(); minimizeWindow(appId); };
        $("[data-win=max]", win).onclick = e => { e.stopPropagation(); toggleMaximize(appId); };
        $("[data-win=close]", win).onclick = e => { e.stopPropagation(); closeWindow(appId); };

        enableDrag(win, appId);
        renderTaskbar();
        return win;
    }

    function enableDrag(win, appId) {
        const bar = $(".win-titlebar", win);
        let dragging = false, sx = 0, sy = 0, ox = 0, oy = 0;
        bar.addEventListener("pointerdown", e => {
            if (e.target.closest("button")) return;
            if (state.maximized[appId]) return;
            dragging = true;
            sx = e.clientX; sy = e.clientY;
            ox = win.offsetLeft; oy = win.offsetTop;
            bar.setPointerCapture(e.pointerId);
            bar.style.cursor = "grabbing";
        });
        bar.addEventListener("pointermove", e => {
            if (!dragging) return;
            const area = $("#desktop-area").getBoundingClientRect();
            let nx = ox + e.clientX - sx;
            let ny = oy + e.clientY - sy;
            nx = Math.max(-win.offsetWidth + 90, Math.min(nx, area.width - 90));
            ny = Math.max(0, Math.min(ny, area.height - 44 - 40));
            win.style.left = nx + "px";
            win.style.top = ny + "px";
            win.style.zIndex = ++state.zIndex;
        });
        bar.addEventListener("pointerup", e => {
            if (!dragging) return;
            dragging = false;
            bar.style.cursor = "default";
            const area = $("#desktop-area").getBoundingClientRect();
            if (e.clientX < 18) snapWindow(appId, "left");
            else if (e.clientX > area.width - 18) snapWindow(appId, "right");
            else if (e.clientY < 6) toggleMaximize(appId, true);
            renderTaskbar();
        });
    }

    function isTopWindow(appId) {
        const win = state.openApps[appId];
        if (!win) return false;
        const tops = Object.values(state.openApps).filter(w => !state.minimized[w.dataset.app]);
        if (!tops.length) return false;
        return tops.reduce((a, b) => Number(a.style.zIndex) > Number(b.style.zIndex) ? a : b) === win;
    }

    function focusWindow(appId) {
        const win = state.openApps[appId];
        if (!win) return;
        state.minimized[appId] = false;
        win.classList.remove("minimized");
        win.style.zIndex = ++state.zIndex;
        Object.values(state.openApps).forEach(w => w.classList.toggle("focused", w === win));
        renderTaskbar();
        fire("win-focus", { app: appId });
    }

    function openApp(appId, opts) {
        if (!metaOf(appId).name) return;
        hideStart();
        hideContextMenu();
        if (state.openApps[appId]) {
            restoreWindow(appId);
            focusWindow(appId);
            if (appId === "explorer" && opts && opts.path) {
                state.explorerPath = opts.path;
                refreshApp("explorer");
            }
            return;
        }
        createWindow(appId, opts);
        fire("app-open", { app: appId });
    }

    function closeWindow(appId) {
        const win = state.openApps[appId];
        if (!win) return;
        win.remove();
        delete state.openApps[appId];
        delete state.minimized[appId];
        delete state.maximized[appId];
        delete state.snapped[appId];
        renderTaskbar();
        fire("app-close", { app: appId });
    }

    function minimizeWindow(appId) {
        const win = state.openApps[appId];
        if (!win) return;
        state.minimized[appId] = true;
        win.classList.add("minimized");
        renderTaskbar();
        fire("win-minimize", { app: appId });
    }

    function restoreWindow(appId) {
        const win = state.openApps[appId];
        if (!win) return;
        state.minimized[appId] = false;
        win.classList.remove("minimized");
        renderTaskbar();
        fire("win-restore", { app: appId });
    }

    function toggleMaximize(appId, forceOn) {
        const win = state.openApps[appId];
        if (!win) return;
        const isMax = win.classList.contains("maximized");
        if (isMax && !forceOn) {
            win.classList.remove("maximized");
            state.maximized[appId] = false;
            fire("win-restore", { app: appId });
        } else if (!isMax) {
            win.classList.remove("snap-left", "snap-right");
            state.snapped[appId] = null;
            win.classList.add("maximized");
            state.maximized[appId] = true;
            fire("win-maximize", { app: appId });
        }
        focusWindow(appId);
    }

    function snapWindow(appId, side) {
        const win = state.openApps[appId];
        if (!win) return;
        win.classList.remove("maximized", "snap-left", "snap-right");
        state.maximized[appId] = false;
        win.classList.add(side === "left" ? "snap-left" : "snap-right");
        state.snapped[appId] = side;
        focusWindow(appId);
        fire("win-snap", { app: appId, side: side });
        toast(side === "left" ? "Đã snap cửa sổ sang nửa TRÁI màn hình." : "Đã snap cửa sổ sang nửa PHẢI màn hình.");
    }

    function refreshApp(appId) {
        const win = state.openApps[appId];
        if (!win) return;
        const body = $(".win-body", win);
        const renderer = window.SIM_APPS && window.SIM_APPS.render && window.SIM_APPS.render[appId];
        if (renderer) renderer(body, win, {});
    }
    function setTitle(appId, text) {
        const win = state.openApps[appId];
        if (!win) return;
        const el = $(".title-text", win);
        if (el) el.textContent = text;
    }

    /* ================= MISSION ================= */
    function matchStep(step, action, data) {
        if (step.when) {
            try { return !!step.when(action, data || {}, state); } catch (e) { return false; }
        }
        if (!step.match) return false;
        return Object.keys(step.match).every(key => {
            if (key === "action") return action === step.match.action;
            return (data || {})[key] === step.match[key];
        });
    }

    function fire(action, data) {
        data = data || {};
        let changed = false;
        scenario.steps.forEach(step => {
            if (state.stepDone[step.id]) return;
            if (matchStep(step, action, data)) {
                state.stepDone[step.id] = true;
                changed = true;
            }
        });
        if (changed) {
            renderMission();
            const all = scenario.steps.every(s => state.stepDone[s.id]);
            if (all) showCelebrate();
        }
    }

    function currentStep() {
        return scenario.steps.find(s => !state.stepDone[s.id]);
    }

    function renderMission() {
        const titleEl = $("#mission-title");
        titleEl.textContent = scenario.title || "Nhiệm vụ Windows 10";
        $("#mission-sub").textContent = scenario.subtitle || "Thực hành thao tác trên Windows 10";
        const done = scenario.steps.filter(s => state.stepDone[s.id]).length;
        const total = scenario.steps.length;
        $("#mission-count").textContent = done + "/" + total;
        $("#mission-bar").style.width = total ? (done / total * 100) + "%" : "0%";
        const list = $("#mission-steps");
        list.innerHTML = "";
        const cur = currentStep();
        scenario.steps.forEach((step, i) => {
            const li = document.createElement("li");
            const isDone = !!state.stepDone[step.id];
            li.className = isDone ? "done" : (cur && cur.id === step.id ? "current" : "");
            li.innerHTML = `<span class="num">${isDone ? "✓" : i + 1}</span><span class="txt">${step.text}</span>`;
            list.appendChild(li);
        });
    }

    function showHint() {
        const step = currentStep();
        const hintEl = $("#mission-hint");
        if (!step) {
            hintEl.innerHTML = "🎉 Bé đã hoàn thành mọi bước! Bấm ↺ Làm lại để luyện tập lần nữa.";
            return;
        }
        hintEl.innerHTML = `<strong>Bước ${scenario.steps.indexOf(step) + 1}:</strong> ${step.hint || step.text}`;
        hintEl.classList.remove("flash");
        void hintEl.offsetWidth;
        hintEl.classList.add("flash");
        if (step.focus) {
            try { step.focus(state); } catch (e) {}
        }
    }

    function showCelebrate() {
        if (state.celebrateShown) return;
        state.celebrateShown = true;
        $("#celebrate-text").textContent = scenario.finish || "Bé đã hoàn thành xuất sắc nhiệm vụ!";
        $("#celebrate").classList.remove("hidden");
        const conf = $("#confetti");
        conf.innerHTML = "";
        const colors = ["#4cc2ff", "#67e8b9", "#ffd166", "#ff6b6b", "#c77dff", "#ffffff"];
        for (let i = 0; i < 60; i++) {
            const p = document.createElement("span");
            p.className = "confetti-piece";
            p.style.left = Math.random() * 100 + "%";
            p.style.background = colors[i % colors.length];
            p.style.animationDelay = (Math.random() * 1.2) + "s";
            p.style.animationDuration = (1.4 + Math.random() * 1.4) + "s";
            conf.appendChild(p);
        }
        fire("mission-complete");
    }
    function hideCelebrate() { $("#celebrate").classList.add("hidden"); }
    function resetMission() {
        state.stepDone = {};
        state.celebrateShown = false;
        hideCelebrate();
        $("#mission-hint").innerHTML = "Bấm 💡 Gợi ý nếu bé cần trợ giúp.";
        renderMission();
        toast("Đã làm lại nhiệm vụ. Chúc bé may mắn!");
    }

    /* ================= POWER / LOCK ================= */
    function openPowerMenu() {
        const menu = $("#power-menu");
        menu.classList.toggle("hidden");
        if (!menu.classList.contains("hidden")) fire("power-menu-open");
    }
    function doSleep() {
        hideStart();
        $("#power-menu").classList.add("hidden");
        state.powerState = "sleep";
        const scr = $("#power-screen");
        scr.innerHTML = `<div><h3>🌙 Máy đang ngủ (Sleep)</h3><p>Bấm vào màn hình để đánh thức máy.</p></div>`;
        scr.classList.remove("hidden");
        fire("power-sleep");
    }
    function wakeUp() {
        $("#power-screen").classList.add("hidden");
        state.powerState = "on";
        toast("Máy đã thức dậy. Mọi ứng dụng vẫn còn nguyên!");
        fire("wake");
    }
    function doRestart() {
        hideStart();
        $("#power-menu").classList.add("hidden");
        state.powerState = "restart";
        const scr = $("#power-screen");
        scr.innerHTML = `<div><div class="spin"></div><h3>Đang khởi động lại...</h3><p>Windows đang đóng các ứng dụng an toàn.</p></div>`;
        scr.classList.remove("hidden");
        fire("power-restart");
        setTimeout(() => {
            Object.keys(state.openApps).forEach(id => closeWindow(id));
            scr.classList.add("hidden");
            state.powerState = "on";
            toast("Windows đã khởi động lại thành công!");
            fire("restart-done");
        }, 1700);
    }
    function doShutdown() {
        hideStart();
        $("#power-menu").classList.add("hidden");
        state.powerState = "shutdown";
        const scr = $("#power-screen");
        scr.innerHTML = `<div><div class="spin"></div><h3>Đang tắt máy...</h3><p>Đừng rút điện khi màn hình chưa tắt hẳn.</p></div>`;
        scr.classList.remove("hidden");
        fire("power-shutdown");
        setTimeout(() => {
            scr.innerHTML = `<div><div style="font-size:2.4rem">⏻</div><h3>Máy đã tắt</h3><p>Bé đã tắt máy đúng cách. Bấm nút bên dưới để bật lại.</p><button id="boot-btn">▶ Bật máy</button></div>`;
            $("#boot-btn").onclick = () => {
                scr.innerHTML = `<div><div class="spin"></div><h3>Đang khởi động Windows 10...</h3><p>POST → tìm ổ khởi động → nạp Windows.</p></div>`;
                fire("power-on");
                setTimeout(() => {
                    scr.classList.add("hidden");
                    state.powerState = "on";
                    toast("Chào mừng trở lại Windows 10!");
                    fire("boot-done");
                }, 1500);
            };
        }, 1400);
    }
    function lockScreen() {
        hideStart();
        $("#power-menu").classList.add("hidden");
        $("#lock-screen").classList.remove("hidden");
        $("#pin-input").value = "";
        $("#pin-err").textContent = "";
        setTimeout(() => $("#pin-input").focus(), 50);
        fire("lock");
    }
    function tryLogin() {
        const pin = $("#pin-input").value.trim();
        if (pin === "1234") {
            $("#lock-screen").classList.add("hidden");
            toast("Đăng nhập thành công. Chào Coder Nhi!");
            fire("login");
        } else {
            $("#pin-err").textContent = "PIN chưa đúng. Gợi ý: 1234";
            $("#pin-input").value = "";
            $("#pin-input").focus();
        }
    }

    /* ================= SETTINGS NAV HELPER ================= */
    function settingsGo(section, page) {
        state.settingsSection = section;
        state.settingsPage = page;
        const win = state.openApps["settings"];
        if (win) refreshApp("settings");
        fire("settings-open", { section: section, page: page });
    }

    /* ================= INIT / EXPOSE ================= */
    function init() {
        scenario = (window.SIM_SCENARIOS && window.SIM_SCENARIOS[lessonId]) || FALLBACK_SCENARIO;
        state.scenario = scenario;
        state.folders = DEFAULT_FOLDERS.slice();
        state.files = DEFAULT_FILES.map(f => Object.assign({}, f));
        if (scenario.setup) {
            (scenario.setup.files || []).forEach(addFile);
            (scenario.setup.folders || []).forEach(addFolder);
            if (scenario.setup.extensionsShown) state.extensionsShown = true;
        }
        renderDesktopIcons();
        renderStartApps("");
        renderTaskbar();
        setClock();
        setInterval(setClock, 20000);
        renderMission();

        $("#taskbar-start").onclick = e => { e.stopPropagation(); toggleStart(); };
        $("#taskbar-search-input").addEventListener("focus", () => toggleStart(true));
        $("#start-search").addEventListener("input", e => renderStartApps(e.target.value));
        $("#start-search").addEventListener("keydown", e => {
            if (e.key === "Enter") {
                const first = $("#start-apps .start-app");
                if (first) first.click();
            }
        });
        $("#start-power").onclick = e => { e.stopPropagation(); openPowerMenu(); };
        $("#start-lock").onclick = () => lockScreen();
        $("#start-user").onclick = () => lockScreen();
        $$("#power-menu button").forEach(b => {
            b.onclick = () => {
                const mode = b.dataset.power;
                if (mode === "sleep") doSleep();
                else if (mode === "restart") doRestart();
                else doShutdown();
            };
        });
        $("#power-screen").addEventListener("click", e => {
            if (state.powerState === "sleep") wakeUp();
        });
        $("#pin-go").onclick = tryLogin;
        $("#pin-input").addEventListener("keydown", e => { if (e.key === "Enter") tryLogin(); });
        $("#lock-screen").addEventListener("mousedown", e => {
            if (e.target.id === "lock-screen") $("#pin-input").focus();
        });
        $("#celebrate-close").onclick = hideCelebrate;
        $("#celebrate-reset").onclick = resetMission;
        $("#btn-hint").onclick = showHint;
        $("#btn-reset").onclick = resetMission;

        $("#desktop-area").addEventListener("mousedown", e => {
            if (e.target.id === "desktop-area") {
                hideStart();
                hideContextMenu();
                $$(".desktop-icon").forEach(x => x.classList.remove("selected"));
            }
        });
        $("#desktop-area").addEventListener("contextmenu", e => {
            if (e.target.id !== "desktop-area") return;
            e.preventDefault();
            fire("desktop-right-click");
            showContextMenu(e.clientX, e.clientY, [
                { label: "View", icon: "👁️", action: () => toast("View: Large icons / Medium icons / Small icons") },
                { label: "Sort by", icon: "↕️", action: () => toast("Sort by: Name / Size / Item type / Date modified") },
                { label: "Refresh", icon: "🔄", action: () => toast("Desktop đã được làm mới.") },
                { sep: true },
                { label: "New folder", icon: "📁", action: () => {
                    dialog({ title: "New folder", body: "Nhập tên thư mục mới trên Desktop:", input: true, value: "ThuMucMoi", okText: "Create", onOk: name => {
                        if (!name) return;
                        addFolder("Desktop/" + name);
                        addFolder("Desktop");
                        toast("Đã tạo thư mục " + name + " trên Desktop.");
                        fire("desktop-new-folder", { name: name });
                    }});
                }},
                { sep: true },
                { label: "Display settings", icon: "🖥️", action: () => { openApp("settings"); settingsGo("system", "display"); } },
                { label: "Personalize", icon: "🎨", action: () => {
                    openApp("settings");
                    settingsGo("personalization", "background");
                    fire("desktop-personalize");
                }}
            ]);
        });
        document.addEventListener("mousedown", e => {
            if (!e.target.closest("#start-menu") && !e.target.closest("#taskbar-start") && !e.target.closest("#taskbar-search")) hideStart();
            if (!e.target.closest("#ctx-menu")) hideContextMenu();
        });
        document.addEventListener("keydown", e => {
            if (e.key === "Escape") {
                hideStart();
                hideContextMenu();
                hideCelebrate();
            }
        });
        // Cập nhật mission khi mở app đầu tiên
        fire("sim-ready");
        toast("Chào bé! Hãy làm theo nhiệm vụ bên phải nhé.", 3200);
    }

    window.Sim = {
        state,
        apps: APPS,
        get scenario() { return scenario; },
        init,
        fire,
        toast,
        dialog,
        openApp,
        closeWindow,
        minimizeWindow,
        restoreWindow,
        focusWindow,
        toggleMaximize,
        snapWindow,
        refreshApp,
        setTitle,
        settingsGo,
        lockScreen,
        tryLogin,
        showContextMenu,
        hideContextMenu,
        addFile,
        addFolder,
        findFile,
        deleteFile,
        getEntries,
        fileType,
        iconFor,
        fmtSize,
        extOf,
        baseName,
        parentPath,
        isFolderEntry,
        metaOf,
        openPowerMenu,
        showHint,
        resetMission
    };
})();
