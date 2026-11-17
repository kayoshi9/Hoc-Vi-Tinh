/* ============================================================
   XƯỞNG ẢNH BÀI HỌC — quản lý ảnh minh hoạ theo bài/buổi
   Lưu tạm: localStorage · Phát hành: lesson_images.js
   ============================================================ */
(function () {
    "use strict";
    const $ = (s, r) => (r || document).querySelector(s);
    const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
    const STORAGE_KEY = "coder_nhi_lesson_images";
    const POS_LABEL = { top: "Đầu buổi", mid: "Sau tiêu đề đầu tiên", end: "Cuối buổi" };

    const LESSONS = typeof getFullLessons === "function" ? getFullLessons() : [];
    let data = loadInitial();
    let lessonId = LESSONS.some(l => l.id === 4) ? 4 : (LESSONS[0] ? LESSONS[0].id : 1);
    let session = 1;

    function pad(n) { return n < 10 ? "0" + n : String(n); }
    function clone(o) { return JSON.parse(JSON.stringify(o || {})); }

    function loadInitial() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && typeof parsed === "object") return parsed;
            }
        } catch (e) { /* localStorage có thể bị chặn */ }
        return clone(window.LESSON_IMAGES || {});
    }

    function persist() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            setStatus("Không lưu được dữ liệu tạm (trình duyệt chặn localStorage). Vẫn có thể tải file.", "bad");
        }
    }

    function setStatus(text, kind) {
        const el = $("#status");
        el.textContent = text || "";
        el.className = "status" + (kind ? " " + kind : "");
    }

    function currentList() {
        const l = data[String(lessonId)];
        if (!l) return [];
        const arr = l[String(session)];
        return Array.isArray(arr) ? arr : [];
    }

    function ensureList() {
        const k = String(lessonId);
        if (!data[k] || typeof data[k] !== "object") data[k] = {};
        if (!Array.isArray(data[k][String(session)])) data[k][String(session)] = [];
        return data[k][String(session)];
    }

    function lessonInfo() {
        return LESSONS.find(l => l.id === Number(lessonId)) || { title: "Bài " + lessonId, chapterTitle: "" };
    }

    function totalImages() {
        let n = 0;
        Object.keys(data).forEach(id => {
            const sessions = data[id];
            if (!sessions || typeof sessions !== "object") return;
            Object.keys(sessions).forEach(s => { if (Array.isArray(sessions[s])) n += sessions[s].length; });
        });
        return n;
    }

    /* ---------- dựng danh sách bài ---------- */
    function buildLessonSelect() {
        const sel = $("#lesson-select");
        const groups = new Map();
        LESSONS.forEach(l => {
            if (!groups.has(l.chapterId)) groups.set(l.chapterId, { name: l.chapterTitle || "Khác", list: [] });
            groups.get(l.chapterId).list.push(l);
        });
        groups.forEach(g => {
            const og = document.createElement("optgroup");
            og.label = g.name;
            g.list.forEach(l => {
                const o = document.createElement("option");
                o.value = l.id;
                o.textContent = "Bài " + pad(l.id) + " — " + l.title;
                og.appendChild(o);
            });
            sel.appendChild(og);
        });
        sel.value = String(lessonId);
    }

    /* ---------- danh sách ảnh ---------- */
    function renderList() {
        const list = currentList();
        const info = lessonInfo();
        const box = $("#image-list");
        box.innerHTML = "";
        $("#count-badge").textContent = list.length + " ảnh";
        $("#list-sub").textContent = "Bài " + pad(lessonId) + " — " + info.title + " · Buổi " + session +
            " · Tổng cộng " + totalImages() + " ảnh";

        if (!list.length) {
            const empty = document.createElement("div");
            empty.className = "empty-state";
            empty.innerHTML = "Chưa có ảnh nào cho buổi này.<br><b>Dán đường dẫn ảnh</b> ở khung bên trái rồi bấm “Thêm ảnh”.";
            box.appendChild(empty);
            return;
        }

        list.forEach((item, index) => {
            const card = document.createElement("div");
            card.className = "img-card";

            const thumb = document.createElement("div");
            thumb.className = "thumb";
            const img = document.createElement("img");
            img.alt = item.alt || "Minh hoạ";
            img.loading = "eager";
            img.src = item.src;
            img.onerror = function () {
                thumb.innerHTML = "";
                const b = document.createElement("span");
                b.className = "broken";
                b.textContent = "⚠️";
                b.title = "Không tải được ảnh";
                thumb.appendChild(b);
            };
            thumb.appendChild(img);

            const meta = document.createElement("div");
            meta.className = "meta";
            const h = document.createElement("h4");
            h.textContent = item.alt || "Ảnh minh hoạ";
            const cap = document.createElement("p");
            cap.textContent = item.caption || "Chưa có chú thích";
            const src = document.createElement("p");
            src.className = "src";
            src.textContent = item.src;
            src.title = item.src;
            const tags = document.createElement("div");
            tags.className = "tags";
            const tagPos = document.createElement("span");
            tagPos.className = "tag";
            tagPos.textContent = "📍 " + (POS_LABEL[item.pos] || POS_LABEL.mid);
            const tagOrder = document.createElement("span");
            tagOrder.className = "tag";
            tagOrder.textContent = "#" + (index + 1);
            tags.appendChild(tagPos);
            tags.appendChild(tagOrder);
            meta.appendChild(h);
            meta.appendChild(cap);
            meta.appendChild(src);
            meta.appendChild(tags);

            const actions = document.createElement("div");
            actions.className = "card-actions";
            const up = document.createElement("button");
            up.className = "icon-btn";
            up.textContent = "↑";
            up.title = "Đưa lên trước";
            up.disabled = index === 0;
            up.onclick = function () { move(index, -1); };
            const down = document.createElement("button");
            down.className = "icon-btn";
            down.textContent = "↓";
            down.title = "Đưa xuống sau";
            down.disabled = index === list.length - 1;
            down.onclick = function () { move(index, 1); };
            const del = document.createElement("button");
            del.className = "icon-btn del";
            del.textContent = "✕";
            del.title = "Xoá ảnh này";
            del.onclick = function () { remove(index); };
            actions.appendChild(up);
            actions.appendChild(down);
            actions.appendChild(del);

            card.appendChild(thumb);
            card.appendChild(meta);
            card.appendChild(actions);
            box.appendChild(card);
        });
    }

    function move(index, delta) {
        const list = currentList();
        const next = index + delta;
        if (next < 0 || next >= list.length) return;
        const tmp = list[index];
        list[index] = list[next];
        list[next] = tmp;
        persist();
        renderList();
        setStatus("Đã đổi thứ tự ảnh.", "ok");
    }

    function remove(index) {
        const list = currentList();
        if (!list[index]) return;
        if (!confirm("Xoá ảnh này khỏi bài?")) return;
        list.splice(index, 1);
        persist();
        renderList();
        setStatus("Đã xoá ảnh.", "ok");
    }

    /* ---------- xem trước ---------- */
    function renderPreview(fallbackItem) {
        const body = $("#preview-body");
        const src = $("#src-input").value.trim() || (fallbackItem ? fallbackItem.src : "");
        $("#preview-pos").textContent = POS_LABEL[$("#pos-select").value] || "";
        body.innerHTML = "";
        if (!src) {
            const empty = document.createElement("div");
            empty.className = "preview-empty";
            empty.textContent = "Chưa có ảnh — dán đường dẫn để xem trước.";
            body.appendChild(empty);
            return;
        }
        const img = document.createElement("img");
        img.alt = $("#alt-input").value.trim() || (fallbackItem ? fallbackItem.alt : "") || "Xem trước ảnh";
        img.src = src;
        img.onerror = function () {
            body.innerHTML = "";
            const err = document.createElement("div");
            err.className = "preview-error";
            err.textContent = "⚠️ Không tải được ảnh. Kiểm tra lại URL (phải mở được trong tab mới).";
            body.appendChild(err);
        };
        body.appendChild(img);
        const caption = $("#caption-input").value.trim() || (fallbackItem ? fallbackItem.caption : "");
        if (caption) {
            const cap = document.createElement("figcaption");
            cap.textContent = caption;
            body.appendChild(cap);
        }
    }

    /* ---------- thêm ảnh ---------- */
    function addImage() {
        const src = $("#src-input").value.trim();
        if (!src) {
            setStatus("Hãy dán đường dẫn ảnh trước.", "bad");
            $("#src-input").focus();
            return;
        }
        if (!/^(https?:\/\/|images\/|data:image\/)/i.test(src)) {
            setStatus("Đường dẫn phải bắt đầu bằng https://, http://, images/ hoặc data:image/.", "bad");
            return;
        }
        const item = {
            src: src,
            alt: $("#alt-input").value.trim() || "Minh hoạ bài học",
            caption: $("#caption-input").value.trim(),
            pos: $("#pos-select").value
        };
        ensureList().push(item);
        persist();
        renderList();
        setStatus("✅ Đã thêm ảnh vào Bài " + pad(lessonId) + " · Buổi " + session + ".", "ok");
        $("#src-input").value = "";
        $("#alt-input").value = "";
        $("#caption-input").value = "";
        renderPreview(item);
        $("#src-input").focus();
    }

    /* ---------- xuất file ---------- */
    function buildSource() {
        const clean = {};
        Object.keys(data).sort((a, b) => Number(a) - Number(b)).forEach(id => {
            const sessions = data[id];
            if (!sessions || typeof sessions !== "object") return;
            const outSessions = {};
            Object.keys(sessions).sort().forEach(s => {
                const arr = sessions[s];
                if (!Array.isArray(arr)) return;
                const items = arr.filter(m => m && typeof m.src === "string" && m.src).map(m => ({
                    src: m.src,
                    alt: m.alt || "",
                    caption: m.caption || "",
                    pos: ["top", "mid", "end"].indexOf(m.pos) >= 0 ? m.pos : "mid"
                }));
                if (items.length) outSessions[s] = items;
            });
            if (Object.keys(outSessions).length) clean[id] = outSessions;
        });
        return "/* Ảnh minh hoạ bài học — tạo bởi image-studio.html.\n" +
            "   Thay thế file này trong dự án rồi commit + push để phát hành. */\n" +
            "window.LESSON_IMAGES = " + JSON.stringify(clean, null, 2) + ";\n";
    }

    function downloadFile() {
        const blob = new Blob([buildSource()], { type: "text/javascript;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "lesson_images.js";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
        setStatus("📥 Đã tải lesson_images.js. Hãy thay file trong thư mục dự án rồi commit + push.", "ok");
    }

    async function overwriteFile() {
        if (!window.showSaveFilePicker) {
            setStatus("Trình duyệt này không hỗ trợ ghi trực tiếp. Hãy dùng nút “Tải lesson_images.js”.", "bad");
            return;
        }
        try {
            const handle = await window.showSaveFilePicker({
                suggestedName: "lesson_images.js",
                types: [{ description: "JavaScript", accept: { "text/javascript": [".js"] } }]
            });
            const writable = await handle.createWritable();
            await writable.write(buildSource());
            await writable.close();
            setStatus("💾 Đã ghi lesson_images.js. Hãy commit + push để mọi người thấy ảnh.", "ok");
        } catch (e) {
            if (e && e.name !== "AbortError") setStatus("Không ghi được file: " + e.message, "bad");
        }
    }

    /* ---------- sự kiện ---------- */
    function bind() {
        $("#lesson-select").addEventListener("change", function (e) {
            lessonId = Number(e.target.value);
            renderList();
            setStatus("");
        });
        $$("#session-btns button").forEach(btn => {
            btn.addEventListener("click", function () {
                session = Number(btn.dataset.session);
                $$("#session-btns button").forEach(b => b.classList.toggle("active", b === btn));
                renderList();
                setStatus("");
            });
        });
        ["src-input", "alt-input", "caption-input"].forEach(id => {
            $("#" + id).addEventListener("input", renderPreview);
        });
        $("#pos-select").addEventListener("change", renderPreview);
        $("#add-btn").addEventListener("click", addImage);
        $("#src-input").addEventListener("keydown", function (e) { if (e.key === "Enter") addImage(); });
        $("#download-btn").addEventListener("click", downloadFile);
        $("#overwrite-btn").addEventListener("click", overwriteFile);
        $("#open-lesson").addEventListener("click", function () {
            persist();
            window.open("index.html?lesson=" + lessonId + "&preview=1", "_blank");
        });
        $("#clear-session").addEventListener("click", function () {
            if (!currentList().length) { setStatus("Buổi này chưa có ảnh nào.", "bad"); return; }
            if (!confirm("Xoá toàn bộ ảnh của Bài " + pad(lessonId) + " · Buổi " + session + "?")) return;
            data[String(lessonId)][String(session)] = [];
            persist();
            renderList();
            setStatus("Đã xoá ảnh của buổi này.", "ok");
        });
        $("#reset-local").addEventListener("click", function () {
            if (!confirm("Bỏ toàn bộ dữ liệu tạm và quay về nội dung file lesson_images.js?")) return;
            try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
            data = clone(window.LESSON_IMAGES || {});
            renderList();
            renderPreview();
            setStatus("Đã quay về dữ liệu từ file lesson_images.js.", "ok");
        });
    }

    buildLessonSelect();
    bind();
    renderList();
    renderPreview();
})();
