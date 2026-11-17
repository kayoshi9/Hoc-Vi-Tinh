/* ============================================================
   SIM-WIN10 APPS — Nội dung từng ứng dụng Windows 10
   ============================================================ */
(function () {
    "use strict";
    const Sim = window.Sim;
    const $ = (sel, root) => (root || document).querySelector(sel);
    const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
    const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
    const st = () => Sim.state;

    function refresh(appId) { Sim.refreshApp(appId); }
    function removeExt(name) {
        const i = name.lastIndexOf(".");
        return i > 0 ? name.slice(0, i) : name;
    }

    /* =====================================================
       FILE EXPLORER
       ===================================================== */
    function renderExplorer(body, win) {
        const S = st();
        const selected = { entry: null };
        const navPaths = [
            { label: "Desktop", icon: "🖥️", path: "Desktop" },
            { label: "Documents", icon: "📄", path: "Documents" },
            { label: "Downloads", icon: "⬇️", path: "Downloads" },
            { label: "Pictures", icon: "🖼️", path: "Pictures" },
            { label: "This PC", icon: "💻", path: "This PC" }
        ];
        body.innerHTML = `
            <div class="exp">
                <div class="exp-toolbar">
                    <button data-act="new">📁 New folder</button>
                    <button data-act="view" class="${S.extensionsShown ? "on" : ""}">👁 Extensions: ${S.extensionsShown ? "ON" : "OFF"}</button>
                    <button data-act="sort">↕ Sort</button>
                    <button data-act="props">ℹ Properties</button>
                    <button data-act="delete">🗑 Delete</button>
                    <div class="exp-address" id="exp-address"></div>
                </div>
                <div class="exp-main">
                    <div class="exp-nav" id="exp-nav"></div>
                    <div class="exp-files" id="exp-files"></div>
                </div>
                <div class="win-status"><span id="exp-status"></span><span>${S.extensionsShown ? "File name extensions: ON" : "File name extensions: OFF"}</span></div>
            </div>`;
        const filesEl = $("#exp-files", body);
        const addrEl = $("#exp-address", body);
        const navEl = $("#exp-nav", body);

        function renderNav() {
            navEl.innerHTML = `<div class="nav-title">Quick access</div>`;
            navPaths.slice(0, 4).forEach(p => {
                const b = document.createElement("button");
                b.className = S.explorerPath === p.path ? "active" : "";
                b.innerHTML = `<span>${p.icon}</span><span>${p.label}</span>`;
                b.onclick = () => { S.explorerPath = p.path; renderExplorer(body, win); firePath(); };
                navEl.appendChild(b);
            });
            navEl.insertAdjacentHTML("beforeend", `<div class="nav-title">This PC</div>`);
            const b = document.createElement("button");
            b.className = S.explorerPath === "This PC" ? "active" : "";
            b.innerHTML = `<span>💻</span><span>This PC</span>`;
            b.onclick = () => { S.explorerPath = "This PC"; renderExplorer(body, win); firePath(); };
            navEl.appendChild(b);
        }
        function firePath() {
            Sim.fire("explorer-navigate", { path: S.explorerPath });
        }
        function renderAddress() {
            const parts = S.explorerPath.split("/");
            let html = `<span class="crumb" data-path="This PC">💻 This PC</span>`;
            let acc = "";
            parts.forEach((p, i) => {
                acc = i === 0 ? p : acc + "/" + p;
                if (p === "This PC") return;
                html += ` <span style="color:#8A8886">›</span> <span class="crumb" data-path="${esc(acc)}">${esc(p)}</span>`;
            });
            addrEl.innerHTML = html;
            $$(".crumb", addrEl).forEach(c => {
                c.onclick = () => { S.explorerPath = c.dataset.path; renderExplorer(body, win); firePath(); };
            });
        }
        function sortEntries(list) {
            const by = S.explorerSort || "name";
            return list.slice().sort((a, b) => {
                if (S.isFolderEntry ? S.isFolderEntry(a) !== S.isFolderEntry(b) : false) return 0;
                if (by === "type") return String(a.type).localeCompare(String(b.type)) || a.name.localeCompare(b.name);
                if (by === "size") return (b.size || 0) - (a.size || 0);
                if (by === "date") return a.name.localeCompare(b.name);
                return a.name.localeCompare(b.name);
            });
        }
        function showProperties(entry) {
            const typeLabel = entry.type === "folder" ? "File folder" : (entry.type === "drive" ? "Local Disk" : Sim.fileType(entry.name)[0]);
            const size = entry.type === "file" ? Sim.fmtSize(entry.size) : (entry.free || "—");
            Sim.dialog({
                title: entry.name + " Properties",
                body: `<div class="spec-box">
                    <b>Name:</b> ${esc(entry.name)}<br>
                    <b>Type:</b> ${esc(typeLabel)}<br>
                    <b>Location:</b> ${esc(S.explorerPath)}<br>
                    <b>Size:</b> ${esc(size)}<br>
                    <b>Modified:</b> ${esc(entry.modified || "15/01/2025 09:00")}<br>
                    <b>Extension:</b> ${entry.type === "file" ? "." + esc(Sim.extOf(entry.name)) : "(không có)"}
                </div>`,
                okText: "OK"
            });
            Sim.fire("explorer-properties", { name: entry.name });
        }
        function deleteEntry(entry) {
            if (entry.type !== "file") { Sim.toast("Chỉ xóa tệp trong mô phỏng này."); return; }
            Sim.deleteFile(entry.name, S.explorerPath);
            Sim.toast("Đã chuyển " + entry.name + " vào Recycle Bin.");
            Sim.fire("explorer-delete", { name: entry.name });
            refresh("explorer");
        }
        function renameEntry(entry) {
            Sim.dialog({
                title: "Rename",
                body: "Nhập tên mới cho <b>" + esc(entry.name) + "</b>:",
                input: true,
                value: entry.name,
                okText: "Rename",
                onOk: name => {
                    if (!name || name === entry.name) return;
                    if (entry.type === "file") {
                        const f = Sim.findFile(entry.name, S.explorerPath);
                        if (f) f.name = name;
                        Sim.fire("explorer-rename", { from: entry.name, to: name });
                    } else {
                        const oldPath = entry.path;
                        const newPath = (Sim.parentPath(oldPath) ? Sim.parentPath(oldPath) + "/" : "") + name;
                        S.folders = S.folders.map(p => p === oldPath ? newPath : (p.startsWith(oldPath + "/") ? newPath + p.slice(oldPath.length) : p));
                        S.files.forEach(f => { if (f.folder === oldPath) f.folder = newPath; });
                        Sim.fire("explorer-rename", { from: entry.name, to: name });
                    }
                    Sim.toast("Đã đổi tên thành " + name + ".");
                    refresh("explorer");
                }
            });
        }
        function openEntry(entry) {
            if (entry.type === "folder") {
                S.explorerPath = entry.path;
                refresh("explorer");
                firePath();
                Sim.fire("explorer-open-folder", { name: entry.name });
                return;
            }
            if (entry.type === "drive") {
                Sim.toast("Ổ " + entry.name + " chứa hệ điều hành và dữ liệu. Mô phỏng chỉ mở được các thư mục người dùng.");
                return;
            }
            const ext = Sim.extOf(entry.name);
            Sim.fire("explorer-open-file", { name: entry.name });
            if (ext === "txt") {
                S.notepadFile = entry.name;
                Sim.openApp("notepad");
                Sim.refreshApp("notepad");
            } else if (["png", "jpg", "jpeg", "bmp"].includes(ext)) {
                Sim.openApp("paint");
            } else if (ext === "html") {
                S.browserUrl = "edu.vn";
                Sim.openApp("edge");
                Sim.refreshApp("edge");
            } else if (ext === "exe") {
                Sim.dialog({ title: "Windows protected your PC", body: "Tệp <b>.exe</b> có thể chứa phần mềm độc hại. Chỉ chạy khi bé biết rõ nguồn gốc và được người lớn kiểm tra.", okText: "Đã hiểu" });
                Sim.fire("explorer-exe-warning", { name: entry.name });
            } else {
                Sim.toast("Windows sẽ mở " + entry.name + " bằng ứng dụng phù hợp (mô phỏng).");
            }
        }
        function renderFiles() {
            const entries = sortEntries(Sim.getEntries(S.explorerPath));
            filesEl.innerHTML = "";
            if (!entries.length) {
                filesEl.innerHTML = `<div class="exp-empty">Thư mục này đang trống.<br>Bấm 📁 New folder để tạo thư mục mới.</div>`;
            }
            entries.forEach(entry => {
                const el = document.createElement("div");
                el.className = "exp-item";
                const label = entry.type === "file" && !S.extensionsShown ? removeExt(entry.name) : entry.name;
                el.innerHTML = `<span class="ico">${entry.icon || Sim.iconFor(entry.name)}</span><span>${esc(label)}</span>`;
                el.title = entry.name;
                el.addEventListener("click", e => {
                    e.stopPropagation();
                    $$(".exp-item", filesEl).forEach(x => x.classList.remove("selected"));
                    el.classList.add("selected");
                    selected.entry = entry;
                });
                el.addEventListener("dblclick", () => openEntry(entry));
                el.addEventListener("contextmenu", e => {
                    e.preventDefault(); e.stopPropagation();
                    selected.entry = entry;
                    Sim.showContextMenu(e.clientX, e.clientY, [
                        { label: "Open", icon: "📂", action: () => openEntry(entry) },
                        { label: "Rename", icon: "✏️", action: () => renameEntry(entry) },
                        { label: "Properties", icon: "ℹ️", action: () => showProperties(entry) },
                        { sep: true },
                        { label: "Delete", icon: "🗑️", action: () => deleteEntry(entry) }
                    ]);
                });
                filesEl.appendChild(el);
            });
            const status = $("#exp-status", body);
            if (status) status.textContent = entries.length + " item" + (entries.length === 1 ? "" : "s");
        }

        renderNav();
        renderAddress();
        renderFiles();

        filesEl.addEventListener("mousedown", e => {
            if (e.target === filesEl) {
                $$(".exp-item", filesEl).forEach(x => x.classList.remove("selected"));
                selected.entry = null;
            }
        });
        filesEl.addEventListener("contextmenu", e => {
            if (e.target !== filesEl) return;
            e.preventDefault();
            Sim.showContextMenu(e.clientX, e.clientY, [
                { label: "New folder", icon: "📁", action: () => $("[data-act=new]", body).click() },
                { label: "View: extensions", icon: "👁️", action: () => $("[data-act=view]", body).click() },
                { label: "Sort by", icon: "↕️", action: () => $("[data-act=sort]", body).click() },
                { label: "Refresh", icon: "🔄", action: () => refresh("explorer") }
            ]);
        });

        $("[data-act=new]", body).onclick = () => {
            Sim.dialog({
                title: "New folder",
                body: "Nhập tên thư mục mới trong <b>" + esc(S.explorerPath) + "</b>:",
                input: true,
                value: "ThuMucMoi",
                okText: "Create",
                onOk: name => {
                    if (!name) return;
                    const path = (S.explorerPath === "This PC" ? "Desktop" : S.explorerPath) + "/" + name;
                    Sim.addFolder(path);
                    Sim.toast("Đã tạo thư mục " + name + ".");
                    Sim.fire("explorer-new-folder", { name: name, path: path });
                    refresh("explorer");
                }
            });
        };
        $("[data-act=view]", body).onclick = () => {
            S.extensionsShown = !S.extensionsShown;
            Sim.toast(S.extensionsShown ? "Đã BẬT hiển thị phần mở rộng tệp." : "Đã TẮT hiển thị phần mở rộng tệp.");
            Sim.fire("explorer-extension-toggle", { value: S.extensionsShown });
            refresh("explorer");
        };
        $("[data-act=sort]", body).onclick = e => {
            const r = e.currentTarget.getBoundingClientRect();
            Sim.showContextMenu(r.left, r.bottom, [
                { label: "Name", action: () => { S.explorerSort = "name"; Sim.fire("explorer-sort", { by: "name" }); refresh("explorer"); } },
                { label: "Type", action: () => { S.explorerSort = "type"; Sim.fire("explorer-sort", { by: "type" }); refresh("explorer"); } },
                { label: "Size", action: () => { S.explorerSort = "size"; Sim.fire("explorer-sort", { by: "size" }); refresh("explorer"); } },
                { label: "Date modified", action: () => { S.explorerSort = "date"; Sim.fire("explorer-sort", { by: "date" }); refresh("explorer"); } }
            ]);
        };
        $("[data-act=props]", body).onclick = () => {
            if (!selected.entry) { Sim.toast("Hãy chọn một tệp hoặc thư mục trước."); return; }
            showProperties(selected.entry);
        };
        $("[data-act=delete]", body).onclick = () => {
            if (!selected.entry) { Sim.toast("Hãy chọn một tệp trước khi xóa."); return; }
            deleteEntry(selected.entry);
        };
    }

    /* =====================================================
       NOTEPAD
       ===================================================== */
    function renderNotepad(body, win) {
        const S = st();
        const file = S.notepadFile ? Sim.findFile(S.notepadFile) : null;
        const title = S.notepadFile || "Untitled";
        Sim.setTitle("notepad", title + " - Notepad");
        body.innerHTML = `
            <div class="np-menubar">
                <div class="np-menu"><button>File</button><div class="np-dropdown">
                    <button data-np="new">New <span class="sc">Ctrl+N</span></button>
                    <button data-np="open">Open... <span class="sc">Ctrl+O</span></button>
                    <button data-np="save">Save <span class="sc">Ctrl+S</span></button>
                    <button data-np="saveas">Save as...</button>
                    <button data-np="exit">Exit</button>
                </div></div>
                <div class="np-menu"><button>Edit</button><div class="np-dropdown">
                    <button data-np="undo">Undo <span class="sc">Ctrl+Z</span></button>
                    <button data-np="cut">Cut <span class="sc">Ctrl+X</span></button>
                    <button data-np="copy">Copy <span class="sc">Ctrl+C</span></button>
                    <button data-np="paste">Paste <span class="sc">Ctrl+V</span></button>
                    <button data-np="selectall">Select all <span class="sc">Ctrl+A</span></button>
                </div></div>
                <div class="np-menu"><button>Format</button><div class="np-dropdown">
                    <button data-np="wrap">Word wrap</button>
                    <button data-np="font">Font...</button>
                </div></div>
                <div class="np-menu"><button>View</button><div class="np-dropdown">
                    <button data-np="zoomin">Zoom in</button>
                    <button data-np="zoomout">Zoom out</button>
                    <button data-np="status">Status bar</button>
                </div></div>
                <div class="np-menu"><button>Help</button><div class="np-dropdown">
                    <button data-np="about">About Notepad</button>
                </div></div>
            </div>
            <textarea class="np-area" spellcheck="false" placeholder="Gõ văn bản của bé ở đây...">${file ? esc(file.content || "") : ""}</textarea>
            <div class="win-status"><span id="np-status">Ln 1, Col 1</span><span>100%</span></div>`;
        const area = $(".np-area", body);
        const status = $("#np-status", body);
        let wrap = true;
        let zoom = 1;
        function updateStatus() {
            const pos = area.selectionStart || 0;
            const before = area.value.slice(0, pos);
            const lines = before.split("\n");
            status.textContent = `Ln ${lines.length}, Col ${lines[lines.length - 1].length + 1}`;
        }
        area.addEventListener("input", () => {
            updateStatus();
            const dirty = " *";
            Sim.setTitle("notepad", (S.notepadFile || "Untitled") + dirty + " - Notepad");
            Sim.fire("notepad-type", { length: area.value.length, text: area.value });
        });
        area.addEventListener("keyup", updateStatus);
        area.addEventListener("click", updateStatus);
        area.addEventListener("keydown", e => {
            if (e.ctrlKey && e.key.toLowerCase() === "s") { e.preventDefault(); save(); }
        });
        function save() {
            let name = S.notepadFile;
            if (!name) {
                Sim.dialog({
                    title: "Save as",
                    body: "Nhập tên tệp (nhớ ghi đuôi .txt):",
                    input: true,
                    value: "BaiViet.txt",
                    okText: "Save",
                    onOk: val => {
                        if (!val) return;
                        if (!val.includes(".")) val += ".txt";
                        S.notepadFile = val;
                        const f = Sim.findFile(val);
                        if (f) { f.content = area.value; f.size = Math.max(512, area.value.length * 2); }
                        else Sim.addFile({ name: val, folder: "Desktop", size: Math.max(512, area.value.length * 2), content: area.value });
                        Sim.setTitle("notepad", val + " - Notepad");
                        Sim.toast("Đã lưu " + val + " vào Desktop (mô phỏng).");
                        Sim.fire("notepad-save", { name: val });
                    }
                });
                return;
            }
            const f = Sim.findFile(name);
            if (f) { f.content = area.value; f.size = Math.max(512, area.value.length * 2); }
            Sim.setTitle("notepad", name + " - Notepad");
            Sim.toast("Đã lưu " + name + ".");
            Sim.fire("notepad-save", { name: name });
        }
        $$(".np-menu > button", body).forEach(b => {
            b.onclick = e => {
                e.stopPropagation();
                const menu = b.parentElement;
                const wasOpen = menu.classList.contains("open");
                $$(".np-menu", body).forEach(m => m.classList.remove("open"));
                menu.classList.toggle("open", !wasOpen);
            };
        });
        document.addEventListener("click", () => $$(".np-menu", body).forEach(m => m.classList.remove("open")));
        $$("[data-np]", body).forEach(btn => {
            btn.onclick = () => {
                const act = btn.dataset.np;
                $$(".np-menu", body).forEach(m => m.classList.remove("open"));
                if (act === "save") save();
                else if (act === "saveas") { S.notepadFile = null; save(); }
                else if (act === "new") { area.value = ""; S.notepadFile = null; Sim.setTitle("notepad", "Untitled - Notepad"); }
                else if (act === "exit") Sim.closeWindow("notepad");
                else if (act === "undo") { area.focus(); document.execCommand && document.execCommand("undo"); }
                else if (act === "selectall") { area.select(); }
                else if (act === "wrap") { wrap = !wrap; area.style.whiteSpace = wrap ? "pre-wrap" : "pre"; Sim.toast("Word wrap: " + (wrap ? "ON" : "OFF")); }
                else if (act === "font") Sim.toast("Hộp thoại Font: chọn Segoe UI hoặc Consolas (mô phỏng).");
                else if (act === "zoomin") { zoom = Math.min(1.6, zoom + 0.1); area.style.fontSize = (0.88 * zoom) + "rem"; }
                else if (act === "zoomout") { zoom = Math.max(0.7, zoom - 0.1); area.style.fontSize = (0.88 * zoom) + "rem"; }
                else if (act === "about") Sim.dialog({ title: "About Notepad", body: "Notepad — trình soạn thảo văn bản thuần của Windows 10.<br>Dùng để gõ ghi chú, viết code đơn giản và lưu tệp .txt.", okText: "OK" });
                else Sim.toast("Lệnh " + act + " đã được chọn (mô phỏng).");
            };
        });
    }

    /* =====================================================
       CALCULATOR
       ===================================================== */
    function renderCalculator(body, win) {
        body.innerHTML = `
            <div class="calc">
                <div class="calc-display"><div class="calc-sub" id="calc-sub"></div><div id="calc-val">0</div></div>
                <div class="calc-grid">
                    <button data-k="C" class="op">C</button><button data-k="back" class="op">⌫</button>
                    <button data-k="%" class="op">%</button><button data-k="/" class="op">÷</button>
                    <button data-k="7">7</button><button data-k="8">8</button><button data-k="9">9</button><button data-k="*" class="op">×</button>
                    <button data-k="4">4</button><button data-k="5">5</button><button data-k="6">6</button><button data-k="-" class="op">−</button>
                    <button data-k="1">1</button><button data-k="2">2</button><button data-k="3">3</button><button data-k="+" class="op">+</button>
                    <button data-k="neg" class="op">±</button><button data-k="0">0</button><button data-k=".">.</button><button data-k="=" class="eq">=</button>
                </div>
            </div>`;
        const valEl = $("#calc-val", body);
        const subEl = $("#calc-sub", body);
        let expr = "";
        let justEvaluated = false;
        function show() { valEl.textContent = expr === "" ? "0" : expr; }
        function press(k) {
            if (k === "C") { expr = ""; subEl.textContent = ""; show(); return; }
            if (k === "back") { expr = expr.slice(0, -1); show(); return; }
            if (k === "neg") {
                if (expr.startsWith("-")) expr = expr.slice(1);
                else expr = "-" + expr;
                show(); return;
            }
            if (k === "=") {
                try {
                    if (!expr) return;
                    const safe = expr.replace(/%/g, "/100");
                    if (!/^[0-9+\-*/().\s]+$/.test(safe)) throw new Error("bad");
                    const result = Function('"use strict";return (' + safe + ')')();
                    subEl.textContent = expr + " =";
                    expr = String(Math.round(result * 1e10) / 1e10);
                    show();
                    Sim.fire("calculator-result", { value: expr });
                    Sim.toast("Kết quả: " + expr);
                } catch (e) {
                    valEl.textContent = "Lỗi";
                    expr = "";
                }
                return;
            }
            if (justEvaluated && /[0-9.]/.test(k)) { expr = ""; subEl.textContent = ""; }
            justEvaluated = false;
            if (expr === "0" && /[0-9]/.test(k)) expr = "";
            expr += k;
            if (expr.length > 22) expr = expr.slice(0, 22);
            show();
        }
        $$(".calc-grid button", body).forEach(b => { b.onclick = () => press(b.dataset.k); });
        body.tabIndex = 0;
        body.addEventListener("keydown", e => {
            if (/[0-9+\-*/.%]/.test(e.key)) { press(e.key); e.preventDefault(); }
            else if (e.key === "Enter") { press("="); e.preventDefault(); }
            else if (e.key === "Backspace") { press("back"); e.preventDefault(); }
            else if (e.key === "Escape") { press("C"); }
        });
        show();
    }

    /* =====================================================
       PAINT
       ===================================================== */
    function renderPaint(body, win) {
        const colors = ["#000000", "#e53935", "#fb8c00", "#fdd835", "#43a047", "#1e88e5", "#8e24aa", "#ffffff"];
        body.innerHTML = `
            <div class="paint-wrap">
                <div class="paint-tools">
                    <span style="font-size:.72rem;font-weight:600">Màu:</span>
                    ${colors.map((c, i) => `<button class="paint-swatch ${i === 0 ? "active" : ""}" data-color="${c}" style="background:${c}" title="Màu ${c}"></button>`).join("")}
                    <select id="paint-size" title="Cỡ cọ">
                        <option value="2">Cọ mảnh</option>
                        <option value="6" selected>Cọ vừa</option>
                        <option value="14">Cọ to</option>
                    </select>
                    <button id="paint-eraser">🧽 Tẩy</button>
                    <button id="paint-clear">🗑 Xóa hết</button>
                    <button id="paint-save">💾 Lưu</button>
                </div>
                <div class="paint-canvas-wrap"><canvas id="paint-canvas"></canvas></div>
                <div class="win-status"><span>Vẽ bằng cách giữ chuột và di chuyển</span><span id="paint-info">Cọ vừa</span></div>
            </div>`;
        const canvas = $("#paint-canvas", body);
        const ctx = canvas.getContext("2d");
        let color = "#000000";
        let size = 6;
        let eraser = false;
        let drawing = false;
        let last = null;
        let hasDrawn = false;
        function fit() {
            const rect = canvas.parentElement.getBoundingClientRect();
            if (rect.width < 20 || rect.height < 20) return;
            const data = canvas.width ? ctx.getImageData(0, 0, canvas.width, canvas.height) : null;
            canvas.width = Math.round(rect.width);
            canvas.height = Math.round(rect.height);
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if (data) ctx.putImageData(data, 0, 0);
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
        }
        requestAnimationFrame(fit);
        new ResizeObserver(fit).observe(canvas.parentElement);
        function pos(e) {
            const r = canvas.getBoundingClientRect();
            return { x: e.clientX - r.left, y: e.clientY - r.top };
        }
        canvas.addEventListener("pointerdown", e => {
            drawing = true;
            last = pos(e);
            canvas.setPointerCapture(e.pointerId);
            ctx.strokeStyle = eraser ? "#ffffff" : color;
            ctx.fillStyle = eraser ? "#ffffff" : color;
            ctx.lineWidth = eraser ? size * 2.2 : size;
            ctx.beginPath();
            ctx.arc(last.x, last.y, ctx.lineWidth / 2, 0, Math.PI * 2);
            ctx.fill();
        });
        canvas.addEventListener("pointermove", e => {
            if (!drawing) return;
            const p = pos(e);
            ctx.strokeStyle = eraser ? "#ffffff" : color;
            ctx.lineWidth = eraser ? size * 2.2 : size;
            ctx.beginPath();
            ctx.moveTo(last.x, last.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
            last = p;
            if (!hasDrawn) {
                hasDrawn = true;
                Sim.fire("paint-draw");
            }
        });
        canvas.addEventListener("pointerup", () => { drawing = false; });
        $$(".paint-swatch", body).forEach(b => {
            b.onclick = () => {
                $$(".paint-swatch", body).forEach(x => x.classList.remove("active"));
                b.classList.add("active");
                color = b.dataset.color;
                eraser = false;
            };
        });
        $("#paint-size", body).onchange = e => {
            size = Number(e.target.value);
            $("#paint-info", body).textContent = size >= 14 ? "Cọ to" : size <= 2 ? "Cọ mảnh" : "Cọ vừa";
        };
        $("#paint-eraser", body).onclick = () => {
            eraser = !eraser;
            $("#paint-eraser", body).style.background = eraser ? "#CCE8FF" : "#fff";
            Sim.toast(eraser ? "Đã chọn Tẩy." : "Đã chọn Cọ vẽ.");
        };
        $("#paint-clear", body).onclick = () => {
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            Sim.toast("Đã xóa toàn bộ bức vẽ.");
        };
        $("#paint-save", body).onclick = () => {
            Sim.toast("Đã lưu bức vẽ thành 'BucTranh.png' trên Desktop (mô phỏng).");
            Sim.addFile({ name: "BucTranh.png", folder: "Desktop", size: 482000 });
            Sim.fire("paint-save");
        };
    }

    /* =====================================================
       SETTINGS
       ===================================================== */
    function renderSettings(body, win) {
        const S = st();
        const NAV = [
            { section: "system", label: "System", icon: "🖥️", pages: [["display", "Display"], ["sound", "Sound"], ["power", "Power & sleep"], ["storage", "Storage"], ["about", "About"]] },
            { section: "devices", label: "Devices", icon: "🖱️", pages: [["mouse", "Mouse"], ["typing", "Typing"], ["printers", "Printers & scanners"]] },
            { section: "personalization", label: "Personalization", icon: "🎨", pages: [["background", "Background"], ["colors", "Colors"], ["themes", "Themes"], ["lockscreen", "Lock screen"]] },
            { section: "accounts", label: "Accounts", icon: "👤", pages: [["info", "Your info"], ["signin", "Sign-in options"]] },
            { section: "update", label: "Update & Security", icon: "🛡️", pages: [["update", "Windows Update"], ["security", "Windows Security"]] }
        ];
        let sec = NAV.find(n => n.section === S.settingsSection) || NAV[0];
        if (!sec.pages.some(p => p[0] === S.settingsPage)) S.settingsPage = sec.pages[0][0];

        body.innerHTML = `
            <div class="set">
                <div class="set-nav">
                    <div class="set-user"><span style="font-size:1.3rem">🧑‍💻</span><span>Coder Nhi<br><span style="font-weight:400;color:#8A8886;font-size:.68rem">Local account</span></span></div>
                    ${NAV.map(n => `<button data-sec="${n.section}" class="${n.section === sec.section ? "active" : ""}"><span>${n.icon}</span><span>${n.label}</span></button>`).join("")}
                </div>
                <div class="set-content">
                    <h2>${sec.label}</h2>
                    <div class="sub">Cài đặt hệ thống Windows 10 (mô phỏng)</div>
                    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px">
                        ${sec.pages.map(p => `<button class="btn-sim" data-page="${p[0]}" style="background:${p[0] === S.settingsPage ? "var(--win-blue)" : "#fff"};color:${p[0] === S.settingsPage ? "#fff" : "#201F1E"};border:1px solid #C8C6C4;font-weight:600">${p[1]}</button>`).join("")}
                    </div>
                    <div id="set-page"></div>
                </div>
            </div>`;

        function goPage(page) {
            S.settingsPage = page;
            renderSettings(body, win);
            Sim.fire("settings-open", { section: S.settingsSection, page: page });
            if (page === "about") Sim.fire("settings-about");
            if (page === "power") Sim.fire("settings-power-sleep");
            if (page === "mouse") Sim.fire("settings-mouse");
        }
        $$("[data-sec]", body).forEach(b => {
            b.onclick = () => {
                S.settingsSection = b.dataset.sec;
                S.settingsPage = NAV.find(n => n.section === b.dataset.sec).pages[0][0];
                renderSettings(body, win);
                Sim.fire("settings-open", { section: S.settingsSection, page: S.settingsPage });
            };
        });
        $$("[data-page]", body).forEach(b => { b.onclick = () => goPage(b.dataset.page); });

        const page = S.settingsPage;
        const holder = $("#set-page", body);
        if (page === "display") {
            holder.innerHTML = `
                <div class="set-row"><div class="lab"><b>Display resolution</b><span>Độ phân giải màn hình</span></div>
                    <select id="set-res"><option selected>1920 × 1080 (Recommended)</option><option>1366 × 768</option><option>1600 × 900</option><option>1280 × 720</option></select></div>
                <div class="set-row"><div class="lab"><b>Scale and layout</b><span>Tỉ lệ hiển thị</span></div><select><option>100% (Recommended)</option><option>125%</option><option>150%</option></select></div>
                <div class="set-row"><div class="lab"><b>Display orientation</b><span>Hướng màn hình</span></div><select><option>Landscape</option><option>Portrait</option></select></div>
                <div class="set-row"><div class="lab"><b>Night light</b><span>Giảm ánh sáng xanh buổi tối</span></div><button class="toggle" id="set-night"></button></div>
                <div class="set-row"><div class="lab"><b>Advanced display settings</b><span>Tần số quét (Hz)</span></div><button class="btn-sim" id="set-adv">Open</button></div>`;
            $("#set-res", holder).onchange = e => { Sim.toast("Đã đổi độ phân giải (mô phỏng): " + e.target.value); Sim.fire("settings-display", { value: e.target.value }); };
            $("#set-night", holder).onclick = e => { e.currentTarget.classList.toggle("on"); Sim.fire("settings-display", { nightLight: e.currentTarget.classList.contains("on") }); };
            $("#set-adv", holder).onclick = () => Sim.dialog({ title: "Advanced display", body: "Tần số quét hiện tại: <b>60 Hz</b><br>Độ phân giải: <b>1920 × 1080</b><br>Màn hình sẽ mượt hơn khi tần số quét cao.", okText: "OK" });
        } else if (page === "about") {
            holder.innerHTML = `
                <div class="spec-box">
                    <b>Device name</b> DESKTOP-CODER-NHI<br>
                    <b>Processor</b> Intel(R) Core(TM) i5-10400 CPU @ 2.90GHz<br>
                    <b>Installed RAM</b> 8.00 GB (7.90 GB usable)<br>
                    <b>System type</b> 64-bit operating system, x64-based processor<br>
                    <b>Edition</b> Windows 10 Pro<br>
                    <b>Version</b> 22H2<br>
                    <b>OS build</b> 19045.3803
                </div>
                <div class="set-row"><div class="lab"><b>Windows specifications</b><span>Xem chi tiết phiên bản Windows</span></div><button class="btn-sim" id="set-spec">Xem</button></div>`;
            $("#set-spec", holder).onclick = () => {
                Sim.dialog({ title: "Windows specifications", body: "<b>Edition:</b> Windows 10 Pro<br><b>Version:</b> 22H2<br><b>OS build:</b> 19045.3803<br><b>Experience:</b> Windows Feature Experience Pack 1000.19053.1000.0", okText: "OK" });
                Sim.fire("settings-about");
            };
        } else if (page === "power") {
            holder.innerHTML = `
                <div class="set-row"><div class="lab"><b>Screen</b><span>Tắt màn hình sau</span></div><select id="set-screen"><option>1 minute</option><option selected>10 minutes</option><option>30 minutes</option><option>Never</option></select></div>
                <div class="set-row"><div class="lab"><b>Sleep</b><span>Máy ngủ sau</span></div><select id="set-sleep"><option>5 minutes</option><option selected>30 minutes</option><option>Never</option></select></div>
                <div class="set-row"><div class="lab"><b>Additional power settings</b><span>Chọn chế độ tiết kiệm điện</span></div><button class="btn-sim" id="set-power-adv">Open</button></div>`;
            $("#set-screen", holder).onchange = e => { Sim.toast("Screen timeout: " + e.target.value); Sim.fire("settings-power", { screen: e.target.value }); };
            $("#set-sleep", holder).onchange = e => { Sim.toast("Sleep timeout: " + e.target.value); Sim.fire("settings-power", { sleep: e.target.value }); };
            $("#set-power-adv", holder).onclick = () => Sim.dialog({ title: "Power Options", body: "<b>Balanced</b> — cân bằng hiệu năng và tiết kiệm điện.<br><b>Power saver</b> — tiết kiệm pin tối đa.<br><b>High performance</b> — hiệu năng cao nhất.", okText: "OK" });
        } else if (page === "storage") {
            holder.innerHTML = `
                <div class="set-row"><div class="lab"><b>Storage sense</b><span>Tự dọn dẹp tệp tạm</span></div><button class="toggle on" id="set-sense"></button></div>
                <div class="spec-box">
                    <b>Local Disk (C:)</b> — 256 GB<br>
                    Apps &amp; features: 42.1 GB
                    <div class="bar"><div style="width:42%"></div></div>
                    Documents: 8.4 GB
                    <div class="bar"><div style="width:18%"></div></div>
                    Pictures: 12.2 GB
                    <div class="bar"><div style="width:26%"></div></div>
                    System &amp; reserved: 34.6 GB
                    <div class="bar"><div style="width:50%"></div></div>
                    <div style="margin-top:8px">Free space: <b>84 GB</b></div>
                </div>`;
            $("#set-sense", holder).onclick = e => { e.currentTarget.classList.toggle("on"); Sim.fire("settings-storage"); };
        } else if (page === "sound") {
            holder.innerHTML = `<div class="set-row"><div class="lab"><b>Master volume</b><span>Âm lượng loa</span></div><input type="range" min="0" max="100" value="65" id="set-vol"></div>
                <div class="set-row"><div class="lab"><b>Output</b><span>Thiết bị phát âm thanh</span></div><select><option>Speakers (Realtek)</option><option>Headphones</option></select></div>`;
            $("#set-vol", holder).oninput = e => { if (e.target.value > 85) Sim.toast("Âm lượng lớn có thể ảnh hưởng thính giác!"); Sim.fire("settings-sound", { volume: e.target.value }); };
        } else if (page === "mouse") {
            holder.innerHTML = `
                <div class="set-row"><div class="lab"><b>Select your primary button</b><span>Nút chuột chính</span></div><select id="set-primary"><option>Left</option><option>Right</option></select></div>
                <div class="set-row"><div class="lab"><b>Cursor speed</b><span>Tốc độ con trỏ</span></div><input type="range" min="1" max="20" value="10" id="set-speed"></div>
                <div class="set-row"><div class="lab"><b>Scroll inactive windows</b><span>Cuộn cửa sổ không cần chọn</span></div><button class="toggle on" id="set-scroll"></button></div>
                <div class="set-row"><div class="lab"><b>Additional mouse options</b><span>Con trỏ, nút, con lăn</span></div><button class="btn-sim" id="set-mouse-adv">Open</button></div>`;
            $("#set-primary", holder).onchange = e => { Sim.toast("Nút chính: " + e.target.value); Sim.fire("settings-mouse", { primary: e.target.value }); };
            $("#set-speed", holder).oninput = e => Sim.fire("settings-mouse", { speed: e.target.value });
            $("#set-scroll", holder).onclick = e => e.currentTarget.classList.toggle("on");
            $("#set-mouse-adv", holder).onclick = () => Sim.dialog({ title: "Mouse Properties", body: "<b>Buttons</b> — đổi nút chính, tốc độ nháy đúp.<br><b>Pointers</b> — chọn hình con trỏ.<br><b>Pointer Options</b> — tốc độ và hiệu ứng con trỏ.<br><b>Wheel</b> — số dòng cuộn mỗi nấc.", okText: "OK" });
        } else if (page === "typing") {
            holder.innerHTML = `<div class="set-row"><div class="lab"><b>Autocorrect misspelled words</b><span>Tự sửa lỗi chính tả</span></div><button class="toggle on" id="set-auto"></button></div>
                <div class="set-row"><div class="lab"><b>Show text suggestions</b><span>Gợi ý từ khi gõ</span></div><button class="toggle on" id="set-suggest"></button></div>`;
            $$(".toggle", holder).forEach(t => t.onclick = () => t.classList.toggle("on"));
        } else if (page === "printers") {
            holder.innerHTML = `<div class="spec-box"><b>Microsoft Print to PDF</b><br>Trạng thái: Ready<br><br><b>Máy in không dây (mô phỏng)</b><br>Trạng thái: Offline</div>`;
        } else if (page === "background") {
            const bgs = [
                ["linear-gradient(135deg,#04263f,#0a4f73 45%,#061d30)", "Windows 10"],
                ["linear-gradient(135deg,#1b4332,#40916c)", "Rừng xanh"],
                ["linear-gradient(135deg,#5a189a,#c77dff)", "Tím mộng"],
                ["linear-gradient(135deg,#7f1d1d,#f59e0b)", "Hoàng hôn"]
            ];
            holder.innerHTML = `<div class="rich-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px">
                ${bgs.map((b, i) => `<button data-bg="${i}" style="height:76px;border:2px solid ${i === 0 ? "var(--win-blue)" : "#D2D0CE"};border-radius:6px;background:${b[0]};color:#fff;font-size:.7rem;cursor:pointer">${b[1]}</button>`).join("")}
                </div>
                <div class="set-row"><div class="lab"><b>Choose a fit</b><span>Cách hiển thị hình nền</span></div><select><option>Fill</option><option>Fit</option><option>Tile</option><option>Center</option></select></div>
                <div class="set-row"><div class="lab"><b>Dark mode</b><span>Giao diện tối</span></div><button class="toggle ${S.darkMode ? "on" : ""}" id="set-dark"></button></div>`;
            $$("[data-bg]", holder).forEach(b => {
                b.onclick = () => {
                    const bg = bgs[Number(b.dataset.bg)][0];
                    $("#desktop-area").style.background = bg;
                    Sim.toast("Đã đổi hình nền: " + bgs[Number(b.dataset.bg)][1]);
                    Sim.fire("theme-change", { background: bg });
                };
            });
            $("#set-dark", holder).onclick = e => {
                S.darkMode = !S.darkMode;
                e.currentTarget.classList.toggle("on", S.darkMode);
                Sim.toast("Dark mode: " + (S.darkMode ? "ON" : "OFF") + " (mô phỏng)");
                Sim.fire("theme-change", { dark: S.darkMode });
            };
        } else if (page === "colors") {
            holder.innerHTML = `<div class="set-row"><div class="lab"><b>Accent color</b><span>Màu nhấn của Windows</span></div>
                <div style="display:flex;gap:6px">${["#0078D7", "#107C41", "#D13438", "#8E24AA", "#FB8C00"].map(c => `<button data-accent="${c}" style="width:24px;height:24px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #8A8886;background:${c};cursor:pointer"></button>`).join("")}</div></div>
                <div class="set-row"><div class="lab"><b>Transparency effects</b><span>Hiệu ứng trong suốt</span></div><button class="toggle on"></button></div>`;
            $$("[data-accent]", holder).forEach(b => {
                b.onclick = () => {
                    document.documentElement.style.setProperty("--win-blue", b.dataset.accent);
                    Sim.toast("Đã đổi màu nhấn Windows.");
                    Sim.fire("theme-change", { accent: b.dataset.accent });
                };
            });
        } else if (page === "themes") {
            holder.innerHTML = `<div class="spec-box"><b>Windows (light)</b> — chủ đề mặc định<br><b>Windows (dark)</b> — giao diện tối<br><b>Contrast themes</b> — tăng tương phản cho người khiếm thị</div>
                <div class="set-row"><div class="lab"><b>Theme settings</b><span>Âm thanh, màu, con trỏ</span></div><button class="btn-sim">Open</button></div>`;
        } else if (page === "lockscreen") {
            holder.innerHTML = `<div class="spec-box" style="text-align:center;font-size:1.1rem;padding:34px">🕘 09:41<br><span style="font-size:.75rem;color:#605E5C">Thứ Hai, 15/01/2025</span></div>
                <div class="set-row"><div class="lab"><b>Background</b><span>Hình nền màn hình khóa</span></div><select><option>Windows spotlight</option><option>Picture</option><option>Solid color</option></select></div>`;
        } else if (page === "info") {
            holder.innerHTML = `<div style="display:flex;gap:14px;align-items:center;margin-bottom:14px"><div style="font-size:2.6rem">🧑‍💻</div><div><b style="font-size:1rem">Coder Nhi</b><br><span style="font-size:.76rem;color:#605E5C">coder.nhi@example.com</span><br><span style="font-size:.72rem;color:#107C41">Administrator</span></div></div>
                <div class="set-row"><div class="lab"><b>Your info</b><span>Tài khoản cục bộ trên máy này</span></div><button class="btn-sim" id="set-signout">Sign out</button></div>`;
            $("#set-signout", holder).onclick = () => Sim.lockScreen();
        } else if (page === "signin") {
            holder.innerHTML = `<div class="set-row"><div class="lab"><b>Password</b><span>Thay đổi mật khẩu đăng nhập</span></div><button class="btn-sim" id="set-pass">Change</button></div>
                <div class="set-row"><div class="lab"><b>PIN</b><span>PIN gồm 4 chữ số</span></div><button class="btn-sim" id="set-pin">Add</button></div>
                <div class="set-row"><div class="lab"><b>Picture password</b><span>Vẽ hình để đăng nhập</span></div><button class="btn-sim">Add</button></div>`;
            $("#set-pass", holder).onclick = () => Sim.dialog({ title: "Change password", body: "Mật khẩu mạnh cần ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký hiệu!", okText: "Đã hiểu" });
            $("#set-pin", holder).onclick = () => { Sim.toast("PIN mẫu trong mô phỏng là 1234."); Sim.fire("settings-pin"); };
        } else if (page === "update") {
            holder.innerHTML = `<div class="set-row"><div class="lab"><b>Windows Update</b><span>${S.updateChecked ? "Bạn đã cập nhật đến bản mới nhất." : "Kiểm tra bản cập nhật mới nhất."}</span></div><button class="btn-sim" id="set-update">${S.updateChecked ? "Check again" : "Check for updates"}</button></div>
                <div id="set-update-msg" class="spec-box">${S.updateChecked ? "✅ You're up to date." : "Cập nhật giúp vá lỗi bảo mật và sửa lỗi hệ thống."}</div>
                <div class="set-row"><div class="lab"><b>Advanced options</b><span>Lịch sử cập nhật</span></div><button class="btn-sim" id="set-update-hist">View</button></div>`;
            $("#set-update", holder).onclick = () => {
                const btn = $("#set-update", holder);
                const msg = $("#set-update-msg", holder);
                if (S.updateChecked) { Sim.toast("Máy đã ở bản cập nhật mới nhất."); return; }
                btn.disabled = true;
                btn.textContent = "Đang kiểm tra...";
                msg.innerHTML = "<div class='spin' style='border-color:#ccc;border-top-color:#0078D7;width:20px;height:20px;margin:0 auto 8px'></div>Đang tìm bản cập nhật...";
                setTimeout(() => {
                    S.updateChecked = true;
                    msg.innerHTML = "✅ You're up to date.\nWindows 10 Version 22H2 — OS build 19045.3803";
                    btn.disabled = false;
                    btn.textContent = "Check again";
                    Sim.toast("Windows đã được cập nhật.");
                    Sim.fire("update-check");
                }, 1600);
            };
            $("#set-update-hist", holder).onclick = () => Sim.dialog({ title: "Update history", body: "15/01/2025 — Security Update for Windows 10 (KB5034122)<br>02/01/2025 — Cumulative Update for Windows 10 (KB5033372)<br>12/12/2024 — .NET Framework Update", okText: "OK" });
        } else if (page === "security") {
            holder.innerHTML = `<div class="spec-box"><b>🛡️ Windows Security</b><br>Virus &amp; threat protection: <b style="color:#107C41">Protected</b><br>Firewall &amp; network protection: <b style="color:#107C41">On</b><br>Account protection: <b style="color:#107C41">On</b><br>App &amp; browser control: <b style="color:#107C41">On</b></div>
                <div class="set-row"><div class="lab"><b>Scan for viruses</b><span>Quét nhanh máy tính</span></div><button class="btn-sim" id="set-scan">Scan</button></div>`;
            $("#set-scan", holder).onclick = () => {
                Sim.toast("Đang quét virus... (mô phỏng)");
                setTimeout(() => Sim.toast("Không phát hiện mối đe dọa. Máy tính an toàn!"), 1500);
                Sim.fire("defender-scan");
            };
        }
    }

    /* =====================================================
       TASK MANAGER
       ===================================================== */
    function renderTaskManager(body, win) {
        const S = st();
        if (!S.tmProcs) S.tmProcs = [
            { name: "System", cpu: 0.4, mem: 112, disk: 0 },
            { name: "Windows Explorer", cpu: 1.2, mem: 148, disk: 0.3 },
            { name: "Microsoft Edge", cpu: 6.4, mem: 512, disk: 1.1 },
            { name: "Notepad", cpu: 0.1, mem: 12, disk: 0 },
            { name: "Calculator", cpu: 0.1, mem: 18, disk: 0 },
            { name: "Paint", cpu: 0.8, mem: 44, disk: 0 },
            { name: "Settings", cpu: 0.3, mem: 36, disk: 0 }
        ];
        S.tmTab = S.tmTab || "processes";
        const tabs = [["processes", "Processes"], ["performance", "Performance"], ["startup", "Start-up"]];
        body.innerHTML = `
            <div class="tm">
                <div class="tm-tabs">${tabs.map(t => `<button data-tm-tab="${t[0]}" class="${S.tmTab === t[0] ? "active" : ""}">${t[1]}</button>`).join("")}</div>
                <div class="tm-body" id="tm-body"></div>
            </div>`;
        $$("[data-tm-tab]", body).forEach(b => {
            b.onclick = () => { S.tmTab = b.dataset.tmTab; Sim.fire("taskmanager-tab", { tab: S.tmTab }); renderTaskManager(body, win); };
        });
        const holder = $("#tm-body", body);
        if (S.tmTab === "processes") {
            holder.innerHTML = `<table class="tm-table">
                <thead><tr><th>Name</th><th>CPU</th><th>Memory</th><th>Disk</th></tr></thead>
                <tbody>${S.tmProcs.map((p, i) => `<tr data-proc="${i}" class="${S.selectedTaskProc === i ? "selected" : ""}"><td>${esc(p.name)}</td><td>${p.cpu.toFixed(1)}%</td><td>${p.mem} MB</td><td>${p.disk.toFixed(1)}%</td></tr>`).join("")}</tbody></table>
                <div class="tm-actions"><button class="btn-sim" id="tm-end">End task</button></div>`;
            $$("tr[data-proc]", holder).forEach(tr => {
                tr.onclick = () => {
                    S.selectedTaskProc = Number(tr.dataset.proc);
                    $$("tr[data-proc]", holder).forEach(x => x.classList.toggle("selected", x === tr));
                };
            });
            $("#tm-end", holder).onclick = () => {
                if (S.selectedTaskProc == null || !S.tmProcs[S.selectedTaskProc]) { Sim.toast("Hãy chọn một tiến trình trước."); return; }
                const name = S.tmProcs[S.selectedTaskProc].name;
                S.tmProcs.splice(S.selectedTaskProc, 1);
                S.selectedTaskProc = null;
                Sim.toast("Đã kết thúc tiến trình: " + name);
                Sim.fire("taskmanager-endtask", { name: name });
                renderTaskManager(body, win);
            };
        } else if (S.tmTab === "performance") {
            holder.innerHTML = `
                <div class="tm-cards">
                    <div class="tm-card">CPU<b>25%</b>2.90 GHz</div>
                    <div class="tm-card">Memory<b>41%</b>3.2/7.9 GB</div>
                    <div class="tm-card">Disk<b>2%</b>15 MB/s</div>
                </div>
                <canvas id="tm-graph" class="tm-graph"></canvas>
                <div class="spec-box" style="margin-top:10px"><b>Nhận xét:</b> CPU và RAM đang ở mức thoải mái. Khi mở nhiều ứng dụng, đồ thị sẽ dâng cao — đó là lúc bé nên đóng bớt ứng dụng không dùng.</div>`;
            const canvas = $("#tm-graph", holder);
            const ctx = canvas.getContext("2d");
            const points = new Array(80).fill(22);
            function draw() {
                if (!canvas.isConnected) return;
                const w = canvas.width = canvas.clientWidth;
                const h = canvas.height = canvas.clientHeight;
                ctx.clearRect(0, 0, w, h);
                ctx.strokeStyle = "#EDEBE9";
                for (let i = 1; i < 5; i++) { const y = h * i / 5; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
                points.shift();
                const last = points[points.length - 1];
                points.push(Math.max(8, Math.min(92, last + (Math.random() * 14 - 7))));
                ctx.beginPath();
                points.forEach((v, i) => {
                    const x = i / (points.length - 1) * w;
                    const y = h - (v / 100 * h);
                    i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
                });
                ctx.strokeStyle = "#0078D7";
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.closePath();
                ctx.fillStyle = "rgba(0,120,215,0.10)";
                ctx.fill();
                requestAnimationFrame(draw);
            }
            requestAnimationFrame(draw);
        } else {
            holder.innerHTML = `<table class="tm-table">
                <thead><tr><th>Name</th><th>Publisher</th><th>Status</th></tr></thead>
                <tbody>
                    <tr><td>Microsoft Edge</td><td>Microsoft</td><td>Enabled</td></tr>
                    <tr><td>OneDrive</td><td>Microsoft</td><td>Disabled</td></tr>
                    <tr><td>Spotify</td><td>Spotify AB</td><td>Disabled</td></tr>
                </tbody></table>
                <div class="spec-box" style="margin-top:10px">Ứng dụng khởi động cùng Windows càng nhiều thì máy khởi động càng chậm. Bé có thể Disable những ứng dụng không cần thiết.</div>`;
        }
    }

    /* =====================================================
       MICROSOFT EDGE
       ===================================================== */
    function renderEdge(body, win) {
        const S = st();
        body.innerHTML = `
            <div class="edge">
                <div class="edge-bar">
                    <button id="edge-back" title="Quay lại">←</button>
                    <button id="edge-home" title="Trang chủ">🏠</button>
                    <button id="edge-refresh" title="Tải lại">⟳</button>
                    <input id="edge-url" value="${esc(S.browserUrl === "home" ? "edge://newtab" : S.browserUrl)}" aria-label="Địa chỉ web">
                    <button id="edge-go" title="Đi">➜</button>
                </div>
                <div class="edge-page" id="edge-page"></div>
            </div>`;
        const pageEl = $("#edge-page", body);
        const urlEl = $("#edge-url", body);

        function navigate(url) {
            S.browserUrl = url;
            urlEl.value = url === "home" ? "edge://newtab" : url;
            renderPage();
            Sim.fire("browser-visit", { url: url });
        }
        function renderPage() {
            const url = S.browserUrl;
            if (url === "home") {
                pageEl.innerHTML = `
                    <h2>Trang mới</h2>
                    <p>Chào Coder Nhi! Hôm nay bé muốn khám phá điều gì?</p>
                    <div style="margin:10px 0"><input id="edge-search" placeholder="Tìm kiếm trên web..." style="width:100%;max-width:420px;padding:8px 12px;border:1px solid #C8C6C4;border-radius:18px;font-size:.8rem"></div>
                    <div class="edge-tiles">
                        <div class="edge-tile" data-url="wikipedia.org"><span class="ico">📚</span>Wikipedia</div>
                        <div class="edge-tile" data-url="edu.vn"><span class="ico">🎓</span>Trang học tập</div>
                        <div class="edge-tile" data-url="github.com"><span class="ico">🐙</span>GitHub</div>
                        <div class="edge-tile" data-url="free-iphone.win"><span class="ico">🎁</span>Quà tặng?</div>
                    </div>`;
                $("#edge-search", pageEl).addEventListener("keydown", e => {
                    if (e.key === "Enter" && e.target.value.trim()) navigate("wikipedia.org");
                });
                $$("[data-url]", pageEl).forEach(t => t.onclick = () => navigate(t.dataset.url));
            } else if (url === "edu.vn") {
                pageEl.innerHTML = `
                    <h2>🎓 Trang học tập Tin học</h2>
                    <p><strong>Bài học hôm nay:</strong> Website hoạt động như thế nào?</p>
                    <p>Một website gồm 3 phần: <b>HTML</b> tạo nội dung, <b>CSS</b> trang trí và <b>JavaScript</b> tạo tương tác. Trình duyệt sẽ tải các tệp này từ máy chủ rồi hiển thị cho bé.</p>
                    <div class="spec-box"><b>Địa chỉ an toàn:</b> https://edu.vn<br><b>HTTPS:</b> có ổ khóa bảo mật<br><b>Nội dung:</b> phù hợp lứa tuổi</div>`;
            } else if (url === "wikipedia.org") {
                pageEl.innerHTML = `
                    <h2>Wikipedia — Bách khoa toàn thư mở</h2>
                    <p><b>Máy tính</b> là thiết bị điện tử có khả năng tiếp nhận dữ liệu, xử lý theo chương trình và xuất kết quả.</p>
                    <p>Bài viết này giúp bé tra cứu khái niệm, nhưng hãy kiểm tra chéo nhiều nguồn trước khi tin hoàn toàn.</p>`;
            } else if (url === "github.com") {
                pageEl.innerHTML = `
                    <h2>🐙 GitHub — Kho mã nguồn của thế giới</h2>
                    <p>Nơi các lập trình viên lưu trữ, chia sẻ và cùng phát triển phần mềm. Bé có thể tìm dự án mã nguồn mở để học hỏi.</p>
                    <div class="spec-box"><b>Repository:</b> hoc-vi-tinh<br><b>Ngôn ngữ:</b> JavaScript, HTML, CSS<br><b>Giấy phép:</b> MIT</div>`;
            } else if (url === "free-iphone.win") {
                pageEl.innerHTML = `
                    <h2 style="color:#A80000">🎁 CHÚC MỪNG! BẠN ĐÃ TRÚNG IPHONE 15!</h2>
                    <div class="scam-flag">⚠️ CẢNH BÁO: Đây là trang web giả mạo dùng để luyện tập nhận diện lừa đảo. Không nhập thông tin thật!</div>
                    <p>Nhập số điện thoại và mật khẩu để nhận quà. Chỉ còn <b>2 phút</b>!</p>
                    <p style="color:#A80000">Dấu hiệu đáng ngờ: tên miền lạ (.win), quà quá lớn, ép thời gian, đòi mật khẩu.</p>
                    <button id="scam-claim" style="background:#D13438;color:#fff;border:none;padding:9px 16px;border-radius:5px;cursor:pointer">Nhận thưởng ngay</button>`;
                $("#scam-claim", pageEl).onclick = () => {
                    Sim.dialog({ title: "Windows Security", body: "<b>Đây là lừa đảo trực tuyến!</b><br>Trang web đòi mật khẩu và thông tin cá nhân để nhận quà là dấu hiệu điển hình của lừa đảo. Bé hãy đóng trang và báo người lớn.", okText: "Đã hiểu" });
                    Sim.fire("browser-scam-detect");
                };
            } else {
                pageEl.innerHTML = `<h2>Không thể truy cập trang này</h2><p>Địa chỉ <b>${esc(url)}</b> chưa có trong mô phỏng. Hãy thử wikipedia.org, edu.vn hoặc github.com.</p>`;
            }
        }
        $("#edge-go", body).onclick = () => {
            const val = urlEl.value.trim().replace(/^https?:\/\//, "").replace(/\/$/, "");
            if (val) navigate(val);
        };
        urlEl.addEventListener("keydown", e => { if (e.key === "Enter") $("#edge-go", body).click(); });
        $("#edge-home", body).onclick = () => navigate("home");
        $("#edge-back", body).onclick = () => navigate("home");
        $("#edge-refresh", body).onclick = () => { Sim.toast("Đã tải lại trang."); renderPage(); };
        renderPage();
    }

    /* =====================================================
       MICROSOFT STORE
       ===================================================== */
    function renderStore(body, win) {
        const S = st();
        S.installed = S.installed || {};
        const apps = [
            { id: "typing", icon: "⌨️", name: "Typing Tutor", desc: "Luyện gõ 10 ngón" },
            { id: "scratch", icon: "🐱", name: "Scratch", desc: "Lập trình kéo thả" },
            { id: "vlc", icon: "🎬", name: "VLC Player", desc: "Xem video mọi định dạng" },
            { id: "duolingo", icon: "🦉", name: "Duolingo", desc: "Học ngoại ngữ" },
            { id: "paint3d", icon: "🧊", name: "Paint 3D", desc: "Vẽ và dựng hình 3D" },
            { id: "code", icon: "💻", name: "VS Code", desc: "Trình soạn mã nguồn" }
        ];
        body.innerHTML = `
            <div style="padding:10px 12px;border-bottom:1px solid #E1DFDD;font-size:.8rem;font-weight:700">🛍️ Microsoft Store — Ứng dụng an toàn đã kiểm duyệt</div>
            <div class="store-grid">
                ${apps.map(a => `<div class="store-card"><span class="ico">${a.icon}</span><b>${a.name}</b><div style="color:#605E5C;font-size:.68rem;margin-top:3px">${a.desc}</div><button data-install="${a.id}" class="${S.installed[a.id] ? "installed" : ""}">${S.installed[a.id] ? "✓ Installed" : "Install"}</button></div>`).join("")}
            </div>
            <div class="win-status"><span>Mọi ứng dụng đều được Microsoft kiểm duyệt trước khi phát hành.</span><span>${Object.keys(S.installed).length} installed</span></div>`;
        $$("[data-install]", body).forEach(b => {
            b.onclick = () => {
                const id = b.dataset.install;
                if (S.installed[id]) { Sim.toast("Ứng dụng đã được cài đặt."); return; }
                b.textContent = "Đang cài...";
                setTimeout(() => {
                    S.installed[id] = true;
                    b.textContent = "✓ Installed";
                    b.classList.add("installed");
                    Sim.toast("Đã cài đặt an toàn từ Microsoft Store.");
                    Sim.fire("store-install", { app: id });
                }, 900);
            };
        });
    }

    /* =====================================================
       RECYCLE BIN
       ===================================================== */
    function renderRecycle(body, win) {
        const S = st();
        body.innerHTML = `
            <div class="rec-list" id="rec-list"></div>
            <div class="rec-actions"><button class="btn-sim" id="rec-empty" style="background:#D13438">Empty Recycle Bin</button></div>`;
        const list = $("#rec-list", body);
        if (!S.recycle.length) list.innerHTML = `<div style="text-align:center;color:#605E5C;font-size:.8rem;padding:36px">🗑️ Recycle Bin đang trống.</div>`;
        S.recycle.forEach((f, i) => {
            const row = document.createElement("div");
            row.className = "rec-row";
            row.innerHTML = `<div class="name"><span>${Sim.iconFor(f.name)}</span><span>${esc(f.name)}<br><span style="color:#8A8886;font-size:.68rem">${esc(f.folder)} — ${Sim.fmtSize(f.size)}</span></span></div><button class="btn-sim" data-restore="${i}">Restore</button>`;
            list.appendChild(row);
        });
        $$("[data-restore]", body).forEach(b => {
            b.onclick = () => {
                const f = S.recycle.splice(Number(b.dataset.restore), 1)[0];
                if (!f) return;
                S.files.push(f);
                Sim.toast("Đã khôi phục " + f.name + " về " + f.folder + ".");
                Sim.fire("explorer-restore", { name: f.name });
                renderRecycle(body, win);
                Sim.refreshApp("explorer");
            };
        });
        $("#rec-empty", body).onclick = () => {
            Sim.dialog({
                title: "Delete permanently?",
                body: "Bé có chắc muốn xóa vĩnh viễn toàn bộ tệp trong Recycle Bin không? Hành động này không thể hoàn tác.",
                okText: "Delete",
                onOk: () => {
                    S.recycle = [];
                    Sim.toast("Recycle Bin đã được làm trống.");
                    Sim.fire("recycle-empty");
                    renderRecycle(body, win);
                }
            });
        };
    }

    window.SIM_APPS = {
        render: {
            explorer: renderExplorer,
            notepad: renderNotepad,
            calculator: renderCalculator,
            paint: renderPaint,
            settings: renderSettings,
            taskmgr: renderTaskManager,
            edge: renderEdge,
            store: renderStore,
            recycle: renderRecycle
        }
    };

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => Sim.init());
    else Sim.init();
})();
