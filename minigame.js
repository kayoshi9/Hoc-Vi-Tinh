/* ============================================================
   MINI GAME — 5 trò chơi tương tác cho Bài 04–08
   Chọn game bằng ?game=mouse|classify|power|window|files
   ============================================================ */
(function () {
    "use strict";
    const $ = (s, r) => (r || document).querySelector(s);
    const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
    const params = new URLSearchParams(location.search);
    const gameId = params.get("game") || "mouse";
    const stage = $("#stage");
    const feedbackEl = $("#feedback");

    const state = { score: 0, mistakes: 0, maxPoints: 100, busy: false };

    function setHeader(icon, title, sub) {
        $("#game-icon").textContent = icon;
        $("#game-title").textContent = title;
        $("#game-sub").textContent = sub;
    }
    function updateScore() {
        $("#game-score").textContent = state.score + " điểm";
    }
    function progress(done, total) {
        $("#mg-bar").style.width = total ? (done / total * 100) + "%" : "0%";
    }
    function feedback(text, kind) {
        feedbackEl.className = "mg-feedback" + (kind ? " " + kind : "");
        feedbackEl.innerHTML = text;
    }
    function addScore(points) {
        state.score += points;
        updateScore();
    }
    function finish(title, text) {
        const pct = state.maxPoints ? state.score / state.maxPoints : 0;
        $("#finish-stars").textContent = pct >= 0.9 ? "⭐⭐⭐" : pct >= 0.6 ? "⭐⭐" : "⭐";
        $("#finish-title").textContent = title || "Hoàn thành!";
        $("#finish-text").textContent = text || "";
        $("#finish-score").textContent = state.score + " điểm";
        $("#finish").classList.remove("hidden");
    }
    function resetGame() {
        state.score = 0;
        state.mistakes = 0;
        state.busy = false;
        updateScore();
        $("#finish").classList.add("hidden");
        progress(0, 1);
        GAME.start();
    }
    $("#reset-btn").onclick = resetGame;
    $("#finish-again").onclick = resetGame;

    /* =====================================================
       GAME 1 — CHUỘT & BÀN PHÍM (Bài 04)
       ===================================================== */
    const mouseGame = {
        maxPoints: 60,
        start: function () {
            setHeader("🖱️", "Chuột & Bàn phím", "Vượt 6 vòng: nháy, nháy đúp, nháy phải, kéo thả, cuộn, gõ phím");
            state.maxPoints = 60;
            this.round = 0;
            this.roundMistake = false;
            this.render();
        },
        next: function () {
            this.round++;
            this.roundMistake = false;
            if (this.round >= 6) {
                progress(6, 6);
                finish("Ninja Chuột Phím!", "Bé đã hoàn thành cả 6 thao tác chuột và bàn phím. Luyện thêm để nhanh hơn nữa nhé!");
                return;
            }
            this.render();
        },
        good: function (msg) {
            addScore(10);
            feedback("✅ " + msg, "ok");
            progress(this.round + 1, 6);
            const self = this;
            setTimeout(function () { self.next(); }, 650);
        },
        miss: function (msg) {
            if (!this.roundMistake) {
                this.roundMistake = true;
                state.mistakes++;
            }
            feedback("❌ " + msg, "bad");
        },
        render: function () {
            const r = this.round;
            progress(r, 6);
            stage.innerHTML = "";
            const title = document.createElement("h2");
            title.className = "round-title";
            const sub = document.createElement("p");
            sub.className = "round-sub";
            const arena = document.createElement("div");
            arena.className = "arena";
            stage.appendChild(title);
            stage.appendChild(sub);
            stage.appendChild(arena);
            const self = this;
            if (r === 0) {
                title.textContent = "Vòng 1 / 6 — Nháy chuột (Click)";
                sub.textContent = "Nháy MỘT lần vào quả bóng đỏ để chọn nó.";
                arena.innerHTML = `<div class="target" id="t1" title="Nháy vào tôi!"></div>`;
                $("#t1", arena).onclick = function () { self.good("Đúng rồi! Nháy một lần dùng để CHỌN một vật."); };
            } else if (r === 1) {
                title.textContent = "Vòng 2 / 6 — Nháy đúp (Double-click)";
                sub.textContent = "Nháy ĐÚP vào thư mục màu vàng để MỞ nó.";
                arena.innerHTML = `<div class="dc-folder" id="t2">HocTap</div>`;
                const folder = $("#t2", arena);
                folder.onclick = function () { self.miss("Đó mới là nháy một lần. Hãy nháy đúp thật nhanh (2 lần liên tiếp)."); };
                folder.ondblclick = function () { self.good("Chính xác! Nháy đúp dùng để MỞ tệp hoặc thư mục."); };
            } else if (r === 2) {
                title.textContent = "Vòng 3 / 6 — Nháy phải (Right-click)";
                sub.textContent = "Nháy PHẢI vào hộp quà, sau đó chọn 'Mở hộp quà' trong menu vừa hiện.";
                arena.innerHTML = `<div class="rc-card" id="t3"><span class="ico">🎁</span><span>Hộp quà bí mật</span></div>`;
                const card = $("#t3", arena);
                let menu = null;
                card.oncontextmenu = function (e) {
                    e.preventDefault();
                    if (menu) menu.remove();
                    const rect = arena.getBoundingClientRect();
                    menu = document.createElement("div");
                    menu.className = "rc-menu";
                    menu.style.left = Math.min(e.clientX - rect.left, rect.width - 160) + "px";
                    menu.style.top = (e.clientY - rect.top) + "px";
                    menu.innerHTML = `<button id="open-gift">📂 Mở hộp quà</button><button>✏️ Đổi tên</button><button>ℹ️ Properties</button>`;
                    arena.appendChild(menu);
                    $("#open-gift", menu).onclick = function () {
                        menu.remove();
                        self.good("Đúng! Nháy phải mở MENU NGỮ CẢNH với các lệnh phù hợp.");
                    };
                };
                card.onclick = function () { self.miss("Nháy trái chỉ chọn hộp quà. Hãy nháy PHẢI để mở menu ngữ cảnh."); };
            } else if (r === 3) {
                title.textContent = "Vòng 4 / 6 — Kéo thả (Drag & Drop)";
                sub.textContent = "Kéo ngôi sao ⭐ vào chiếc hộp xanh. (Hoặc bấm chọn sao rồi bấm vào hộp.)";
                arena.innerHTML = `<div class="drag-star" id="star" draggable="true">⭐</div><div class="drop-zone" id="drop">📦<span>Thả sao vào đây</span></div>`;
                const star = $("#star", arena);
                const drop = $("#drop", arena);
                let selected = false;
                star.addEventListener("dragstart", function (e) {
                    e.dataTransfer.setData("text/plain", "star");
                    star.classList.add("dragging");
                });
                star.addEventListener("dragend", function () { star.classList.remove("dragging"); });
                drop.addEventListener("dragover", function (e) { e.preventDefault(); drop.classList.add("over"); });
                drop.addEventListener("dragleave", function () { drop.classList.remove("over"); });
                drop.addEventListener("drop", function (e) {
                    e.preventDefault();
                    drop.classList.remove("over");
                    self.good("Tuyệt! Kéo thả giúp DI CHUYỂN đồ vật trong Windows.");
                });
                star.onclick = function () { selected = true; star.style.transform = "scale(1.15)"; feedback("Đã chọn ngôi sao. Bây giờ bấm vào chiếc hộp xanh.", "hint"); };
                drop.onclick = function () {
                    if (selected) self.good("Tuyệt! Bé vừa di chuyển ngôi sao bằng kéo thả.");
                    else self.miss("Hãy bấm vào ngôi sao trước, hoặc kéo nó bằng chuột.");
                };
            } else if (r === 4) {
                title.textContent = "Vòng 5 / 6 — Cuộn (Scroll)";
                sub.textContent = "Cuộn danh sách xuống dưới cùng và bấm nút 'NHIỆM VỤ BÍ MẬT'.";
                arena.innerHTML = `<div class="scroll-box" id="scroll">` +
                    Array.from({ length: 8 }).map((_, i) => `<div class="scroll-line">Dòng ${i + 1} — nội dung dài...</div>`).join("") +
                    `<button class="mg-btn primary" id="secret">🔓 NHIỆM VỤ BÍ MẬT</button></div>`;
                const box = $("#scroll", arena);
                box.onscroll = function () {
                    if (box.scrollTop + box.clientHeight >= box.scrollHeight - 4) {
                        feedback("Bé đã cuộn tới cuối! Bấm nút bí mật để qua vòng.", "hint");
                    }
                };
                $("#secret", arena).onclick = function () { self.good("Đúng! Con lăn giúp CUỘN nội dung dài."); };
            } else {
                title.textContent = "Vòng 6 / 6 — Gõ phím";
                sub.textContent = "Gõ lại chính xác câu bên dưới rồi bấm KIỂM TRA (hoặc Enter).";
                arena.innerHTML = `<div style="width:100%;max-width:520px"><div class="typing-sentence">Toi la coder nhi</div><input class="typing-input" id="typein" placeholder="Gõ câu ở trên..." autocomplete="off"><div style="margin-top:10px;text-align:center"><button class="mg-btn primary" id="typego">✓ Kiểm tra</button></div></div>`;
                const input = $("#typein", arena);
                setTimeout(function () { input.focus(); }, 80);
                function check() {
                    const norm = s => s.trim().toLowerCase().replace(/\s+/g, " ");
                    if (norm(input.value) === "toi la coder nhi") {
                        self.good("Chính xác! Bé đã hoàn thành cả 6 vòng.");
                    } else {
                        self.miss("Chưa đúng. Hãy gõ đúng câu: Toi la coder nhi");
                        input.focus();
                    }
                }
                $("#typego", arena).onclick = check;
                input.addEventListener("keydown", function (e) { if (e.key === "Enter") check(); });
            }
        }
    };

    /* =====================================================
       GAME 2 — PHÂN LOẠI HỆ ĐIỀU HÀNH / ỨNG DỤNG / WEBSITE
       ===================================================== */
    const classifyGame = {
        maxPoints: 150,
        items: [
            { label: "Windows 10", icon: "🪟", type: "os", why: "Windows 10 là hệ điều hành của Microsoft." },
            { label: "Android", icon: "🤖", type: "os", why: "Android là hệ điều hành cho điện thoại." },
            { label: "iOS", icon: "📱", type: "os", why: "iOS là hệ điều hành của iPhone." },
            { label: "Ubuntu", icon: "🐧", type: "os", why: "Ubuntu là một bản phân phối Linux — hệ điều hành." },
            { label: "macOS", icon: "🍎", type: "os", why: "macOS là hệ điều hành của Apple." },
            { label: "Paint", icon: "🎨", type: "app", why: "Paint là ứng dụng vẽ tranh trên Windows." },
            { label: "Microsoft Word", icon: "📘", type: "app", why: "Word là ứng dụng soạn thảo văn bản." },
            { label: "Calculator", icon: "🧮", type: "app", why: "Calculator là ứng dụng tính toán." },
            { label: "Notepad", icon: "📝", type: "app", why: "Notepad là ứng dụng ghi chú." },
            { label: "Minecraft", icon: "⛏️", type: "app", why: "Minecraft là một trò chơi — ứng dụng." },
            { label: "YouTube", icon: "▶️", type: "web", why: "YouTube là website xem video, cần trình duyệt." },
            { label: "Google", icon: "🔎", type: "web", why: "Google là website tìm kiếm." },
            { label: "Wikipedia", icon: "📚", type: "web", why: "Wikipedia là website bách khoa." },
            { label: "Facebook", icon: "👥", type: "web", why: "Facebook là website mạng xã hội." },
            { label: "GitHub", icon: "🐙", type: "web", why: "GitHub là website lưu trữ mã nguồn." }
        ],
        bins: [
            { type: "os", icon: "🏛️", label: "Hệ điều hành" },
            { type: "app", icon: "🧩", label: "Ứng dụng" },
            { type: "web", icon: "🌐", label: "Website" }
        ],
        start: function () {
            setHeader("🗂️", "Phân Loại", "Đưa 15 thẻ vào đúng 3 nhóm: Hệ điều hành, Ứng dụng, Website");
            state.maxPoints = 150;
            this.selected = null;
            this.placed = {};
            this.render();
        },
        render: function () {
            const self = this;
            const placedCount = Object.keys(this.placed).length;
            progress(placedCount, this.items.length);
            stage.innerHTML = `
                <h2 class="round-title">🧠 Bé hãy phân loại 15 thẻ</h2>
                <p class="round-sub">Bấm một thẻ rồi bấm vào nhóm phù hợp — hoặc kéo thả thẻ vào nhóm. Nhìn kỹ: hệ điều hành quản lý máy, ứng dụng làm một việc, website cần Internet.</p>
                <div class="bins">
                    ${this.bins.map(b => `<div class="bin" data-bin="${b.type}"><span class="b-ico">${b.icon}</span><h3>${b.label}</h3><div class="b-count">0 thẻ</div><div class="b-chips"></div></div>`).join("")}
                </div>
                <div class="item-tray" id="tray"></div>`;
            const tray = $("#tray", stage);
            this.items.forEach((item, i) => {
                const chip = document.createElement("div");
                chip.className = "item-chip" + (this.placed[item.label] ? " placed" : "");
                chip.draggable = true;
                chip.dataset.i = i;
                chip.innerHTML = `<span class="ico">${item.icon}</span><span>${item.label}</span>`;
                chip.onclick = function () {
                    $$(".item-chip", tray).forEach(x => x.classList.remove("selected"));
                    chip.classList.add("selected");
                    self.selected = item;
                    feedback("Đã chọn <b>" + item.label + "</b>. Bây giờ bấm vào nhóm phù hợp.", "hint");
                };
                chip.addEventListener("dragstart", function (e) {
                    self.selected = item;
                    e.dataTransfer.setData("text/plain", item.label);
                });
                tray.appendChild(chip);
            });
            $$(".bin", stage).forEach(bin => {
                const type = bin.dataset.bin;
                bin.addEventListener("dragover", function (e) { e.preventDefault(); bin.classList.add("over"); });
                bin.addEventListener("dragleave", function () { bin.classList.remove("over"); });
                bin.addEventListener("drop", function (e) {
                    e.preventDefault();
                    bin.classList.remove("over");
                    if (self.selected) self.check(self.selected, type, bin);
                });
                bin.addEventListener("click", function () {
                    if (self.selected) self.check(self.selected, type, bin);
                    else feedback("Hãy chọn một thẻ ở bên dưới trước.", "hint");
                });
            });
        },
        check: function (item, binType, binEl) {
            if (this.placed[item.label]) return;
            if (item.type === binType) {
                this.placed[item.label] = binType;
                addScore(10);
                const binLabel = this.bins.find(b => b.type === binType).label;
                const chips = $(".b-chips", binEl);
                chips.insertAdjacentHTML("beforeend", `<span class="chip">${item.icon} ${item.label}</span>`);
                $(".b-count", binEl).textContent = $$(".b-chips .chip", binEl).length + " thẻ";
                const chip = $$(".item-chip", stage).find(c => c.dataset.i === String(this.items.indexOf(item)));
                if (chip) chip.classList.add("placed");
                feedback("✅ Chính xác! <b>" + item.label + "</b> thuộc nhóm <b>" + binLabel + "</b>. " + item.why, "ok");
                this.selected = null;
                const count = Object.keys(this.placed).length;
                progress(count, this.items.length);
                if (count === this.items.length) {
                    setTimeout(function () {
                        finish("Nhà Phân Loại Xuất Sắc!", "Bé đã phân biệt chính xác hệ điều hành, ứng dụng và website. Hãy thử lại để đạt 150 điểm nhé!");
                    }, 700);
                }
            } else {
                state.mistakes++;
                binEl.classList.add("wrong");
                setTimeout(function () { binEl.classList.remove("wrong"); }, 400);
                const correctLabel = this.bins.find(b => b.type === item.type).label;
                feedback("❌ Chưa đúng. <b>" + item.label + "</b> thuộc nhóm <b>" + correctLabel + "</b>. " + item.why, "bad");
            }
        }
    };

    /* =====================================================
       GAME 3 — CHẾ ĐỘ NGUỒN (Bài 06)
       ===================================================== */
    const powerGame = {
        maxPoints: 80,
        scenarios: [
            { text: "Bé rời bàn 5 phút để uống nước, muốn quay lại làm tiếp đúng chỗ đang dở.", answer: "sleep", why: "Sleep giữ nguyên mọi ứng dụng và tiêu hao rất ít điện." },
            { text: "Hết giờ học, bé cất máy vào cặp và không dùng nữa trong hôm nay.", answer: "shutdown", why: "Shut down đóng mọi thứ và tắt nguồn hoàn toàn, an toàn để cất máy." },
            { text: "Bé vừa cài xong driver mới và Windows yêu cầu khởi động lại.", answer: "restart", why: "Restart áp dụng đầy đủ các thay đổi hệ thống và driver mới." },
            { text: "Bé phải ra khỏi phòng nhưng không muốn người khác đọc tài liệu đang mở.", answer: "lock", why: "Lock khóa màn hình ngay, mọi ứng dụng vẫn giữ nguyên nhưng cần PIN để vào." },
            { text: "Máy chạy rất chậm sau nhiều ngày không tắt, mở ứng dụng nào cũng chậm.", answer: "restart", why: "Restart dọn sạch RAM và làm mới các tiến trình — cách đơn giản hiệu quả nhất." },
            { text: "Laptop sắp hết pin, bé phải đi học cả buổi chiều và không mang theo sạc.", answer: "shutdown", why: "Shut down tiết kiệm pin tối đa khi không dùng máy trong thời gian dài." },
            { text: "Bé đang mở 5 tài liệu, cần ra ngoài 10 phút và muốn tiếp tục ngay khi về.", answer: "sleep", why: "Sleep giữ nguyên toàn bộ cửa sổ, đánh thức chỉ mất vài giây." },
            { text: "Một ứng dụng bị treo, bé đã End task nhưng hệ thống vẫn lỗi và không ổn định.", answer: "restart", why: "Khi hệ thống bất ổn, Restart là cách làm sạch an toàn trước khi thử lại." }
        ],
        options: [
            { id: "sleep", icon: "🌙", label: "Sleep" },
            { id: "restart", icon: "🔄", label: "Restart" },
            { id: "shutdown", icon: "⏻", label: "Shut down" },
            { id: "lock", icon: "🔒", label: "Lock" }
        ],
        start: function () {
            setHeader("⚡", "Chế Độ Nguồn", "Chọn Sleep / Restart / Shut down / Lock cho 8 tình huống");
            state.maxPoints = 80;
            this.index = 0;
            this.render();
        },
        render: function () {
            const self = this;
            const sc = this.scenarios[this.index];
            progress(this.index, this.scenarios.length);
            stage.innerHTML = `
                <h2 class="round-title">Tình huống ${this.index + 1} / ${this.scenarios.length}</h2>
                <p class="round-sub">Bé sẽ chọn chế độ nguồn nào của Windows 10?</p>
                <div class="scenario-card"><div class="q">💬 ${sc.text}</div></div>
                <div class="power-options">
                    ${this.options.map(o => `<button class="power-opt" data-opt="${o.id}"><span class="p-ico">${o.icon}</span>${o.label}</button>`).join("")}
                </div>
                <div id="power-explain"></div>`;
            $$(".power-opt", stage).forEach(btn => {
                btn.onclick = function () { self.answer(btn.dataset.opt, btn); };
            });
        },
        answer: function (choice, btn) {
            if (state.busy) return;
            state.busy = true;
            const sc = this.scenarios[this.index];
            const correct = sc.answer;
            $$(".power-opt", stage).forEach(b => {
                b.disabled = true;
                if (b.dataset.opt === correct) b.classList.add("correct");
            });
            if (choice === correct) {
                addScore(10);
                feedback("✅ Chính xác! " + sc.why, "ok");
            } else {
                state.mistakes++;
                btn.classList.add("wrong");
                feedback("❌ Chưa đúng. Đáp án đúng là <b>" + this.options.find(o => o.id === correct).label + "</b>. " + sc.why, "bad");
            }
            $("#power-explain", stage).innerHTML = `<div class="explain">💡 <b>Vì sao?</b> ${sc.why}</div>`;
            const self = this;
            setTimeout(function () {
                self.index++;
                state.busy = false;
                if (self.index >= self.scenarios.length) {
                    progress(8, 8);
                    finish("Bậc Thầy Nguồn Máy!", "Bé đã chọn đúng chế độ nguồn cho cả 8 tình huống. Hãy nhớ: Sleep – Restart – Shut down – Lock mỗi thứ có một mục đích riêng!");
                } else {
                    self.render();
                }
            }, 1500);
        }
    };

    /* =====================================================
       GAME 4 — ĐIỀU KHIỂN CỬA SỔ (Bài 07)
       ===================================================== */
    const windowGame = {
        maxPoints: 70,
        tasks: [
            { text: "Phóng to cửa sổ bằng nút □", expect: "max", hint: "Nút □ nằm giữa — và ✕ ở góc phải trên." },
            { text: "Khôi phục kích thước cũ (bấm □ lần nữa)", expect: "restore", hint: "Khi đang phóng to, nút □ đổi thành nút khôi phục." },
            { text: "Thu nhỏ cửa sổ bằng nút —", expect: "min", hint: "Nút — nằm bên trái nút □." },
            { text: "Mở lại cửa sổ từ thanh Taskbar", expect: "taskbar", hint: "Bấm nút Notepad trên thanh đen dưới cùng." },
            { text: "Kéo cửa sổ vào nửa TRÁI màn hình", expect: "snap-left", hint: "Giữ thanh tiêu đề và kéo sang sát mép trái." },
            { text: "Kéo cửa sổ vào nửa PHẢI màn hình", expect: "snap-right", hint: "Giữ thanh tiêu đề và kéo sang sát mép phải." },
            { text: "Đóng cửa sổ bằng nút ✕", expect: "close", hint: "Nút ✕ đỏ ở góc phải trên." }
        ],
        start: function () {
            setHeader("🪟", "Điều Khiển Cửa Sổ", "Làm đúng 7 nhiệm vụ: phóng to, khôi phục, thu nhỏ, mở lại, snap trái/phải, đóng");
            state.maxPoints = 70;
            this.index = 0;
            this.winState = "normal";
            this.render();
        },
        render: function () {
            const self = this;
            progress(this.index, this.tasks.length);
            stage.innerHTML = `
                <h2 class="round-title">Nhiệm vụ ${this.index + 1} / ${this.tasks.length}</h2>
                <p class="round-sub" id="win-task">${this.tasks[this.index].text}</p>
                <div class="window-stage" id="win-stage">
                    <div class="fake-win" id="fake-win">
                        <div class="fake-title" id="fake-title"><span>📝 BaiHoc.txt — Notepad</span>
                            <div class="fake-controls">
                                <button data-fc="min" title="Thu nhỏ">—</button>
                                <button data-fc="max" title="Phóng to / Khôi phục">□</button>
                                <button data-fc="close" class="fc-close" title="Đóng">✕</button>
                            </div>
                        </div>
                        <div class="fake-body">Đây là cửa sổ giả lập. Hãy dùng chuột thực hiện nhiệm vụ được yêu cầu ở trên.</div>
                    </div>
                    <div class="fake-taskbar"><button id="taskbar-win">📝 BaiHoc.txt</button></div>
                </div>`;
            const win = $("#fake-win", stage);
            const stageEl = $("#win-stage", stage);
            const title = $("#fake-title", stage);
            // Khôi phục trạng thái cửa sổ sau mỗi lần render nhiệm vụ
            if (this.winState === "max") win.classList.add("maxed");
            if (this.winState === "snap-left") win.classList.add("snap-left");
            if (this.winState === "snap-right") win.classList.add("snap-right");
            if (this.winState === "min") win.style.display = "none";
            $$("[data-fc]", stage).forEach(btn => {
                btn.onclick = function (e) {
                    e.stopPropagation();
                    const act = btn.dataset.fc;
                    if (act === "min") {
                        win.style.display = "none";
                        self.winState = "min";
                        self.check("min");
                    } else if (act === "close") {
                        self.check("close");
                        if (self.tasks[self.index] && self.tasks[self.index].expect === "close") {
                            win.style.display = "none";
                        } else {
                            setTimeout(function () { win.style.display = "flex"; }, 400);
                            self.winState = "normal";
                        }
                    } else if (act === "max") {
                        if (win.classList.contains("maxed")) {
                            win.classList.remove("maxed");
                            self.winState = "normal";
                            self.check("restore");
                        } else {
                            win.classList.remove("snap-left", "snap-right");
                            win.classList.add("maxed");
                            self.winState = "max";
                            self.check("max");
                        }
                    }
                };
            });
            $("#taskbar-win", stage).onclick = function () {
                win.style.display = "flex";
                if (self.winState === "min") self.winState = "normal";
                self.check("taskbar");
            };
            let drag = null;
            title.addEventListener("pointerdown", function (e) {
                if (e.target.closest("button")) return;
                drag = { ox: e.clientX, oy: e.clientY, rect: win.getBoundingClientRect(), stageRect: stageEl.getBoundingClientRect() };
                title.setPointerCapture(e.pointerId);
            });
            title.addEventListener("pointermove", function (e) {
                if (!drag) return;
                if (win.classList.contains("maxed")) return;
                const dx = e.clientX - drag.ox;
                const dy = e.clientY - drag.oy;
                if (win.classList.contains("snap-left") || win.classList.contains("snap-right")) return;
                win.style.transform = "none";
                win.style.left = Math.max(0, Math.min(drag.rect.left - drag.stageRect.left + dx, drag.stageRect.width - 120)) + "px";
                win.style.top = Math.max(0, Math.min(drag.rect.top - drag.stageRect.top + dy, drag.stageRect.height - 80)) + "px";
            });
            title.addEventListener("pointerup", function (e) {
                if (!drag) return;
                const stageRect = drag.stageRect;
                const x = e.clientX - stageRect.left;
                const y = e.clientY - stageRect.top;
                drag = null;
                if (win.classList.contains("maxed")) return;
                if (x < stageRect.width * 0.22) {
                    win.classList.remove("snap-right");
                    win.classList.add("snap-left");
                    win.style.left = "0px"; win.style.top = "0px"; win.style.transform = "none";
                    self.winState = "snap-left";
                    self.check("snap-left");
                } else if (x > stageRect.width * 0.78) {
                    win.classList.remove("snap-left");
                    win.classList.add("snap-right");
                    win.style.left = "50%"; win.style.top = "0px"; win.style.transform = "none";
                    self.winState = "snap-right";
                    self.check("snap-right");
                }
            });
        },
        check: function (action) {
            const task = this.tasks[this.index];
            if (!task) return;
            if (action === task.expect) {
                addScore(10);
                feedback("✅ Chính xác! " + task.text.replace(/ bằng nút .*/, "") + " thành công.", "ok");
                this.index++;
                progress(this.index, this.tasks.length);
                const self = this;
                if (this.index >= this.tasks.length) {
                    setTimeout(function () { finish("Ảo Thuật Gia Cửa Sổ!", "Bé đã làm chủ phóng to, khôi phục, thu nhỏ, mở lại, snap trái/phải và đóng cửa sổ!"); }, 450);
                } else {
                    setTimeout(function () { self.render(); }, 550);
                }
            } else if (action === "min" && task.expect !== "min") {
                feedback("Cửa sổ đã thu nhỏ. Nhiệm vụ hiện tại: " + task.text, "hint");
            } else {
                feedback("❌ Chưa đúng nhiệm vụ. Yêu cầu: <b>" + task.text + "</b>. Gợi ý: " + task.hint, "bad");
            }
        }
    };

    /* =====================================================
       GAME 5 — ĐỊNH DẠNG TỆP (Bài 08)
       ===================================================== */
    const filesGame = {
        maxPoints: 100,
        items: [
            { name: "BaiHoc.txt", icon: "📄", cat: "text", why: ".txt là văn bản thuần, mở bằng Notepad." },
            { name: "BaoCao.pdf", icon: "📕", cat: "text", why: ".pdf là tài liệu, mở bằng Edge hoặc Adobe Reader." },
            { name: "TrangWeb.html", icon: "🌐", cat: "text", why: ".html là trang web, mở bằng trình duyệt." },
            { name: "AnhKyNiem.jpg", icon: "🖼️", cat: "image", why: ".jpg là hình ảnh, mở bằng Photos hoặc Paint." },
            { name: "Logo.png", icon: "🖼️", cat: "image", why: ".png là hình ảnh có thể có nền trong suốt." },
            { name: "BieuTuong.png", icon: "🖼️", cat: "image", why: ".png là hình ảnh, phù hợp làm biểu tượng." },
            { name: "BaiHat.mp3", icon: "🎵", cat: "media", why: ".mp3 là âm thanh, mở bằng Media Player." },
            { name: "PhimHoathinh.mp4", icon: "🎬", cat: "media", why: ".mp4 là video, mở bằng Movies & TV." },
            { name: "Game.exe", icon: "⚙️", cat: "program", why: ".exe là chương trình chạy trên Windows — cần cẩn thận nguồn gốc." },
            { name: "UngDung.msi", icon: "📦", cat: "program", why: ".msi là bộ cài đặt phần mềm trên Windows." }
        ],
        bins: [
            { cat: "text", icon: "📄", label: "Văn bản" },
            { cat: "image", icon: "🖼️", label: "Hình ảnh" },
            { cat: "media", icon: "🎬", label: "Âm thanh & Video" },
            { cat: "program", icon: "⚙️", label: "Chương trình" }
        ],
        start: function () {
            setHeader("📁", "Định Dạng Tệp", "Đưa 10 tệp vào đúng nhóm dựa trên phần mở rộng");
            state.maxPoints = 100;
            this.selected = null;
            this.placed = {};
            this.render();
        },
        render: function () {
            const self = this;
            progress(Object.keys(this.placed).length, this.items.length);
            stage.innerHTML = `
                <h2 class="round-title">🗂️ Nhìn đuôi tệp — đoán loại dữ liệu</h2>
                <p class="round-sub">Bấm một tệp rồi bấm vào nhóm phù hợp, hoặc kéo thả. Mẹo: phần sau dấu chấm (.txt, .jpg, .mp3, .exe) chính là manh mối!</p>
                <div class="bins">
                    ${this.bins.map(b => `<div class="bin" data-bin="${b.cat}"><span class="b-ico">${b.icon}</span><h3>${b.label}</h3><div class="b-count">0 tệp</div><div class="b-chips"></div></div>`).join("")}
                </div>
                <div class="item-tray" id="tray"></div>`;
            const tray = $("#tray", stage);
            this.items.forEach(item => {
                const chip = document.createElement("div");
                chip.className = "item-chip" + (this.placed[item.name] ? " placed" : "");
                chip.draggable = true;
                chip.dataset.name = item.name;
                chip.innerHTML = `<span class="ico">${item.icon}</span><span>${item.name}</span>`;
                chip.onclick = function () {
                    $$(".item-chip", tray).forEach(x => x.classList.remove("selected"));
                    chip.classList.add("selected");
                    self.selected = item;
                    feedback("Đã chọn <b>" + item.name + "</b>. Bấm vào nhóm phù hợp.", "hint");
                };
                chip.addEventListener("dragstart", function (e) {
                    self.selected = item;
                    e.dataTransfer.setData("text/plain", item.name);
                });
                tray.appendChild(chip);
            });
            $$(".bin", stage).forEach(bin => {
                const cat = bin.dataset.bin;
                bin.addEventListener("dragover", function (e) { e.preventDefault(); bin.classList.add("over"); });
                bin.addEventListener("dragleave", function () { bin.classList.remove("over"); });
                bin.addEventListener("drop", function (e) {
                    e.preventDefault();
                    bin.classList.remove("over");
                    if (self.selected) self.check(self.selected, cat, bin);
                });
                bin.addEventListener("click", function () {
                    if (self.selected) self.check(self.selected, cat, bin);
                    else feedback("Hãy chọn một tệp ở bên dưới trước.", "hint");
                });
            });
        },
        check: function (item, cat, binEl) {
            if (this.placed[item.name]) return;
            const binLabel = this.bins.find(b => b.cat === cat).label;
            if (item.cat === cat) {
                this.placed[item.name] = cat;
                addScore(10);
                $(".b-chips", binEl).insertAdjacentHTML("beforeend", `<span class="chip">${item.icon} ${item.name}</span>`);
                $(".b-count", binEl).textContent = $$(".b-chips .chip", binEl).length + " tệp";
                const chip = $$(".item-chip", stage).find(c => c.dataset.name === item.name);
                if (chip) chip.classList.add("placed");
                feedback("✅ Chính xác! <b>" + item.name + "</b> thuộc nhóm <b>" + binLabel + "</b>. " + item.why, "ok");
                this.selected = null;
                const count = Object.keys(this.placed).length;
                progress(count, this.items.length);
                if (count === this.items.length) {
                    setTimeout(function () {
                        finish("Nhà Sưu Tầm Tệp Tin!", "Bé đã nhận diện đúng cả 10 định dạng tệp. Hãy nhớ: đuôi tệp cho biết loại dữ liệu và ứng dụng mở nó!");
                    }, 650);
                }
            } else {
                state.mistakes++;
                binEl.classList.add("wrong");
                setTimeout(function () { binEl.classList.remove("wrong"); }, 400);
                const correctLabel = this.bins.find(b => b.cat === item.cat).label;
                feedback("❌ Chưa đúng. <b>" + item.name + "</b> thuộc nhóm <b>" + correctLabel + "</b>. " + item.why, "bad");
            }
        }
    };

    /* =====================================================
       GAME 6 — TÌNH HUỐNG AN TOÀN SỐ (Bài 09)
       ===================================================== */
    const safetyGame = {
        maxPoints: 100,
        scenarios: [
            { text: "Dùng một mật khẩu giống nhau cho tất cả các trang web.", ans: "khong", why: "Mỗi trang cần một mật khẩu riêng: nếu một trang bị lộ, các trang khác vẫn an toàn." },
            { text: "Kiểm tra địa chỉ có https:// và đúng tên miền trước khi đăng nhập.", ans: "nen", why: "HTTPS mã hóa dữ liệu; kiểm tra tên miền giúp tránh trang giả mạo." },
            { text: "Nhập mã OTP vào trang web vừa nhận được qua tin nhắn.", ans: "khong", why: "OTP là bí mật tuyệt đối. Không trang thật nào yêu cầu bé đọc OTP qua tin nhắn." },
            { text: "Người lạ nhắn tin hỏi địa chỉ nhà và trường học của em.", ans: "hoi", why: "Không trả lời, chặn người đó và báo ngay cho bố mẹ — thông tin vị trí rất nguy hiểm." },
            { text: "Bấm vào quảng cáo “Trúng iPhone 15, chỉ còn 2 phút!”.", ans: "khong", why: "Quà quá lớn + ép thời gian là dấu hiệu lừa đảo điển hình." },
            { text: "Đóng tab cảnh báo “Máy bạn bị virus” và báo bố mẹ kiểm tra.", ans: "nen", why: "Đóng tab ngăn link độc; người lớn sẽ kiểm tra bằng công cụ bảo mật thật." },
            { text: "Chia sẻ ảnh thẻ học sinh lên một nhóm công khai.", ans: "khong", why: "Ảnh thẻ chứa họ tên, trường, lớp — không nên công khai." },
            { text: "Mở tệp .exe đính kèm từ email của người lạ.", ans: "khong", why: "Tệp .exe có thể là mã độc. Không mở tệp từ nguồn không tin cậy." },
            { text: "Khi bị bắt nạt trên mạng: lưu bằng chứng và kể với bố mẹ.", ans: "nen", why: "Lưu bằng chứng giúp người lớn xử lý; im lặng làm tình hình tệ hơn." },
            { text: "Một người quen qua mạng rủ em đi gặp riêng.", ans: "hoi", why: "Từ chối, không đi một mình và báo bố mẹ trước khi làm bất cứ điều gì." }
        ],
        options: [
            { id: "nen", icon: "✅", label: "Nên làm", cls: "s-nen" },
            { id: "khong", icon: "🚫", label: "Không nên", cls: "s-khong" },
            { id: "hoi", icon: "🙋", label: "Hỏi người lớn", cls: "s-hoi" }
        ],
        start: function () {
            setHeader("🛡️", "Tình Huống An Toàn", "Chọn cách xử lý đúng cho 10 tình huống trên mạng");
            state.maxPoints = 100;
            this.index = 0;
            this.render();
        },
        render: function () {
            const self = this;
            const sc = this.scenarios[this.index];
            progress(this.index, this.scenarios.length);
            stage.innerHTML = `
                <h2 class="round-title">Tình huống ${this.index + 1} / ${this.scenarios.length}</h2>
                <p class="round-sub">Nếu gặp tình huống này, em sẽ chọn cách nào?</p>
                <div class="scenario-card"><div class="q">💬 ${sc.text}</div></div>
                <div class="safety-options">
                    ${this.options.map(o => `<button class="safety-opt ${o.cls}" data-safety="${o.id}"><span class="s-ico">${o.icon}</span>${o.label}</button>`).join("")}
                </div>
                <div id="safety-explain"></div>
                <div class="safety-reminder">💡 Khi phân vân, hãy nhớ: <b>DỪNG</b> → <b>SUY NGHĨ</b> → <b>HỎI</b> người lớn → <b>BÁO</b> nếu đã lỡ bấm.</div>`;
            $$(".safety-opt", stage).forEach(btn => {
                btn.onclick = function () { self.answer(btn.dataset.safety, btn); };
            });
        },
        answer: function (choice, btn) {
            if (state.busy) return;
            state.busy = true;
            const sc = this.scenarios[this.index];
            $$(".safety-opt", stage).forEach(b => {
                b.disabled = true;
                if (b.dataset.safety === sc.ans) b.classList.add("correct");
            });
            if (choice === sc.ans) {
                addScore(10);
                feedback("✅ Chính xác! " + sc.why, "ok");
            } else {
                state.mistakes++;
                btn.classList.add("wrong");
                feedback("❌ Chưa đúng. " + sc.why, "bad");
            }
            $("#safety-explain", stage).innerHTML = `<div class="explain">💡 <b>Vì sao?</b> ${sc.why}</div>`;
            const self = this;
            setTimeout(function () {
                self.index++;
                state.busy = false;
                if (self.index >= self.scenarios.length) {
                    progress(10, 10);
                    finish("Hiệp Sĩ An Toàn Mạng!", "Bé đã xử lý đúng cả 10 tình huống. Hãy nhớ: DỪNG – SUY NGHĨ – HỎI – BÁO khi gặp điều bất thường!");
                } else {
                    self.render();
                }
            }, 1600);
        }
    };

    /* =====================================================
       GAME 7 — BẢN ĐỒ MÁY TÍNH: 4 LỚP HỆ THỐNG (Bài 10)
       ===================================================== */
    const mapGame = {
        maxPoints: 120,
        items: [
            { name: "CPU Intel Core i5", icon: "🧠", cat: "hw", why: "CPU là bộ xử lý — phần cứng." },
            { name: "RAM 8 GB", icon: "⚡", cat: "hw", why: "RAM là bộ nhớ tạm — phần cứng." },
            { name: "Ổ cứng SSD 512 GB", icon: "💾", cat: "hw", why: "SSD là thiết bị lưu trữ — phần cứng." },
            { name: "Windows 10 Home", icon: "🪟", cat: "os", why: "Windows 10 là hệ điều hành." },
            { name: "Ubuntu Linux", icon: "🐧", cat: "os", why: "Ubuntu là hệ điều hành mã nguồn mở." },
            { name: "Android 14", icon: "🤖", cat: "os", why: "Android là hệ điều hành cho điện thoại." },
            { name: "Notepad", icon: "📝", cat: "app", why: "Notepad là ứng dụng ghi chú." },
            { name: "Microsoft Edge", icon: "🌐", cat: "app", why: "Edge là ứng dụng trình duyệt." },
            { name: "Paint", icon: "🎨", cat: "app", why: "Paint là ứng dụng vẽ." },
            { name: "BaiHoc.txt", icon: "📄", cat: "data", why: ".txt là tệp dữ liệu văn bản." },
            { name: "AnhKyNiem.png", icon: "🖼️", cat: "data", why: ".png là tệp dữ liệu hình ảnh." },
            { name: "BaiHat.mp3", icon: "🎵", cat: "data", why: ".mp3 là tệp dữ liệu âm thanh." }
        ],
        bins: [
            { cat: "hw", icon: "🔩", label: "Phần cứng" },
            { cat: "os", icon: "🏛️", label: "Hệ điều hành" },
            { cat: "app", icon: "🧩", label: "Ứng dụng" },
            { cat: "data", icon: "📂", label: "Dữ liệu" }
        ],
        start: function () {
            setHeader("🗺️", "Bản Đồ Máy Tính", "Xếp 12 thành phần vào đúng 4 lớp của hệ thống");
            state.maxPoints = 120;
            this.selected = null;
            this.placed = {};
            this.render();
        },
        render: function () {
            const self = this;
            progress(Object.keys(this.placed).length, this.items.length);
            stage.innerHTML = `
                <h2 class="round-title">🧭 Bốn lớp của hệ thống máy tính</h2>
                <p class="round-sub">Bấm một thẻ rồi bấm vào lớp phù hợp, hoặc kéo thả. Nhớ thứ tự: Phần cứng → Hệ điều hành → Ứng dụng → Dữ liệu.</p>
                <div class="bins">
                    ${this.bins.map(b => `<div class="bin" data-bin="${b.cat}"><span class="b-ico">${b.icon}</span><h3>${b.label}</h3><div class="b-count">0 mục</div><div class="b-chips"></div></div>`).join("")}
                </div>
                <div class="item-tray" id="tray"></div>`;
            const tray = $("#tray", stage);
            this.items.forEach(item => {
                const chip = document.createElement("div");
                chip.className = "item-chip" + (this.placed[item.name] ? " placed" : "");
                chip.draggable = true;
                chip.dataset.name = item.name;
                chip.innerHTML = `<span class="ico">${item.icon}</span><span>${item.name}</span>`;
                chip.onclick = function () {
                    $$(".item-chip", tray).forEach(x => x.classList.remove("selected"));
                    chip.classList.add("selected");
                    self.selected = item;
                    feedback("Đã chọn <b>" + item.name + "</b>. Bấm vào lớp phù hợp.", "hint");
                };
                chip.addEventListener("dragstart", function (e) {
                    self.selected = item;
                    e.dataTransfer.setData("text/plain", item.name);
                });
                tray.appendChild(chip);
            });
            $$(".bin", stage).forEach(bin => {
                const cat = bin.dataset.bin;
                bin.addEventListener("dragover", function (e) { e.preventDefault(); bin.classList.add("over"); });
                bin.addEventListener("dragleave", function () { bin.classList.remove("over"); });
                bin.addEventListener("drop", function (e) {
                    e.preventDefault();
                    bin.classList.remove("over");
                    if (self.selected) self.check(self.selected, cat, bin);
                });
                bin.addEventListener("click", function () {
                    if (self.selected) self.check(self.selected, cat, bin);
                    else feedback("Hãy chọn một thẻ ở bên dưới trước.", "hint");
                });
            });
        },
        check: function (item, cat, binEl) {
            if (this.placed[item.name]) return;
            const binLabel = this.bins.find(b => b.cat === cat).label;
            if (item.cat === cat) {
                this.placed[item.name] = cat;
                addScore(10);
                $(".b-chips", binEl).insertAdjacentHTML("beforeend", `<span class="chip">${item.icon} ${item.name}</span>`);
                $(".b-count", binEl).textContent = $$(".b-chips .chip", binEl).length + " mục";
                const chip = $$(".item-chip", stage).find(c => c.dataset.name === item.name);
                if (chip) chip.classList.add("placed");
                feedback("✅ Chính xác! <b>" + item.name + "</b> thuộc lớp <b>" + binLabel + "</b>. " + item.why, "ok");
                this.selected = null;
                const count = Object.keys(this.placed).length;
                progress(count, this.items.length);
                if (count === this.items.length) {
                    setTimeout(function () {
                        finish("Bậc Thầy Bản Đồ Máy Tính!", "Bé đã xếp đúng cả 12 thành phần vào 4 lớp. Bây giờ hãy vẽ bản đồ của chính máy em và thuyết trình 3 phút!");
                    }, 650);
                }
            } else {
                state.mistakes++;
                binEl.classList.add("wrong");
                setTimeout(function () { binEl.classList.remove("wrong"); }, 400);
                const correctLabel = this.bins.find(b => b.cat === item.cat).label;
                feedback("❌ Chưa đúng. <b>" + item.name + "</b> thuộc lớp <b>" + correctLabel + "</b>. " + item.why, "bad");
            }
        }
    };

    /* =====================================================
       KHỞI ĐỘNG
       ===================================================== */
    const GAMES = {
        mouse: mouseGame,
        classify: classifyGame,
        power: powerGame,
        window: windowGame,
        files: filesGame,
        safety: safetyGame,
        map: mapGame
    };
    const GAME = GAMES[gameId] || mouseGame;
    window.GAME = GAME;
    updateScore();
    GAME.start();
})();
