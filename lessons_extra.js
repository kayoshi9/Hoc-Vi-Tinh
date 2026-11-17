/**
 * NỘI DUNG CHI TIẾT CÁC BÀI 4 TRỞ ĐI
 * Mỗi bài: 3 buổi lý thuyết, 3 thử thách thực hành, 10 câu trắc nghiệm.
 * Được gộp vào giáo trình bởi getFullLessons() trong lessons_data.js
 */

const EXTRA_LESSONS = {
    // ==========================================
    // BÀI 04 — MÀN HÌNH, BÀN PHÍM VÀ CHUỘT QUANG
    // ==========================================
    4: {
        id: 4,
        chapterId: 1,
        chapterTitle: "Chương 1 — Khám phá thế giới máy tính",
        title: "Màn hình, Bàn phím và Chuột quang",
        badge: "Ninja Chuột Phím",
        desc: "Hiểu cách màn hình tạo ra hình ảnh, làm chủ 6 thao tác chuột và toàn bộ bàn phím; luyện tập để tay – mắt phối hợp nhuần nhuyễn như một ninja trên Windows 10.",
        session1: `
            <h4>1. Ba người bạn thân của bé</h4>
            <p>Mỗi lần bé ngồi vào bàn học, có ba người bạn âm thầm phối hợp để đưa thế giới số đến trước mắt bé. Hãy tưởng tượng bé là <strong>thuyền trưởng</strong> của một con tàu vũ trụ:</p>
            <div class="rich-grid">
                <div class="rich-card"><span class="rc-icon">🖥️</span><strong>Màn hình — Đôi mắt</strong><br>Hiển thị mọi thứ máy tính muốn nói với bé: chữ, hình, phim, trò chơi.</div>
                <div class="rich-card"><span class="rc-icon">⌨️</span><strong>Bàn phím — Giọng nói</strong><br>Giúp bé gõ chữ, nhập số, ra lệnh bằng những tổ hợp phím thần tốc.</div>
                <div class="rich-card"><span class="rc-icon">🖱️</span><strong>Chuột — Bàn tay</strong><br>Giúp bé chỉ trỏ, chọn, mở và di chuyển đồ vật trên màn hình.</div>
            </div>

            <h4>1.1 Màn hình: hàng triệu điểm ảnh xếp thành bức tranh</h4>
            <p>Nếu soi thật gần màn hình, bé sẽ thấy nó được tạo từ rất nhiều <strong>điểm ảnh (pixel)</strong> — những ô vuông li ti đỏ, xanh lá, xanh dương. Máy tính bật tắt từng ô với màu sắc khác nhau, mắt người nhìn từ xa sẽ thấy đó là một bức ảnh liền mạch.</p>
            <div class="table-scroll">
                <table class="lesson-table">
                    <tr><th>Khái niệm</th><th>Nghĩa đơn giản</th><th>Ví dụ thực tế</th></tr>
                    <tr><td><strong>Pixel</strong></td><td>Một điểm ảnh nhỏ nhất trên màn hình</td><td>Một chấm màu trong bức tranh ghép hạt</td></tr>
                    <tr><td><strong>Độ phân giải</strong></td><td>Số pixel theo chiều ngang × chiều dọc</td><td>1920 × 1080 = Full HD (hơn 2 triệu pixel)</td></tr>
                    <tr><td><strong>Tần số quét (Hz)</strong></td><td>Số lần màn hình làm mới hình ảnh mỗi giây</td><td>60 Hz = 60 lần/giây, hình chuyển động mượt</td></tr>
                    <tr><td><strong>Kích thước</strong></td><td>Độ dài đường chéo màn hình</td><td>Màn hình 21,5 inch, 24 inch, 27 inch</td></tr>
                </table>
            </div>
            <div class="note-box">💡 <strong>Mẹo nhỏ:</strong> Độ phân giải càng cao thì hình càng sắc nét nhưng chữ và biểu tượng có thể nhỏ hơn. Trong Windows 10, bé có thể tăng <em>Scale</em> lên 125% để chữ dễ đọc hơn mà không mất độ nét.</div>

            <h4>1.2 Bàn phím: 5 khu vực làm việc</h4>
            <p>Bàn phím trông như một thành phố có 5 khu phố, mỗi khu phố đảm nhận một nhiệm vụ riêng:</p>
            <div class="rich-grid">
                <div class="rich-card"><strong>① Khu phím chức năng</strong><br><span class="keycap">F1</span> đến <span class="keycap">F12</span> nằm trên cùng. Mỗi phím làm một việc khác nhau tùy ứng dụng (F5 tải lại trang, F12 mở Developer Tools).</div>
                <div class="rich-card"><strong>② Khu phím gõ</strong><br>Các chữ cái <span class="keycap">A</span>–<span class="keycap">Z</span>, số, dấu câu. Đây là nơi bé gõ văn bản và viết code.</div>
                <div class="rich-card"><strong>③ Khu phím điều hướng</strong><br><span class="keycap">↑ ↓ ← →</span>, <span class="keycap">Home</span>, <span class="keycap">End</span>, <span class="keycap">Page Up</span>, <span class="keycap">Page Down</span> giúp di chuyển mà không cần chuột.</div>
                <div class="rich-card"><strong>④ Khu phím số (Numpad)</strong><br>Cụm số bên phải, gõ số nhanh như máy tính bỏ túi. Bật/tắt bằng <span class="keycap">Num Lock</span>.</div>
                <div class="rich-card"><strong>⑤ Khu phím đặc biệt</strong><br><span class="keycap">Ctrl</span> <span class="keycap">Alt</span> <span class="keycap">Shift</span> <span class="keycap">Win</span> <span class="keycap">Enter</span> <span class="keycap">Space</span> <span class="keycap">Esc</span> <span class="keycap">Backspace</span> <span class="keycap">Delete</span> <span class="keycap">Tab</span>.</div>
            </div>
            <div class="ok-box">🎯 <strong>Bí kíp ghi nhớ:</strong> <span class="keycap">Ctrl</span> và <span class="keycap">Alt</span> là hai phím "bắt tay" với phím khác để tạo tổ hợp. Ví dụ <span class="keycap">Ctrl</span> + <span class="keycap">C</span> là sao chép, <span class="keycap">Ctrl</span> + <span class="keycap">V</span> là dán.</div>

            <h4>1.3 Chuột quang: cảm biến ánh sáng bên dưới</h4>
            <p>Chuột quang không có viên bi lăn như chuột cổ. Bên dưới nó là một <strong>đèn LED</strong> và một <strong>cảm biến quang học</strong> chụp hàng nghìn bức ảnh nhỏ mỗi giây để biết bé đang di chuyển chuột nhanh hay chậm.</p>
            <ul>
                <li><strong>Nút trái:</strong> chọn, mở, kéo thả — dùng nhiều nhất.</li>
                <li><strong>Nút phải:</strong> mở <em>menu ngữ cảnh</em> (context menu) chứa các lệnh phù hợp với thứ bé vừa bấm.</li>
                <li><strong>Con lăn:</strong> cuộn trang lên xuống; bấm con lăn thường là "mở liên kết trong tab mới" khi lướt web.</li>
                <li><strong>DPI:</strong> độ nhạy di chuyển. DPI cao = di chuột một đoạn ngắn, con trỏ chạy xa hơn.</li>
            </ul>
            <div class="note-box">💡 <strong>Vì sao gọi là "chuột quang"?</strong> Vì nó dùng <em>ánh sáng</em> để "nhìn" mặt bàn. Vì thế chuột quang chạy tốt trên nhiều bề mặt hơn chuột bi, nhưng trên mặt kính trong suốt thì có thể bị "mù".</div>
        `,
        session2: `
            <h4>2. Sáu thao tác chuột và cách luyện tập</h4>
            <p>Ninja chuột phím không dùng chuột loạn xạ. Bé cần thuộc lòng 6 thao tác và biết mỗi thao tác dùng khi nào:</p>
            <div class="table-scroll">
                <table class="lesson-table">
                    <tr><th>Thao tác</th><th>Cách làm</th><th>Kết quả</th><th>Ví dụ trên Windows 10</th></tr>
                    <tr><td><strong>1. Trỏ (Hover)</strong></td><td>Đưa con trỏ lên vật, chưa bấm</td><td>Hiện gợi ý (tooltip), đổi hình con trỏ</td><td>Trỏ vào nút X để đọc "Close"</td></tr>
                    <tr><td><strong>2. Nháy (Click)</strong></td><td>Bấm nút trái 1 lần</td><td>Chọn vật hoặc bấm nút</td><td>Chọn một biểu tượng trên Desktop</td></tr>
                    <tr><td><strong>3. Nháy đúp (Double-click)</strong></td><td>Bấm nút trái 2 lần thật nhanh</td><td>Mở tệp, thư mục, ứng dụng</td><td>Nháy đúp thư mục Documents để mở</td></tr>
                    <tr><td><strong>4. Nháy phải (Right-click)</strong></td><td>Bấm nút phải 1 lần</td><td>Mở menu ngữ cảnh</td><td>Nháy phải Desktop → Personalize</td></tr>
                    <tr><td><strong>5. Kéo thả (Drag &amp; Drop)</strong></td><td>Giữ nút trái, di chuyển, thả ra</td><td>Di chuyển vật hoặc chọn vùng</td><td>Kéo một tệp vào thư mục khác</td></tr>
                    <tr><td><strong>6. Cuộn (Scroll)</strong></td><td>Lăn con lăn lên/xuống</td><td>Cuộn trang, danh sách</td><td>Cuộn trang web dài</td></tr>
                </table>
            </div>

            <h4>2.1 Thực hành trên Windows 10: tinh chỉnh chuột</h4>
            <div class="win10-box">
                <span class="win10-tag">Thao tác Windows 10</span>
                <ol class="step-list">
                    <li>Bấm <span class="keycap">Win</span> + <span class="keycap">I</span> mở <strong>Settings</strong>, chọn <strong>Devices</strong> → <strong>Mouse</strong>.</li>
                    <li>Ở mục <em>Select your primary button</em>, bé thấy "Left". Nếu thuận tay trái, bé có thể đổi sang "Right" — lúc đó nút phải sẽ thành nút chính.</li>
                    <li>Kéo thanh <em>Cursor speed</em> sang phải để con trỏ chạy nhanh hơn. Bé hãy thử cảm giác mới rồi kéo về vị trí vừa tay.</li>
                    <li>Bật <em>Scroll inactive windows when I hover over them</em> để có thể cuộn trang của cửa sổ không cần bấm chọn trước.</li>
                    <li>Nhấn <strong>Additional mouse options</strong> để mở hộp thoại cổ điển, thử đổi con trỏ trong tab <strong>Pointers</strong>.</li>
                </ol>
            </div>

            <h4>2.2 Thực hành bàn phím: gõ văn bản có dấu</h4>
            <div class="win10-box">
                <span class="win10-tag">Thao tác Windows 10</span>
                <ol class="step-list">
                    <li>Mở <strong>Notepad</strong> bằng <span class="keycap">Win</span> + <span class="keycap">R</span>, gõ <code>notepad</code>, nhấn <span class="keycap">Enter</span>.</li>
                    <li>Gõ câu: <em>"Toi la coder nhi, toi dang hoc go phim muoi ngon."</em></li>
                    <li>Dùng <span class="keycap">Shift</span> + chữ cái để viết hoa chữ đầu câu. Dùng <span class="keycap">Backspace</span> để xóa ký tự bên trái, <span class="keycap">Delete</span> để xóa ký tự bên phải con trỏ.</li>
                    <li>Nhấn <span class="keycap">Ctrl</span> + <span class="keycap">Z</span> để hoàn tác (Undo) khi gõ nhầm. Nhấn <span class="keycap">Ctrl</span> + <span class="keycap">Y</span> để làm lại (Redo).</li>
                    <li>Nhấn <span class="keycap">Ctrl</span> + <span class="keycap">S</span> để lưu với tên <code>ChuotPhim.txt</code>.</li>
                </ol>
            </div>
            <div class="ok-box">🎯 <strong>Thử thách nhỏ:</strong> Mở <strong>On-Screen Keyboard</strong> (bàn phím ảo) bằng <span class="keycap">Win</span> + <span class="keycap">Ctrl</span> + <span class="keycap">O</span>. Bé hãy dùng chuột bấm các phím ảo để gõ tên mình — vừa luyện chuột vừa luyện phím!</div>

            <h4>2.3 Ba tổ hợp phím giúp bé bớt phụ thuộc vào chuột</h4>
            <div class="rich-grid">
                <div class="rich-card"><strong><span class="keycap">Alt</span> + <span class="keycap">Tab</span></strong><br>Chuyển nhanh giữa các cửa sổ đang mở mà không cần bấm vào thanh Taskbar.</div>
                <div class="rich-card"><strong><span class="keycap">Win</span> + <span class="keycap">D</span></strong><br>Thu nhỏ tất cả cửa sổ để nhìn thấy Desktop; bấm lần nữa để khôi phục.</div>
                <div class="rich-card"><strong><span class="keycap">Win</span> + <span class="keycap">E</span></strong><br>Mở File Explorer để quản lý tệp và thư mục.</div>
            </div>
        `,
        session3: `
            <h4>3. Tư thế ngồi chuẩn và bảo vệ đôi mắt</h4>
            <p>Một ninja giỏi không chỉ thao tác nhanh mà còn phải bảo vệ "vũ khí" của mình: đôi mắt, cổ tay và cột sống.</p>
            <ul>
                <li><strong>Khoảng cách:</strong> mắt cách màn hình khoảng <strong>50–70 cm</strong> (một cánh tay).</li>
                <li><strong>Độ cao:</strong> mép trên màn hình ngang hoặc thấp hơn tầm mắt một chút.</li>
                <li><strong>Cổ tay:</strong> giữ thẳng, không gập lên quá cao khi gõ phím.</li>
                <li><strong>Chân:</strong> đặt phẳng trên sàn, lưng tựa vào ghế.</li>
                <li><strong>Ánh sáng:</strong> phòng đủ sáng, tránh để màn hình đối diện cửa sổ gây chói.</li>
            </ul>
            <div class="note-box">👀 <strong>Quy tắc 20–20–20:</strong> Cứ mỗi <strong>20 phút</strong> nhìn màn hình, bé hãy nhìn ra xa <strong>20 feet</strong> (khoảng 6 mét) trong <strong>20 giây</strong>. Đây là bài tập giúp mắt giảm mỏi khi học lâu.</div>

            <h4>3.1 Bảng phím tắt "cứu nguy" khi chuột hỏng</h4>
            <div class="table-scroll">
                <table class="lesson-table">
                    <tr><th>Phím tắt</th><th>Công dụng</th></tr>
                    <tr><td><span class="keycap">Tab</span> / <span class="keycap">Shift</span>+<span class="keycap">Tab</span></td><td>Di chuyển điểm chọn giữa các nút, ô nhập liệu</td></tr>
                    <tr><td><span class="keycap">Enter</span></td><td>Bấm nút đang được chọn / xuống dòng</td></tr>
                    <tr><td><span class="keycap">Esc</span></td><td>Hủy hộp thoại, đóng menu đang mở</td></tr>
                    <tr><td><span class="keycap">Alt</span> + <span class="keycap">F4</span></td><td>Đóng cửa sổ đang hoạt động</td></tr>
                    <tr><td><span class="keycap">Win</span> + <span class="keycap">↑</span> / <span class="keycap">↓</span></td><td>Phóng to / thu nhỏ cửa sổ</td></tr>
                    <tr><td><span class="keycap">Ctrl</span> + <span class="keycap">Shift</span> + <span class="keycap">Esc</span></td><td>Mở Task Manager khi máy "đơ"</td></tr>
                </table>
            </div>

            <h4>3.2 Chẩn đoán sự cố thường gặp</h4>
            <div class="rich-grid">
                <div class="rich-card"><strong>🖱️ Chuột không di chuyển</strong><br>1) Kiểm tra dây/cổng USB, thử cổng khác. 2) Chuột không dây: thay pin, bật công tắc. 3) Khởi động lại máy để Windows nạp lại driver.</div>
                <div class="rich-card"><strong>⌨️ Gõ ra chữ in hoa liên tục</strong><br>Đèn <span class="keycap">Caps Lock</span> đang bật. Nhấn lại một lần để tắt. Nếu gõ tiếng Việt bị sai dấu, kiểm tra bộ gõ (ENG/VNM).</div>
                <div class="rich-card"><strong>🖥️ Màn hình nhấp nháy</strong><br>Kiểm tra dây tín hiệu (HDMI/VGA) đã cắm chắc chưa, thử giảm tần số quét trong Settings → System → Display → Advanced display settings.</div>
            </div>
            <div class="warn-box">⚠️ <strong>Đừng làm thế này:</strong> Không ấn mạnh vào màn hình, không để nước gần bàn phím, không kéo mạnh dây chuột khi đang cắm. Linh kiện rất dễ tổn thương!</div>

            <h4>3.3 Dự án nhỏ: "Bảng chỉ huy của Ninja"</h4>
            <p>Bé hãy làm một tấm bảng giấy nhỏ dán cạnh màn hình gồm: 6 thao tác chuột, 5 phím tắt quan trọng nhất với bé, và 3 quy tắc tư thế ngồi. Mỗi ngày dùng máy, bé tích một ô khi đã thực hiện đúng — sau 7 ngày bé sẽ thành Ninja Chuột Phím thật thụ!</p>
            <div class="vocab-row">
                <span class="vocab-chip"><b>Pixel</b> điểm ảnh</span>
                <span class="vocab-chip"><b>Resolution</b> độ phân giải</span>
                <span class="vocab-chip"><b>Refresh rate</b> tần số quét</span>
                <span class="vocab-chip"><b>DPI</b> độ nhạy chuột</span>
                <span class="vocab-chip"><b>Hover</b> trỏ</span>
                <span class="vocab-chip"><b>Drag &amp; drop</b> kéo thả</span>
                <span class="vocab-chip"><b>Context menu</b> menu ngữ cảnh</span>
            </div>
        `,
        tasks: [
            { id: "t4_1", text: "Thử thách chuột 60 giây: mở File Explorer, nháy đúp mở một thư mục, nháy phải vùng trống chọn New → Folder, kéo thả một tệp sang thư mục khác và cuộn danh sách. Ghi lại thời gian hoàn thành." },
            { id: "t4_2", text: "Mở Notepad và gõ một đoạn văn 3 câu có dấu tiếng Việt. Dùng Ctrl+S lưu thành tệp 'ChuotPhim.txt' trên Desktop, sau đó kiểm tra tệp đã xuất hiện." },
            { id: "t4_3", text: "Chỉ dùng bàn phím: Win+E mở File Explorer, Tab chuyển vùng, Enter mở thư mục, Alt+F4 đóng cửa sổ. Sau đó dùng Win+Shift+S chụp một vùng màn hình và lưu ảnh." }
        ],
        quiz: [
            { q: "Một điểm ảnh (pixel) trên màn hình là gì?", options: ["A. Một ô vuông nhỏ nhất tạo nên hình ảnh", "B. Một ứng dụng của Windows", "C. Một loại dây cáp", "D. Một phím trên bàn phím"], ans: 0, exp: "Pixel là đơn vị điểm ảnh nhỏ nhất; nhiều pixel ghép lại thành hình ảnh mà mắt nhìn thấy." },
            { q: "Độ phân giải 1920 × 1080 có nghĩa là gì?", options: ["A. Màn hình nặng 1920 gram", "B. Chiều ngang 1920 pixel và chiều dọc 1080 pixel", "C. Màn hình chạy 1920 giây", "D. Có 1920 ứng dụng"], ans: 1, exp: "Độ phân giải được tính bằng số pixel theo chiều ngang × chiều dọc." },
            { q: "Tần số quét 60 Hz cho biết điều gì?", options: ["A. Màn hình làm mới hình ảnh 60 lần mỗi giây", "B. Màn hình rộng 60 inch", "C. Màn hình tiêu thụ 60 W", "D. Có 60 màu"], ans: 0, exp: "Hz là số lần màn hình cập nhật hình ảnh trong một giây; 60 Hz giúp chuyển động mượt." },
            { q: "Muốn mở một thư mục trên Desktop, bé dùng thao tác nào?", options: ["A. Nháy phải một lần", "B. Nháy đúp nút trái", "C. Lăn con lăn", "D. Giữ phím Shift"], ans: 1, exp: "Nháy đúp (double-click) là thao tác chuẩn để mở tệp hoặc thư mục." },
            { q: "Nháy phải chuột thường dùng để làm gì?", options: ["A. Tắt máy ngay", "B. Mở menu ngữ cảnh với các lệnh phù hợp", "C. Xóa toàn bộ ổ đĩa", "D. Đổi mật khẩu"], ans: 1, exp: "Menu ngữ cảnh hiện ra các lệnh liên quan đến đối tượng bé vừa nháy phải." },
            { q: "Thao tác kéo thả (drag & drop) được thực hiện như thế nào?", options: ["A. Giữ nút trái, di chuyển rồi thả ra", "B. Bấm nút phải hai lần", "C. Lăn con lăn thật nhanh", "D. Nhấn giữ phím Esc"], ans: 0, exp: "Kéo thả = giữ nút trái trong lúc di chuyển đối tượng, sau đó nhả nút để thả." },
            { q: "DPI của chuột càng cao thì điều gì xảy ra?", options: ["A. Con trỏ di chuyển càng xa khi bé di chuột cùng một đoạn", "B. Chuột càng nặng", "C. Màn hình càng sáng", "D. Âm thanh càng to"], ans: 0, exp: "DPI là độ nhạy; DPI cao giúp con trỏ di chuyển nhanh và xa hơn." },
            { q: "Phím F5 thường có tác dụng gì trong trình duyệt web?", options: ["A. Tải lại trang (Refresh)", "B. Tắt máy", "C. Mở Notepad", "D. Xóa lịch sử"], ans: 0, exp: "F5 là phím chức năng dùng để tải lại trang web." },
            { q: "Đèn Caps Lock sáng có nghĩa là gì?", options: ["A. Bàn phím đã hỏng", "B. Chế độ gõ chữ in hoa đang bật", "C. Máy đang tắt", "D. Chuột đang sạc"], ans: 1, exp: "Caps Lock bật khiến các chữ cái gõ ra thành chữ in hoa." },
            { q: "Tổ hợp phím nào chuyển nhanh giữa các cửa sổ đang mở?", options: ["A. Alt + Tab", "B. Ctrl + P", "C. Win + L", "D. Shift + Delete"], ans: 0, exp: "Alt + Tab mở danh sách cửa sổ và cho phép chuyển đổi mà không cần chuột." }
        ]
    },

    // ==========================================
    // BÀI 05 — HỆ ĐIỀU HÀNH WINDOWS 10 LÀ GÌ?
    // ==========================================
    5: {
        id: 5,
        chapterId: 1,
        chapterTitle: "Chương 1 — Khám phá thế giới máy tính",
        title: "Hệ điều hành Windows 10 là gì?",
        badge: "Thị Trưởng Windows",
        desc: "Hiểu hệ điều hành như vị thị trưởng quản lý thành phố máy tính; phân biệt rõ hệ điều hành, ứng dụng và website, biết Windows 10 quản lý tài nguyên và tài khoản như thế nào.",
        session1: `
            <h4>1. Hệ điều hành — Vị thị trưởng của thành phố máy tính</h4>
            <p>Hãy tưởng tượng máy tính là một <strong>thành phố</strong>. Trong thành phố có nhà cửa, đường xá, kho bãi, công dân và rất nhiều hoạt động diễn ra cùng lúc. Nếu không có người điều hành, thành phố sẽ hỗn loạn: xe cộ đâm nhau, kho bãi tranh chấp, công dân không biết phải làm gì.</p>
            <p><strong>Hệ điều hành (Operating System — OS)</strong> chính là vị <em>thị trưởng</em> của thành phố đó. Windows 10 là hệ điều hành do Microsoft tạo ra, cài sẵn trên hàng trăm triệu máy tính trên thế giới.</p>
            <div class="rich-grid">
                <div class="rich-card"><strong>🏛️ Quản lý công dân</strong><br>Mỗi ứng dụng là một công dân. Thị trưởng cấp phép cho ứng dụng chạy, chia thời gian CPU và thu hồi khi ứng dụng bị treo.</div>
                <div class="rich-card"><strong>📦 Quản lý kho bãi</strong><br>Ổ cứng là kho chứa tệp. Hệ điều hành tổ chức thư mục, cấp phát dung lượng và bảo vệ dữ liệu.</div>
                <div class="rich-card"><strong>🛣️ Quản lý đường xá</strong><br>Bus, cổng USB, mạng Internet là các tuyến đường. Hệ điều hành điều phối dữ liệu đi đúng hướng.</div>
                <div class="rich-card"><strong>🛡️ Quản lý an ninh</strong><br>Tài khoản, mật khẩu, quyền truy cập tệp đều do hệ điều hành kiểm soát.</div>
            </div>

            <h4>1.1 Kiến trúc 4 tầng của một chiếc máy tính</h4>
            <div class="flow-row">
                <div class="flow-item"><b>👤 Người dùng</b><br>Bé bấm chuột, gõ phím</div>
                <div class="flow-arrow">➡️</div>
                <div class="flow-item"><b>🪟 Ứng dụng</b><br>Notepad, Paint, trò chơi</div>
                <div class="flow-arrow">➡️</div>
                <div class="flow-item"><b>🏛️ Hệ điều hành</b><br>Windows 10 (kernel + giao diện)</div>
                <div class="flow-arrow">➡️</div>
                <div class="flow-item"><b>⚙️ Phần cứng</b><br>CPU, RAM, ổ cứng, màn hình</div>
            </div>
            <p>Khi bé bấm nút "Lưu" trong Notepad, lệnh đi từ ứng dụng xuống hệ điều hành, rồi hệ điều hành mới ra lệnh cho ổ cứng ghi dữ liệu. Ứng dụng <strong>không được phép</strong> điều khiển phần cứng trực tiếp — nếu ai cũng làm vậy, máy sẽ loạn ngay!</p>

            <h4>1.2 Họ hàng nhà hệ điều hành</h4>
            <div class="table-scroll">
                <table class="lesson-table">
                    <tr><th>Thiết bị</th><th>Hệ điều hành</th><th>Nhà sản xuất</th></tr>
                    <tr><td>Máy tính để bàn / laptop</td><td>Windows 10, Windows 11</td><td>Microsoft</td></tr>
                    <tr><td>MacBook, iMac</td><td>macOS</td><td>Apple</td></tr>
                    <tr><td>Máy chủ, máy lập trình</td><td>Linux (Ubuntu, Fedora...)</td><td>Cộng đồng mã nguồn mở</td></tr>
                    <tr><td>Điện thoại Android</td><td>Android</td><td>Google</td></tr>
                    <tr><td>iPhone, iPad</td><td>iOS / iPadOS</td><td>Apple</td></tr>
                </table>
            </div>
            <div class="note-box">💡 <strong>Windows 10 có nhiều phiên bản:</strong> <em>Home</em> dành cho gia đình, <em>Pro</em> có thêm công cụ cho doanh nghiệp, <em>Education</em> cho trường học. Bé có thể kiểm tra phiên bản máy mình ở Buổi 2.</div>
        `,
        session2: `
            <h4>2. Windows 10 quản lý những gì?</h4>
            <div class="rich-grid">
                <div class="rich-card"><strong>⚙️ Tiến trình (Process)</strong><br>Mỗi ứng dụng đang chạy là một tiến trình. Task Manager cho bé xem tiến trình nào "ăn" CPU, RAM nhiều nhất.</div>
                <div class="rich-card"><strong>🧠 Bộ nhớ (Memory)</strong><br>Windows chia RAM cho các ứng dụng. Khi RAM đầy, máy chậm và có thể báo "Low memory".</div>
                <div class="rich-card"><strong>📁 Tệp và thư mục</strong><br>File Explorer là "bản đồ kho bãi" do Windows cung cấp để bé tìm, sao chép, di chuyển tệp.</div>
                <div class="rich-card"><strong>🔌 Thiết bị (Device)</strong><br>Chuột, bàn phím, máy in, tai nghe được Windows nhận diện qua <em>driver</em>.</div>
                <div class="rich-card"><strong>👥 Tài khoản (Account)</strong><br>Mỗi người dùng có tài khoản riêng, mật khẩu riêng và thư mục riêng.</div>
                <div class="rich-card"><strong>🛡️ Bảo mật</strong><br>Windows Defender quét virus, tường lửa chặn kết nối lạ, quyền truy cập được kiểm soát.</div>
            </div>

            <h4>2.1 Thực hành: kiểm tra phiên bản Windows</h4>
            <div class="win10-box">
                <span class="win10-tag">Thao tác Windows 10</span>
                <ol class="step-list">
                    <li>Nhấn <span class="keycap">Win</span> + <span class="keycap">R</span> để mở hộp thoại <strong>Run</strong>.</li>
                    <li>Gõ <code>winver</code> rồi nhấn <span class="keycap">Enter</span>. Một cửa sổ hiện ra ghi rõ phiên bản Windows và số build.</li>
                    <li>Ghi lại thông tin đó vào Notepad: ví dụ <em>Windows 10, Version 22H2, OS Build 19045</em>.</li>
                    <li>Mở <strong>Settings</strong> bằng <span class="keycap">Win</span> + <span class="keycap">I</span> → <strong>System</strong> → <strong>About</strong>. Bé sẽ thấy tên máy, bộ xử lý, RAM và phiên bản Windows.</li>
                    <li>Mở <strong>Task Manager</strong> bằng <span class="keycap">Ctrl</span> + <span class="keycap">Shift</span> + <span class="keycap">Esc</span>, xem danh sách các tiến trình đang chạy. Đó chính là các "công dân" mà Windows đang quản lý.</li>
                </ol>
            </div>

            <h4>2.2 Thực hành: tìm hiểu tài khoản và ổ đĩa</h4>
            <div class="win10-box">
                <span class="win10-tag">Thao tác Windows 10</span>
                <ol class="step-list">
                    <li>Mở <strong>Settings</strong> → <strong>Accounts</strong> → <strong>Your info</strong>. Xem tên tài khoản và loại tài khoản (Administrator hay Standard).</li>
                    <li>Mở <strong>File Explorer</strong> (<span class="keycap">Win</span> + <span class="keycap">E</span>), chọn <strong>This PC</strong>. Bé sẽ thấy các ổ đĩa: ổ C: (hệ thống), ổ D: (dữ liệu), và các thư mục Desktop, Documents, Downloads.</li>
                    <li>Nháy phải ổ C: → <strong>Properties</strong> để xem dung lượng còn trống. Đó là "kho bãi" mà Windows đang quản lý.</li>
                </ol>
            </div>
            <div class="warn-box">⚠️ <strong>Lưu ý an toàn:</strong> Không tự ý xóa tệp trong thư mục <code>C:\Windows</code> hay <code>Program Files</code>. Đó là nơi hệ điều hành và ứng dụng đặt "bộ máy" của mình.</div>
        `,
        session3: `
            <h4>3. Phân biệt Hệ điều hành — Ứng dụng — Website</h4>
            <p>Ba khái niệm này rất dễ nhầm. Hãy nhớ theo cách của một thành phố:</p>
            <div class="table-scroll">
                <table class="lesson-table">
                    <tr><th>Tiêu chí</th><th>Hệ điều hành</th><th>Ứng dụng</th><th>Website</th></tr>
                    <tr><td><strong>Là gì?</strong></td><td>Nền tảng quản lý toàn bộ máy</td><td>Phần mềm làm một việc cụ thể</td><td>Trang thông tin chạy trên Internet</td></tr>
                    <tr><td><strong>Ví dụ</strong></td><td>Windows 10, Android, iOS</td><td>Notepad, Paint, Calculator, game</td><td>google.com, youtube.com, wikipedia.org</td></tr>
                    <tr><td><strong>Cài ở đâu?</strong></td><td>Cài trên ổ cứng, chạy ngay khi bật máy</td><td>Cài trên máy hoặc tải từ Store</td><td>Không cài, chỉ cần trình duyệt</td></tr>
                    <tr><td><strong>Có cần Internet?</strong></td><td>Không bắt buộc</td><td>Thường không, trừ app online</td><td>Bắt buộc có mạng</td></tr>
                    <tr><td><strong>Ví von</strong></td><td>Thị trưởng thành phố</td><td>Một cửa hàng trong thành phố</td><td>Một chương trình truyền hình phát qua Internet</td></tr>
                </table>
            </div>

            <h4>3.1 Driver — Người phiên dịch của hệ điều hành</h4>
            <p>Mỗi thiết bị phần cứng nói một "ngôn ngữ" riêng. <strong>Driver</strong> là phần mềm nhỏ đóng vai trò phiên dịch viên, giúp Windows hiểu và điều khiển thiết bị đó. Khi cắm chuột mới vào mà chuột không chạy, rất có thể Windows chưa có driver phù hợp.</p>
            <div class="flow-row">
                <div class="flow-item"><b>🖱️ Thiết bị</b><br>Nói ngôn ngữ phần cứng</div>
                <div class="flow-arrow">↔️</div>
                <div class="flow-item"><b>🗣️ Driver</b><br>Phiên dịch hai chiều</div>
                <div class="flow-arrow">↔️</div>
                <div class="flow-item"><b>🪟 Windows</b><br>Hiểu và ra lệnh</div>
            </div>

            <h4>3.2 Vì sao hệ điều hành cần được cập nhật?</h4>
            <ul>
                <li><strong>Vá lỗi bảo mật:</strong> hacker luôn tìm ra lỗ hổng mới, bản cập nhật sẽ bịt lại.</li>
                <li><strong>Sửa lỗi phần mềm:</strong> những lỗi gây treo máy được khắc phục.</li>
                <li><strong>Hỗ trợ thiết bị mới:</strong> thêm driver cho chuột, máy in, tai nghe mới.</li>
                <li><strong>Tăng hiệu năng:</strong> Windows được tối ưu để chạy nhanh và tiết kiệm pin hơn.</li>
            </ul>
            <div class="ok-box">🎯 <strong>Suy nghĩ như kỹ sư:</strong> Nếu không có hệ điều hành, mỗi ứng dụng sẽ phải tự viết code để điều khiển màn hình, bàn phím, ổ cứng… Việc viết một trò chơi đơn giản sẽ mất hàng năm! Hệ điều hành giúp mọi lập trình viên tập trung vào sản phẩm của mình.</div>
            <div class="vocab-row">
                <span class="vocab-chip"><b>Operating System</b> hệ điều hành</span>
                <span class="vocab-chip"><b>Kernel</b> nhân hệ điều hành</span>
                <span class="vocab-chip"><b>Driver</b> trình điều khiển</span>
                <span class="vocab-chip"><b>Account</b> tài khoản</span>
                <span class="vocab-chip"><b>Process</b> tiến trình</span>
                <span class="vocab-chip"><b>Update</b> cập nhật</span>
            </div>
        `,
        tasks: [
            { id: "t5_1", text: "Mở hộp thoại Run (Win+R), gõ winver và ghi lại chính xác phiên bản Windows cùng số OS Build của máy bé." },
            { id: "t5_2", text: "Mở Settings → System → About, ghi lại tên máy, tên CPU, dung lượng RAM và phiên bản Windows vào Notepad, lưu thành 'ThongTinMay.txt'." },
            { id: "t5_3", text: "Phân loại 12 thứ sau vào 3 nhóm Hệ điều hành / Ứng dụng / Website: Windows 10, Paint, YouTube, Android, Word, Google, iOS, Calculator, Facebook, Ubuntu, Notepad, Wikipedia." }
        ],
        quiz: [
            { q: "Hệ điều hành được ví như gì trong một thành phố?", options: ["A. Vị thị trưởng điều hành mọi hoạt động", "B. Một ngôi nhà bỏ trống", "C. Một chiếc xe buýt", "D. Một cửa hàng bánh mì"], ans: 0, exp: "Hệ điều hành quản lý tài nguyên, tiến trình, tệp và người dùng như thị trưởng quản lý thành phố." },
            { q: "Đâu là hệ điều hành?", options: ["A. Microsoft Word", "B. Windows 10", "C. Google Chrome", "D. YouTube"], ans: 1, exp: "Windows 10 là hệ điều hành; Word và Chrome là ứng dụng, YouTube là website." },
            { q: "Đâu là ứng dụng (application)?", options: ["A. macOS", "B. Android", "C. Paint", "D. Ubuntu"], ans: 2, exp: "Paint là ứng dụng vẽ tranh; các lựa chọn còn lại là hệ điều hành." },
            { q: "Đâu là website?", options: ["A. Wikipedia", "B. Windows 10", "C. Notepad", "D. iOS"], ans: 0, exp: "Wikipedia là website cần trình duyệt và Internet để truy cập." },
            { q: "Thành phần nào của hệ điều hành là 'nhân' điều khiển phần cứng?", options: ["A. Desktop", "B. Kernel", "C. Taskbar", "D. Recycle Bin"], ans: 1, exp: "Kernel là nhân hệ điều hành, quản lý tài nguyên và giao tiếp với phần cứng." },
            { q: "Driver có vai trò gì?", options: ["A. Trang trí màn hình", "B. Giúp hệ điều hành hiểu và điều khiển thiết bị phần cứng", "C. Tăng dung lượng ổ cứng", "D. Tạo mật khẩu"], ans: 1, exp: "Driver là phần mềm phiên dịch giữa hệ điều hành và thiết bị." },
            { q: "Lệnh winver dùng để làm gì?", options: ["A. Mở Task Manager", "B. Xem phiên bản Windows đang dùng", "C. Tắt máy", "D. Đổi hình nền"], ans: 1, exp: "winver hiển thị phiên bản Windows và số build hiện tại." },
            { q: "Mỗi ứng dụng đang chạy trong Windows được gọi là gì?", options: ["A. Một tiến trình (process)", "B. Một ổ đĩa", "C. Một driver", "D. Một tài khoản"], ans: 0, exp: "Tiến trình là một chương trình đang được hệ điều hành thực thi." },
            { q: "Vì sao hệ điều hành cần được cập nhật thường xuyên?", options: ["A. Để máy chạy chậm hơn", "B. Để vá lỗ hổng bảo mật và sửa lỗi", "C. Để xóa hết tệp", "D. Để tăng giá máy"], ans: 1, exp: "Cập nhật giúp vá bảo mật, sửa lỗi và hỗ trợ thiết bị mới." },
            { q: "Nếu không có hệ điều hành, điều gì sẽ xảy ra?", options: ["A. Mọi ứng dụng phải tự điều khiển phần cứng, rất khó để lập trình", "B. Máy tính chạy nhanh hơn", "C. Ứng dụng tự động xuất hiện", "D. Không ảnh hưởng gì"], ans: 0, exp: "Hệ điều hành cung cấp nền tảng chung để ứng dụng không phải tự quản lý phần cứng." }
        ]
    },

    // ==========================================
    // BÀI 06 — KHỞI ĐỘNG, ĐĂNG NHẬP VÀ TẮT MÁY
    // ==========================================
    6: {
        id: 6,
        chapterId: 1,
        chapterTitle: "Chương 1 — Khám phá thế giới máy tính",
        title: "Khởi động, Đăng nhập và Tắt máy chuẩn Win 10",
        badge: "Bậc Thầy Khởi Động",
        desc: "Nắm vững quy trình bật máy an toàn, hiểu Sleep – Restart – Shut down khác nhau thế nào và biết xử lý khi ứng dụng treo mà không làm hỏng máy.",
        session1: `
            <h4>1. Hành trình từ lúc bấm nút nguồn đến Desktop</h4>
            <p>Khi bé bấm nút nguồn, máy tính không "thức dậy" ngay lập tức. Nó phải trải qua một hành trình 5 bước rất kỳ diệu:</p>
            <div class="flow-row">
                <div class="flow-item"><b>① Nguồn điện</b><br>Bộ nguồn cấp điện cho bo mạch chủ</div>
                <div class="flow-arrow">➡️</div>
                <div class="flow-item"><b>② POST / UEFI</b><br>Kiểm tra CPU, RAM, bàn phím, ổ cứng</div>
                <div class="flow-arrow">➡️</div>
                <div class="flow-item"><b>③ Tìm ổ khởi động</b><br>Xác định Windows nằm ở đâu</div>
                <div class="flow-arrow">➡️</div>
                <div class="flow-item"><b>④ Nạp Windows</b><br>Kernel và driver được khởi động</div>
                <div class="flow-arrow">➡️</div>
                <div class="flow-item"><b>⑤ Đăng nhập</b><br>Màn hình khóa → Desktop sẵn sàng</div>
            </div>
            <p><strong>POST</strong> (Power-On Self-Test) là bài kiểm tra sức khỏe đầu tiên. Nếu RAM bị lỏng hoặc bàn phím không cắm, máy sẽ phát tiếng bíp và báo lỗi trước khi Windows kịp xuất hiện.</p>

            <h4>1.1 Đăng nhập, khóa máy và đăng xuất</h4>
            <div class="rich-grid">
                <div class="rich-card"><strong>🔐 Đăng nhập (Sign in)</strong><br>Nhập mật khẩu hoặc PIN để vào tài khoản của mình. Mỗi người có Desktop và tệp riêng.</div>
                <div class="rich-card"><strong>🔒 Khóa máy (Lock)</strong><br>Màn hình khóa ngay nhưng mọi ứng dụng vẫn chạy. Dùng khi rời bàn vài phút.</div>
                <div class="rich-card"><strong>🚪 Đăng xuất (Sign out)</strong><br>Đóng toàn bộ ứng dụng của tài khoản hiện tại, trở về màn hình đăng nhập.</div>
                <div class="rich-card"><strong>🔄 Chuyển tài khoản</strong><br>Để người khác đăng nhập mà không đóng ứng dụng của bé.</div>
            </div>
            <div class="note-box">💡 <strong>Mẹo bảo mật:</strong> Khi rời khỏi máy tính, bé hãy nhấn <span class="keycap">Win</span> + <span class="keycap">L</span> để khóa máy ngay. Đây là thói quen của mọi lập trình viên chuyên nghiệp.</div>

            <h4>1.2 Năm chế độ nguồn của Windows 10</h4>
            <div class="table-scroll">
                <table class="lesson-table">
                    <tr><th>Chế độ</th><th>Máy làm gì?</th><th>Khi nào dùng?</th><th>Ứng dụng còn mở?</th></tr>
                    <tr><td><strong>Sleep</strong> (Ngủ)</td><td>Tạm nghỉ, vẫn tiêu hao ít điện</td><td>Rời máy vài phút, quay lại làm tiếp</td><td>Còn nguyên</td></tr>
                    <tr><td><strong>Restart</strong> (Khởi động lại)</td><td>Tắt rồi bật lại ngay</td><td>Cài đặt xong, máy chậm, ứng dụng treo</td><td>Bị đóng</td></tr>
                    <tr><td><strong>Shut down</strong> (Tắt máy)</td><td>Đóng mọi thứ và tắt nguồn</td><td>Kết thúc buổi học, cất máy</td><td>Bị đóng</td></tr>
                    <tr><td><strong>Hibernate</strong> (Ngủ đông)</td><td>Lưu trạng thái vào ổ cứng, tắt điện hoàn toàn</td><td>Laptop sắp hết pin, rời máy lâu</td><td>Được lưu lại</td></tr>
                    <tr><td><strong>Sign out</strong> (Đăng xuất)</td><td>Đóng phiên làm việc của tài khoản</td><td>Chuyển sang người dùng khác</td><td>Bị đóng</td></tr>
                </table>
            </div>
            <div class="warn-box">⚠️ <strong>Tuyệt đối tránh:</strong> Rút phích cắm hoặc giữ nút nguồn khi máy đang chạy. Dữ liệu đang ghi dở có thể bị hỏng, Windows có thể không khởi động được lần sau. Chỉ giữ nút nguồn 10 giây khi máy đã treo hoàn toàn và không còn cách nào khác.</div>
        `,
        session2: `
            <h4>2. Quy trình bật – tắt máy chuẩn</h4>
            <div class="win10-box">
                <span class="win10-tag">Thao tác Windows 10</span>
                <ol class="step-list">
                    <li><strong>Bật máy:</strong> nhấn nút nguồn một lần, chờ đèn nguồn sáng. Không bấm liên tục.</li>
                    <li><strong>Chờ POST:</strong> vài giây đầu máy kiểm tra phần cứng. Bé không cần làm gì.</li>
                    <li><strong>Đăng nhập:</strong> nhập mật khẩu hoặc PIN. Nếu có nhiều tài khoản, chọn đúng tên của mình.</li>
                    <li><strong>Làm việc:</strong> mở ứng dụng, lưu tệp thường xuyên bằng <span class="keycap">Ctrl</span> + <span class="keycap">S</span>.</li>
                    <li><strong>Khóa máy khi rời bàn:</strong> nhấn <span class="keycap">Win</span> + <span class="keycap">L</span>.</li>
                    <li><strong>Tắt máy:</strong> bấm <strong>Start</strong> → biểu tượng <strong>Power</strong> → <strong>Shut down</strong>. Chờ màn hình tắt hẳn rồi mới rút điện.</li>
                </ol>
            </div>

            <h4>2.1 Thực hành: menu nguồn và màn hình khóa</h4>
            <div class="win10-box">
                <span class="win10-tag">Thao tác Windows 10</span>
                <ol class="step-list">
                    <li>Bấm <strong>Start</strong>, quan sát biểu tượng nguồn ở góc trái dưới menu. Bấm vào đó, bé sẽ thấy <em>Sleep</em>, <em>Shut down</em> và <em>Restart</em>.</li>
                    <li>Nhấn <span class="keycap">Ctrl</span> + <span class="keycap">Alt</span> + <span class="keycap">Delete</span> để mở màn hình bảo mật, nơi có các lựa chọn <em>Lock</em>, <em>Switch user</em>, <em>Sign out</em>, <em>Task Manager</em>.</li>
                    <li>Nhấn <span class="keycap">Win</span> + <span class="keycap">L</span> để khóa máy, sau đó đăng nhập lại bằng mật khẩu/PIN của bé.</li>
                    <li>Mở <strong>Settings</strong> → <strong>Accounts</strong> → <strong>Sign-in options</strong> để xem các cách đăng nhập: Password, PIN, Picture password.</li>
                    <li>Mở <strong>Settings</strong> → <strong>System</strong> → <strong>Power &amp; sleep</strong> để xem thời gian máy tự tắt màn hình và tự ngủ.</li>
                </ol>
            </div>
            <div class="ok-box">🎯 <strong>Thử nghiệm nhỏ:</strong> Đặt thời gian "Screen" thành 1 phút, ngồi yên và quan sát màn hình tắt. Sau đó đặt lại 10 phút để tiết kiệm điện mà không bị gián đoạn học tập.</div>

            <h4>2.2 Phân biệt Restart và Shut down</h4>
            <p>Nhiều bạn nghĩ hai lệnh này giống nhau. Thực ra chúng khác nhau ở một điểm rất quan trọng:</p>
            <ul>
                <li><strong>Restart:</strong> đóng mọi thứ, tắt các tiến trình, rồi khởi động lại từ đầu. Các bản cập nhật và thay đổi hệ thống được áp dụng đầy đủ.</li>
                <li><strong>Shut down:</strong> tắt máy hoàn toàn. Nếu Windows bật <em>Fast Startup</em>, một phần trạng thái được lưu lại để lần sau bật nhanh hơn — vì thế đôi khi "tắt rồi bật" không sạch bằng Restart.</li>
            </ul>
            <div class="note-box">💡 <strong>Khi nào chọn gì?</strong> Cài driver hoặc cập nhật Windows → <strong>Restart</strong>. Hết giờ học, cất máy → <strong>Shut down</strong>. Rời bàn 5 phút → <strong>Sleep</strong>. Rời bàn cả tiếng, laptop sắp hết pin → <strong>Hibernate</strong>.</div>
        `,
        session3: `
            <h4>3. Khi ứng dụng "đơ" — Xử lý như kỹ sư</h4>
            <p>Ứng dụng treo (Not Responding) là chuyện bình thường. Điều quan trọng là bé phản ứng đúng thứ tự, tránh mất dữ liệu:</p>
            <ol class="step-list">
                <li><strong>Chờ 10–15 giây:</strong> đôi khi ứng dụng chỉ đang xử lý một tác vụ nặng.</li>
                <li><strong>Lưu phần việc đang làm</strong> nếu vẫn bấm được (Ctrl+S).</li>
                <li><strong>Mở Task Manager</strong> bằng <span class="keycap">Ctrl</span> + <span class="keycap">Shift</span> + <span class="keycap">Esc</span>, chọn ứng dụng bị treo → <strong>End task</strong>.</li>
                <li><strong>Mở lại ứng dụng</strong> và kiểm tra tệp đã lưu. Nếu ứng dụng liên tục treo, hãy Restart máy.</li>
                <li><strong>Nếu cả màn hình đơ:</strong> thử <span class="keycap">Ctrl</span> + <span class="keycap">Alt</span> + <span class="keycap">Delete</span>; nếu không được, nhấn giữ nút nguồn 10 giây (biện pháp cuối cùng).</li>
            </ol>
            <div class="warn-box">⚠️ <strong>Đừng tắt máy bằng nút nguồn khi Windows đang cập nhật.</strong> Bé có thể thấy dòng "Do not turn off your computer". Hãy kiên nhẫn chờ, việc tắt ngang có thể khiến Windows hỏng và phải cài lại.</div>

            <h4>3.1 Màn hình xanh (Blue Screen) là gì?</h4>
            <p>Khi Windows gặp lỗi nghiêm trọng không thể tự phục hồi, nó hiện màn hình xanh (BSOD) kèm mã lỗi và tự khởi động lại. Bé nên chụp lại mã lỗi bằng điện thoại rồi nhờ người lớn kiểm tra. Đừng hoảng sợ — đó là cách hệ điều hành bảo vệ dữ liệu khỏi bị hỏng thêm.</p>

            <h4>3.2 Góc tư duy: Vì sao thứ tự khởi động lại quan trọng?</h4>
            <p>Hãy tưởng tượng bé đang viết dở một bức thư và ai đó giật tờ giấy đi. Restart đúng cách giống như việc bé cất thư vào ngăn kéo trước khi rời bàn. Hệ điều hành cần thời gian đóng tệp, ghi nhớ cài đặt và tắt các tiến trình an toàn. <strong>Kiên nhẫn 30 giây</strong> có thể cứu bé khỏi mất hàng giờ làm việc.</p>
            <div class="vocab-row">
                <span class="vocab-chip"><b>Boot</b> khởi động</span>
                <span class="vocab-chip"><b>POST</b> kiểm tra phần cứng</span>
                <span class="vocab-chip"><b>UEFI/BIOS</b> chương trình khởi động</span>
                <span class="vocab-chip"><b>Sign in</b> đăng nhập</span>
                <span class="vocab-chip"><b>Lock</b> khóa máy</span>
                <span class="vocab-chip"><b>Restart</b> khởi động lại</span>
                <span class="vocab-chip"><b>End task</b> kết thúc tác vụ</span>
            </div>
        `,
        tasks: [
            { id: "t6_1", text: "Thực hiện đúng quy trình: khóa máy bằng Win+L, đăng nhập lại, sau đó Restart máy và bấm giờ xem mất bao nhiêu giây để trở lại Desktop." },
            { id: "t6_2", text: "Mở Task Manager (Ctrl+Shift+Esc), quan sát các ứng dụng đang chạy, chọn một ứng dụng không cần thiết và bấm End task. Ghi lại điều gì xảy ra." },
            { id: "t6_3", text: "Vẽ sơ đồ 5 bước khởi động máy ra giấy và viết 3 lý do vì sao không được rút điện/giữ nút nguồn khi máy đang chạy." }
        ],
        quiz: [
            { q: "Bước nào kiểm tra phần cứng ngay sau khi bật máy?", options: ["A. POST (Power-On Self-Test)", "B. Đăng nhập", "C. Mở Notepad", "D. Kết nối Internet"], ans: 0, exp: "POST kiểm tra CPU, RAM, bàn phím và các thiết bị cần thiết trước khi nạp hệ điều hành." },
            { q: "Khi rời bàn vài phút, nên chọn chế độ nào?", options: ["A. Shut down", "B. Sleep", "C. Xóa tài khoản", "D. Rút điện"], ans: 1, exp: "Sleep giữ nguyên ứng dụng và tiêu hao ít điện, phù hợp khi rời bàn thời gian ngắn." },
            { q: "Restart khác Shut down ở điểm nào?", options: ["A. Restart tắt rồi bật lại ngay, Shut down tắt hẳn", "B. Restart không tắt ứng dụng", "C. Shut down nhanh hơn", "D. Không có gì khác"], ans: 0, exp: "Restart khởi động lại hệ thống ngay; Shut down tắt máy hoàn toàn." },
            { q: "Tổ hợp phím nào khóa máy nhanh?", options: ["A. Win + L", "B. Ctrl + C", "C. Alt + F4", "D. Win + E"], ans: 0, exp: "Win + L khóa màn hình ngay lập tức." },
            { q: "Khi một ứng dụng hiện 'Not Responding', việc đầu tiên nên làm là gì?", options: ["A. Rút điện ngay", "B. Chờ 10–15 giây và thử lưu dữ liệu", "C. Xóa ổ C", "D. Cài lại Windows"], ans: 1, exp: "Kiên nhẫn chờ và lưu dữ liệu an toàn trước khi can thiệp mạnh." },
            { q: "Công cụ nào dùng để kết thúc một ứng dụng bị treo?", options: ["A. Task Manager", "B. Paint", "C. Calculator", "D. File Explorer"], ans: 0, exp: "Task Manager cho phép chọn ứng dụng và bấm End task." },
            { q: "Hibernate khác Sleep ở điểm nào?", options: ["A. Hibernate lưu trạng thái vào ổ cứng và tắt điện hoàn toàn", "B. Hibernate nhanh hơn", "C. Hibernate chỉ dành cho máy bàn", "D. Không khác gì"], ans: 0, exp: "Hibernate ghi trạng thái RAM xuống ổ cứng nên không tiêu hao điện khi chờ." },
            { q: "Vì sao không nên giữ nút nguồn khi máy đang chạy bình thường?", options: ["A. Có thể làm hỏng dữ liệu và hệ điều hành", "B. Máy sẽ sáng hơn", "C. Làm tăng dung lượng RAM", "D. Không có hại gì"], ans: 0, exp: "Tắt ngang có thể khiến tệp đang ghi bị hỏng và Windows không khởi động được." },
            { q: "Màn hình xanh (BSOD) thường xuất hiện khi nào?", options: ["A. Khi Windows gặp lỗi nghiêm trọng không tự phục hồi", "B. Khi mở Notepad", "C. Khi tắt máy đúng cách", "D. Khi cắm chuột"], ans: 0, exp: "BSOD là cơ chế bảo vệ khi hệ điều hành gặp lỗi nghiêm trọng." },
            { q: "Sau khi cài xong một bản cập nhật Windows, bé nên làm gì?", options: ["A. Restart máy để áp dụng thay đổi", "B. Rút điện", "C. Xóa tệp cài đặt", "D. Tắt màn hình"], ans: 0, exp: "Restart giúp các thay đổi hệ thống được áp dụng đầy đủ." }
        ]
    },

    // ==========================================
    // BÀI 07 — LÀM QUEN VỚI CỬA SỔ ỨNG DỤNG VÀ MENU
    // ==========================================
    7: {
        id: 7,
        chapterId: 1,
        chapterTitle: "Chương 1 — Khám phá thế giới máy tính",
        title: "Làm quen với Cửa sổ ứng dụng và Menu",
        badge: "Ảo Thuật Gia Cửa Sổ",
        desc: "Đọc hiểu 'cơ thể' của một cửa sổ Windows 10, điều khiển thu nhỏ – phóng to – snap – đóng, và dùng menu, hộp thoại để ra lệnh cho ứng dụng.",
        session1: `
            <h4>1. Giải phẫu một cửa sổ ứng dụng</h4>
            <p>Mỗi ứng dụng khi mở ra đều nằm trong một <strong>cửa sổ (window)</strong>. Cửa sổ giống như một căn phòng riêng: có biển tên, cửa ra vào, công tắc đèn và bàn làm việc. Bé hãy nhìn vào một cửa sổ Notepad và nhận diện 6 bộ phận:</p>
            <div class="rich-grid">
                <div class="rich-card"><strong>① Thanh tiêu đề (Title bar)</strong><br>Hiển thị tên ứng dụng và tên tệp đang mở. Kéo thanh này để di chuyển cửa sổ.</div>
                <div class="rich-card"><strong>② Nút điều khiển</strong><br>Góc phải trên: <em>—</em> thu nhỏ, <em>□</em> phóng to/khôi phục, <em>✕</em> đóng.</div>
                <div class="rich-card"><strong>③ Thanh menu</strong><br>Chứa các nhóm lệnh: File, Edit, Format, View, Help… Bấm để mở menu xuống.</div>
                <div class="rich-card"><strong>④ Thanh công cụ / Ribbon</strong><br>Nơi các lệnh hay dùng được xếp thành nút bấm có biểu tượng.</div>
                <div class="rich-card"><strong>⑤ Vùng làm việc</strong><br>Phần lớn nhất — nơi bé gõ chữ, vẽ, xem ảnh hoặc chơi game.</div>
                <div class="rich-card"><strong>⑥ Thanh trạng thái &amp; thanh cuộn</strong><br>Hiển thị thông tin ở đáy và giúp cuộn nội dung khi dài hơn cửa sổ.</div>
            </div>
            <div class="note-box">💡 <strong>Mẹo nhận biết:</strong> Cửa sổ đang hoạt động có thanh tiêu đề sáng hơn và nút điều khiển rõ hơn. Chỉ một cửa sổ nhận bàn phím tại một thời điểm — đó là cửa sổ <em>active</em>.</div>

            <h4>1.2 Bốn trạng thái của cửa sổ</h4>
            <div class="table-scroll">
                <table class="lesson-table">
                    <tr><th>Trạng thái</th><th>Hình dạng</th><th>Cách vào</th></tr>
                    <tr><td><strong>Bình thường (Normal)</strong></td><td>Cửa sổ vừa phải, có thể kéo di chuyển</td><td>Trạng thái mặc định khi mở</td></tr>
                    <tr><td><strong>Thu nhỏ (Minimized)</strong></td><td>Biến mất khỏi màn hình, nằm trên Taskbar</td><td>Bấm nút <em>—</em></td></tr>
                    <tr><td><strong>Phóng to (Maximized)</strong></td><td>Chiếm toàn bộ màn hình</td><td>Bấm nút <em>□</em> hoặc nháy đúp thanh tiêu đề</td></tr>
                    <tr><td><strong>Snap (chia đôi)</strong></td><td>Chiếm nửa trái hoặc nửa phải màn hình</td><td>Kéo cửa sổ vào sát mép hoặc <span class="keycap">Win</span> + <span class="keycap">←</span>/<span class="keycap">→</span></td></tr>
                </table>
            </div>

            <h4>1.3 Menu và hộp thoại (Dialog)</h4>
            <p><strong>Menu</strong> là danh sách lệnh. Có 4 loại menu bé sẽ gặp:</p>
            <ul>
                <li><strong>Menu thanh (Menu bar):</strong> File / Edit / View… ở đầu cửa sổ.</li>
                <li><strong>Menu ngữ cảnh:</strong> hiện khi nháy phải, chứa lệnh liên quan đến thứ vừa bấm.</li>
                <li><strong>Menu hamburger (☰):</strong> ba gạch ngang, thường ở ứng dụng hiện đại.</li>
                <li><strong>Menu Start:</strong> menu lớn nhất Windows, chứa ứng dụng và nút nguồn.</li>
            </ul>
            <p><strong>Hộp thoại (Dialog box)</strong> là cửa sổ nhỏ hỏi bé một lựa chọn, ví dụ "Bạn có muốn lưu thay đổi không?". Hộp thoại thường có nút <strong>OK</strong>, <strong>Cancel</strong> và đôi khi <strong>Apply</strong>.</p>
        `,
        session2: `
            <h4>2. Thực hành: mở, sắp xếp và đóng cửa sổ</h4>
            <div class="win10-box">
                <span class="win10-tag">Thao tác Windows 10</span>
                <ol class="step-list">
                    <li>Mở đồng thời 3 ứng dụng: <strong>Notepad</strong> (Win+R → notepad), <strong>Calculator</strong> và <strong>Paint</strong>.</li>
                    <li>Bấm vào từng cửa sổ để quan sát thanh tiêu đề sáng lên. Đó là cửa sổ đang active.</li>
                    <li>Với Notepad: bấm nút <em>—</em> để thu nhỏ, rồi bấm biểu tượng Notepad trên Taskbar để mở lại.</li>
                    <li>Với Calculator: bấm nút <em>□</em> để phóng to, bấm lần nữa để khôi phục kích thước cũ.</li>
                    <li>Với Paint: kéo thanh tiêu đề vào sát mép trái màn hình để <strong>snap</strong> nửa trái. Kéo Calculator vào mép phải để snap nửa phải.</li>
                    <li>Nhấn <span class="keycap">Alt</span> + <span class="keycap">Tab</span> để chuyển qua lại giữa 3 cửa sổ. Nhấn <span class="keycap">Win</span> + <span class="keycap">Tab</span> để xem Task View.</li>
                    <li>Đóng từng cửa sổ bằng nút <em>✕</em> hoặc <span class="keycap">Alt</span> + <span class="keycap">F4</span>.</li>
                </ol>
            </div>

            <h4>2.1 Thực hành: menu của Notepad</h4>
            <div class="win10-box">
                <span class="win10-tag">Thao tác Windows 10</span>
                <ol class="step-list">
                    <li>Mở Notepad, gõ vài dòng chữ. Quan sát thanh tiêu đề ghi <em>Untitled - Notepad</em>.</li>
                    <li>Bấm menu <strong>File</strong> → <strong>Save as…</strong>, lưu tệp tên <code>Menu.txt</code>. Thanh tiêu đề đổi thành <em>Menu.txt - Notepad</em>.</li>
                    <li>Mở menu <strong>Edit</strong>, thử <strong>Undo</strong> (Ctrl+Z), <strong>Cut</strong> (Ctrl+X), <strong>Copy</strong> (Ctrl+C), <strong>Paste</strong> (Ctrl+V).</li>
                    <li>Mở menu <strong>Format</strong>, bật/tắt <strong>Word Wrap</strong> và <strong>Font…</strong> để đổi font chữ.</li>
                    <li>Mở menu <strong>View</strong> → <strong>Status Bar</strong> để bật thanh trạng thái. Quan sát số dòng, số cột hiển thị ở đáy.</li>
                </ol>
            </div>
            <div class="ok-box">🎯 <strong>Thử thách phối hợp:</strong> Mở Notepad bên trái và Calculator bên phải. Gõ phép tính <code>125 × 48</code> vào Calculator, ghi kết quả vào Notepad, lưu tệp. Bé vừa dùng 2 cửa sổ cùng lúc — đó chính là <strong>đa nhiệm</strong>!</div>

            <h4>2.2 Các phím tắt quản lý cửa sổ</h4>
            <div class="table-scroll">
                <table class="lesson-table">
                    <tr><th>Phím tắt</th><th>Công dụng</th></tr>
                    <tr><td><span class="keycap">Alt</span> + <span class="keycap">Tab</span></td><td>Chuyển nhanh giữa các cửa sổ</td></tr>
                    <tr><td><span class="keycap">Win</span> + <span class="keycap">Tab</span></td><td>Mở Task View (ảnh thu nhỏ tất cả cửa sổ)</td></tr>
                    <tr><td><span class="keycap">Win</span> + <span class="keycap">←</span> / <span class="keycap">→</span></td><td>Snap cửa sổ sang nửa trái / phải</td></tr>
                    <tr><td><span class="keycap">Win</span> + <span class="keycap">↑</span> / <span class="keycap">↓</span></td><td>Phóng to / khôi phục / thu nhỏ</td></tr>
                    <tr><td><span class="keycap">Win</span> + <span class="keycap">D</span></td><td>Thu nhỏ tất cả để xem Desktop</td></tr>
                    <tr><td><span class="keycap">Alt</span> + <span class="keycap">F4</span></td><td>Đóng cửa sổ đang active</td></tr>
                </table>
            </div>
        `,
        session3: `
            <h4>3. Làm việc đa nhiệm thông minh</h4>
            <p>Một lập trình viên giỏi không mở 20 cửa sổ cùng lúc. Bé hãy dùng quy tắc <strong>3 cửa sổ</strong>:</p>
            <div class="flow-row">
                <div class="flow-item"><b>📖 1. Nguồn thông tin</b><br>Trang web hướng dẫn hoặc tài liệu</div>
                <div class="flow-arrow">➡️</div>
                <div class="flow-item"><b>🛠️ 2. Nơi làm việc</b><br>Notepad, Paint hoặc trình soạn code</div>
                <div class="flow-arrow">➡️</div>
                <div class="flow-item"><b>📁 3. Nơi lưu trữ</b><br>File Explorer để lưu và kiểm tra tệp</div>
            </div>
            <p>Ba cửa sổ này snap trái – phải hoặc chồng lên nhau hợp lý sẽ giúp bé không bị lạc. Khi xong việc, đóng những cửa sổ không cần để giải phóng RAM.</p>

            <h4>3.1 Điều hướng bằng bàn phím trong menu</h4>
            <ul>
                <li><strong><span class="keycap">Alt</span> + chữ cái gạch chân:</strong> mở menu trực tiếp, ví dụ <span class="keycap">Alt</span> + <span class="keycap">F</span> mở menu File.</li>
                <li><strong>Phím mũi tên:</strong> di chuyển giữa các mục trong menu.</li>
                <li><strong><span class="keycap">Enter</span>:</strong> chọn mục đang sáng.</li>
                <li><strong><span class="keycap">Esc</span>:</strong> đóng menu mà không chọn gì.</li>
                <li><strong><span class="keycap">Tab</span>:</strong> chuyển giữa các nút trong hộp thoại.</li>
            </ul>

            <h4>3.2 Chẩn đoán lỗi cửa sổ thường gặp</h4>
            <div class="rich-grid">
                <div class="rich-card"><strong>🪟 Cửa sổ biến mất</strong><br>Bấm biểu tượng ứng dụng trên Taskbar để khôi phục, hoặc <span class="keycap">Alt</span> + <span class="keycap">Tab</span>.</div>
                <div class="rich-card"><strong>📏 Cửa sổ bị kéo ra ngoài màn hình</strong><br>Chọn cửa sổ rồi nhấn <span class="keycap">Win</span> + <span class="keycap">↑</span> để đưa về chính giữa.</div>
                <div class="rich-card"><strong>⏳ Cửa sổ không phản hồi</strong><br>Chờ vài giây, nếu vẫn đơ thì mở Task Manager → End task.</div>
                <div class="rich-card"><strong>🔒 Không bấm được nút nào</strong><br>Có thể đang có hộp thoại ẩn phía sau. Nhấn <span class="keycap">Esc</span> hoặc <span class="keycap">Alt</span> + <span class="keycap">Tab</span> để tìm.</div>
            </div>
            <div class="vocab-row">
                <span class="vocab-chip"><b>Window</b> cửa sổ</span>
                <span class="vocab-chip"><b>Title bar</b> thanh tiêu đề</span>
                <span class="vocab-chip"><b>Menu bar</b> thanh menu</span>
                <span class="vocab-chip"><b>Dialog</b> hộp thoại</span>
                <span class="vocab-chip"><b>Snap</b> chia đôi màn hình</span>
                <span class="vocab-chip"><b>Task View</b> xem đa nhiệm</span>
            </div>
        `,
        tasks: [
            { id: "t7_1", text: "Mở 3 ứng dụng Notepad, Calculator và Paint. Dùng Win+← và Win+→ để snap Notepad sang trái, Calculator sang phải; ghi lại cảm giác so với việc kéo chuột." },
            { id: "t7_2", text: "Chỉ dùng bàn phím: Alt+Tab chuyển qua lại 3 cửa sổ 5 lần, dùng Alt+F4 đóng từng cửa sổ, sau đó mở lại bằng Win+R." },
            { id: "t7_3", text: "Khám phá menu của Notepad và Paint: liệt kê 5 lệnh quan trọng cùng phím tắt tương ứng (ví dụ Save = Ctrl+S) ra giấy." }
        ],
        quiz: [
            { q: "Bộ phận nào của cửa sổ hiển thị tên ứng dụng và tên tệp?", options: ["A. Thanh tiêu đề (Title bar)", "B. Thanh trạng thái", "C. Vùng làm việc", "D. Thanh cuộn"], ans: 0, exp: "Thanh tiêu đề nằm trên cùng, hiển thị tên ứng dụng/tệp và chứa các nút điều khiển." },
            { q: "Nút nào dùng để phóng to cửa sổ?", options: ["A. Nút —", "B. Nút □", "C. Nút ✕", "D. Nút ?"], ans: 1, exp: "Nút □ (Maximize) phóng to cửa sổ toàn màn hình; bấm lần nữa để khôi phục." },
            { q: "Muốn chia đôi màn hình với một cửa sổ bên trái, bé dùng phím tắt nào?", options: ["A. Win + ←", "B. Ctrl + ←", "C. Alt + F4", "D. Shift + Tab"], ans: 0, exp: "Win + mũi tên trái snap cửa sổ sang nửa trái màn hình." },
            { q: "Menu hiện ra khi nháy phải chuột được gọi là gì?", options: ["A. Menu ngữ cảnh (Context menu)", "B. Menu Start", "C. Menu hamburger", "D. Menu thanh"], ans: 0, exp: "Menu ngữ cảnh chứa các lệnh phù hợp với đối tượng được nháy phải." },
            { q: "Hộp thoại (Dialog box) thường dùng để làm gì?", options: ["A. Hỏi bé lựa chọn hoặc xác nhận trước khi thực hiện", "B. Tắt máy", "C. Vẽ tranh", "D. Nghe nhạc"], ans: 0, exp: "Hộp thoại yêu cầu xác nhận hoặc lựa chọn, thường có nút OK và Cancel." },
            { q: "Phím tắt Alt + Tab dùng để làm gì?", options: ["A. Chuyển đổi giữa các cửa sổ đang mở", "B. Đóng cửa sổ", "C. Lưu tệp", "D. Phóng to chữ"], ans: 0, exp: "Alt + Tab mở danh sách cửa sổ để chuyển nhanh." },
            { q: "Khi thu nhỏ cửa sổ, nó đi đâu?", options: ["A. Nằm trên Taskbar và vẫn đang chạy", "B. Bị xóa khỏi máy", "C. Chuyển vào Recycle Bin", "D. Tự động lưu và tắt"], ans: 0, exp: "Thu nhỏ chỉ ẩn cửa sổ xuống Taskbar; ứng dụng vẫn chạy." },
            { q: "Tổ hợp phím nào đóng cửa sổ đang hoạt động?", options: ["A. Alt + F4", "B. Ctrl + S", "C. Win + D", "D. Ctrl + Z"], ans: 0, exp: "Alt + F4 đóng cửa sổ đang active." },
            { q: "Trong hộp thoại, phím Tab có tác dụng gì?", options: ["A. Chuyển giữa các nút và ô nhập liệu", "B. Đóng hộp thoại", "C. Xóa toàn bộ", "D. Đổi màu"], ans: 0, exp: "Tab di chuyển tiêu điểm giữa các thành phần trong hộp thoại." },
            { q: "Muốn xem tất cả cửa sổ đang mở dưới dạng thu nhỏ, bé dùng gì?", options: ["A. Win + Tab (Task View)", "B. Ctrl + C", "C. Alt + F4", "D. Win + L"], ans: 0, exp: "Task View (Win + Tab) hiển thị toàn bộ cửa sổ và Desktop ảo." }
        ]
    },

    // ==========================================
    // BÀI 08 — TỆP TIN VÀ CÁC ĐỊNH DẠNG DỮ LIỆU SỐ
    // ==========================================
    8: {
        id: 8,
        chapterId: 1,
        chapterTitle: "Chương 1 — Khám phá thế giới máy tính",
        title: "Tệp tin và các định dạng dữ liệu số",
        badge: "Nhà Sưu Tầm Tệp Tin",
        desc: "Hiểu tệp tin là gì, đọc được phần mở rộng (.txt, .jpg, .mp3, .exe…), biết chọn đúng định dạng cho từng loại dữ liệu và tổ chức tệp khoa học trên Windows 10.",
        session1: `
            <h4>1. Tệp tin — Chiếc hộp đựng dữ liệu số</h4>
            <p>Mọi thứ bé lưu trên máy tính đều nằm trong các <strong>tệp tin (file)</strong>: bài văn, bức ảnh, bài hát, trò chơi, trang web. Hãy tưởng tượng mỗi tệp là một chiếc hộp có:</p>
            <div class="rich-grid">
                <div class="rich-card"><strong>🏷️ Tên tệp</strong><br>Ví dụ <code>BaiHoc</code>. Bé nên đặt tên dễ hiểu, không dấu, không khoảng trắng khi học lập trình.</div>
                <div class="rich-card"><strong>🔖 Phần mở rộng</strong><br>Phần sau dấu chấm, ví dụ <code>.txt</code>. Nó cho Windows biết đây là loại dữ liệu gì.</div>
                <div class="rich-card"><strong>📦 Nội dung</strong><br>Dữ liệu thật bên trong: chữ, pixel ảnh, nốt nhạc số, mã lệnh.</div>
                <div class="rich-card"><strong>📏 Dung lượng</strong><br>Kích thước tệp, tính bằng B, KB, MB, GB.</div>
            </div>
            <p>Tên đầy đủ của tệp gồm <strong>tên + phần mở rộng</strong>. Ví dụ: <code>BaiHoc.txt</code> — trong đó <em>BaiHoc</em> là tên, <em>.txt</em> là phần mở rộng.</p>

            <h4>1.1 Bảng định dạng tệp thông dụng</h4>
            <div class="table-scroll">
                <table class="lesson-table">
                    <tr><th>Định dạng</th><th>Loại dữ liệu</th><th>Ứng dụng mở</th><th>Đặc điểm</th></tr>
                    <tr><td><code>.txt</code></td><td>Văn bản thuần</td><td>Notepad</td><td>Nhẹ, không định dạng màu sắc</td></tr>
                    <tr><td><code>.docx</code></td><td>Văn bản có định dạng</td><td>Microsoft Word</td><td>Font, màu, bảng biểu</td></tr>
                    <tr><td><code>.pdf</code></td><td>Tài liệu in</td><td>Edge, Adobe Reader</td><td>Giữ nguyên bố cục trên mọi máy</td></tr>
                    <tr><td><code>.jpg</code> / <code>.png</code></td><td>Hình ảnh</td><td>Photos, Paint</td><td>JPG nhỏ gọn, PNG hỗ trợ nền trong suốt</td></tr>
                    <tr><td><code>.mp3</code> / <code>.wav</code></td><td>Âm thanh</td><td>Windows Media Player</td><td>MP3 nhỏ, WAV chất lượng cao nhưng nặng</td></tr>
                    <tr><td><code>.mp4</code></td><td>Video</td><td>Movies &amp; TV</td><td>Phim, clip có hình và tiếng</td></tr>
                    <tr><td><code>.exe</code></td><td>Chương trình</td><td>Windows</td><td>Cài đặt hoặc chạy ứng dụng</td></tr>
                    <tr><td><code>.zip</code></td><td>Tệp nén</td><td>File Explorer</td><td>Gom nhiều tệp, giảm dung lượng</td></tr>
                    <tr><td><code>.html</code></td><td>Trang web</td><td>Edge</td><td>Mã HTML hiển thị thành trang web</td></tr>
                </table>
            </div>
            <div class="warn-box">🛑 <strong>Cẩn thận với tệp .exe lạ!</strong> Tệp <code>.exe</code> có thể cài phần mềm độc hại. Chỉ chạy tệp .exe khi bé biết rõ nguồn gốc và đã được người lớn kiểm tra.</div>

            <h4>1.2 Đơn vị dung lượng</h4>
            <p>Máy tính đếm dung lượng theo hệ nhị phân. Bé chỉ cần nhớ thứ tự từ nhỏ đến lớn:</p>
            <div class="flow-row">
                <div class="flow-item"><b>Byte (B)</b><br>1 ký tự ≈ 1 B</div>
                <div class="flow-item"><b>Kilobyte (KB)</b><br>1 KB ≈ 1.024 B</div>
                <div class="flow-item"><b>Megabyte (MB)</b><br>1 MB ≈ 1.024 KB</div>
                <div class="flow-item"><b>Gigabyte (GB)</b><br>1 GB ≈ 1.024 MB</div>
                <div class="flow-item"><b>Terabyte (TB)</b><br>1 TB ≈ 1.024 GB</div>
            </div>
            <p>Ví dụ: một trang văn bản chỉ vài KB; một bức ảnh điện thoại khoảng 2–5 MB; một bộ phim HD khoảng 1–4 GB; một ổ cứng laptop thường 256 GB hoặc 512 GB.</p>
        `,
        session2: `
            <h4>2. Nhìn thấy phần mở rộng trong File Explorer</h4>
            <div class="win10-box">
                <span class="win10-tag">Thao tác Windows 10</span>
                <ol class="step-list">
                    <li>Mở <strong>File Explorer</strong> bằng <span class="keycap">Win</span> + <span class="keycap">E</span>.</li>
                    <li>Chuyển sang tab <strong>View</strong> trên thanh Ribbon.</li>
                    <li>Tích chọn <strong>File name extensions</strong>. Lập tức bé sẽ thấy đuôi tệp như <code>.txt</code>, <code>.jpg</code>, <code>.exe</code> hiện ra.</li>
                    <li>Trong cùng tab View, chọn <strong>Details</strong> để xem thêm cột Type, Size, Date modified.</li>
                    <li>Nháy vào tiêu đề cột <strong>Type</strong> để sắp xếp tệp theo loại — rất tiện khi tìm ảnh hoặc tài liệu.</li>
                </ol>
            </div>

            <h4>2.1 Thực hành: tạo thư mục và tệp có quy tắc</h4>
            <div class="win10-box">
                <span class="win10-tag">Thao tác Windows 10</span>
                <ol class="step-list">
                    <li>Mở <strong>Documents</strong>, nhấn <span class="keycap">Ctrl</span> + <span class="keycap">Shift</span> + <span class="keycap">N</span> để tạo thư mục mới, đặt tên <code>HocTap_Win10</code>.</li>
                    <li>Mở thư mục đó, nháy phải vùng trống → <strong>New</strong> → <strong>Text Document</strong>. Đặt tên <code>BaiHoc.txt</code>.</li>
                    <li>Mở tệp bằng Notepad, gõ vài dòng, nhấn <span class="keycap">Ctrl</span> + <span class="keycap">S</span> để lưu.</li>
                    <li>Nháy phải tệp → <strong>Properties</strong> (hoặc <span class="keycap">Alt</span> + <span class="keycap">Enter</span>) để xem loại tệp, dung lượng, vị trí lưu.</li>
                    <li>Nhấn <span class="keycap">F2</span> để đổi tên tệp thành <code>2025-01-15_BaiHoc.txt</code> theo quy tắc ngày-tháng-năm.</li>
                    <li>Nhấn <span class="keycap">Delete</span> để chuyển tệp vào <strong>Recycle Bin</strong>. Mở Recycle Bin, chọn tệp → <strong>Restore</strong> để lấy lại.</li>
                </ol>
            </div>
            <div class="note-box">💡 <strong>Quy tắc đặt tên cho người học lập trình:</strong> dùng chữ không dấu, không khoảng trắng, có thể dùng dấu gạch dưới <code>_</code> hoặc gạch ngang <code>-</code>. Ví dụ tốt: <code>ngay15_baitap.js</code>. Ví dụ dễ gây lỗi: <code>Bài tập số 1 (bản cuối).js</code>.</div>

            <h4>2.2 Sao chép, di chuyển và hoàn tác</h4>
            <div class="table-scroll">
                <table class="lesson-table">
                    <tr><th>Thao tác</th><th>Phím tắt</th><th>Kết quả</th></tr>
                    <tr><td>Sao chép</td><td><span class="keycap">Ctrl</span> + <span class="keycap">C</span></td><td>Tạo bản sao, tệp gốc vẫn còn</td></tr>
                    <tr><td>Cắt (di chuyển)</td><td><span class="keycap">Ctrl</span> + <span class="keycap">X</span></td><td>Chuyển tệp sang vị trí mới</td></tr>
                    <tr><td>Dán</td><td><span class="keycap">Ctrl</span> + <span class="keycap">V</span></td><td>Đặt bản sao vào thư mục đích</td></tr>
                    <tr><td>Hoàn tác</td><td><span class="keycap">Ctrl</span> + <span class="keycap">Z</span></td><td>Hủy thao tác vừa làm</td></tr>
                    <tr><td>Xóa tạm</td><td><span class="keycap">Delete</span></td><td>Đưa vào Recycle Bin (có thể khôi phục)</td></tr>
                    <tr><td>Xóa vĩnh viễn</td><td><span class="keycap">Shift</span> + <span class="keycap">Delete</span></td><td>Xóa hẳn, không qua Recycle Bin</td></tr>
                </table>
            </div>
            <div class="warn-box">⚠️ <strong>Shift + Delete rất nguy hiểm!</strong> Tệp sẽ biến mất vĩnh viễn, không thể Restore. Chỉ dùng khi bé chắc chắn 100% và đã có bản sao lưu.</div>
        `,
        session3: `
            <h4>3. Vì sao cùng một nội dung lại có nhiều định dạng?</h4>
            <p>Cùng một bức ảnh có thể lưu thành JPG, PNG hoặc BMP. Cùng một bài văn có thể là TXT, DOCX hoặc PDF. Mỗi định dạng là một cách đóng gói dữ liệu với mục đích khác nhau:</p>
            <div class="rich-grid">
                <div class="rich-card"><strong>🖼️ Ảnh: JPG vs PNG</strong><br>JPG nén mất một ít chi tiết để dung lượng nhỏ — hợp để chia sẻ. PNG giữ nguyên chất lượng và nền trong suốt — hợp cho logo, hình cần sắc nét.</div>
                <div class="rich-card"><strong>📄 Văn bản: TXT vs DOCX vs PDF</strong><br>TXT nhẹ và mở được ở mọi nơi. DOCX cho bé chỉnh sửa đẹp. PDF khóa bố cục để người khác xem đúng ý bé.</div>
                <div class="rich-card"><strong>🎵 Âm thanh: WAV vs MP3</strong><br>WAV là bản ghi gần như nguyên gốc, rất nặng. MP3 nén lại, nhẹ hơn nhiều nhưng tai người khó nhận ra khác biệt.</div>
                <div class="rich-card"><strong>🎬 Video: MP4 vs MOV</strong><br>MP4 phổ biến trên mọi thiết bị. MOV thường dùng trong dựng phim chuyên nghiệp.</div>
            </div>

            <h4>3.1 Chọn định dạng theo mục đích</h4>
            <ul>
                <li><strong>Gửi bài cho cô giáo:</strong> PDF để bố cục không bị lệch.</li>
                <li><strong>Lưu ảnh kỷ niệm:</strong> JPG nếu chỉ để xem; PNG nếu cần chỉnh sửa nhiều lần.</li>
                <li><strong>Viết code:</strong> tệp <code>.html</code>, <code>.css</code>, <code>.js</code> dạng văn bản thuần, không dùng Word.</li>
                <li><strong>Gửi nhiều tệp:</strong> nén thành <code>.zip</code> để gửi một lần.</li>
                <li><strong>Cài phần mềm:</strong> <code>.exe</code> hoặc <code>.msi</code>, chỉ tải từ nguồn tin cậy.</li>
            </ul>

            <h4>3.2 Tổ chức kho tệp khoa học</h4>
            <p>Một cây thư mục tốt giúp bé tìm lại mọi thứ trong 5 giây. Hãy tham khảo cấu trúc sau:</p>
            <div class="flow-row">
                <div class="flow-item"><b>📁 HocTap</b><br>BaiGiang, BaiTap, DuAn</div>
                <div class="flow-arrow">➡️</div>
                <div class="flow-item"><b>📁 HinhAnh</b><br>AnhLop, AnhGiaDinh</div>
                <div class="flow-arrow">➡️</div>
                <div class="flow-item"><b>📁 GiaiTri</b><br>Nhac, Phim, Game</div>
                <div class="flow-arrow">➡️</div>
                <div class="flow-item"><b>📁 SaoLuu</b><br>Bản sao lưu quan trọng</div>
            </div>
            <div class="ok-box">🎯 <strong>Nguyên tắc vàng:</strong> Mỗi tệp chỉ nên nằm ở <strong>một nơi duy nhất</strong> và có tên nói rõ nội dung. Tránh đặt tên kiểu <code>abc.txt</code>, <code>moi.txt</code>, <code>final2_thucsu.txt</code>.</div>
            <div class="vocab-row">
                <span class="vocab-chip"><b>File</b> tệp tin</span>
                <span class="vocab-chip"><b>Folder</b> thư mục</span>
                <span class="vocab-chip"><b>Extension</b> phần mở rộng</span>
                <span class="vocab-chip"><b>Format</b> định dạng</span>
                <span class="vocab-chip"><b>Properties</b> thuộc tính</span>
                <span class="vocab-chip"><b>Backup</b> sao lưu</span>
            </div>
        `,
        tasks: [
            { id: "t8_1", text: "Bật hiển thị phần mở rộng tệp trong File Explorer, tạo thư mục 'HocTap_Win10' trong Documents và tạo bên trong 3 tệp: BaiHoc.txt, GhiChu.txt, DanhSach.txt." },
            { id: "t8_2", text: "Đổi tên một tệp theo quy tắc '2025-01-15_BaiHoc.txt', mở Properties để ghi lại loại tệp và dung lượng, sau đó xóa tệp vào Recycle Bin rồi Restore lại." },
            { id: "t8_3", text: "Tạo bộ sưu tập 5 tệp thuộc ít nhất 3 định dạng khác nhau (ảnh, văn bản, âm thanh...), lập bảng gồm: tên tệp – định dạng – dung lượng – ứng dụng mở được." }
        ],
        quiz: [
            { q: "Phần mở rộng của tệp cho biết điều gì?", options: ["A. Loại dữ liệu và ứng dụng có thể mở tệp", "B. Tên người tạo", "C. Ngày tạo máy tính", "D. Giá tiền của tệp"], ans: 0, exp: "Phần mở rộng (extension) xác định định dạng dữ liệu và ứng dụng phù hợp để mở." },
            { q: "Tệp nào là văn bản thuần?", options: ["A. BaiHoc.txt", "B. Anh.jpg", "C. Nhac.mp3", "D. Game.exe"], ans: 0, exp: ".txt là định dạng văn bản thuần, mở bằng Notepad." },
            { q: "Định dạng nào phù hợp nhất để gửi bài trình bày giữ nguyên bố cục?", options: ["A. PDF", "B. EXE", "C. MP3", "D. ZIP"], ans: 0, exp: "PDF giữ nguyên bố cục trên mọi máy, phù hợp để gửi tài liệu." },
            { q: "1 GB xấp xỉ bằng bao nhiêu MB?", options: ["A. 10 MB", "B. 100 MB", "C. 1.024 MB", "D. 1.000.000 MB"], ans: 2, exp: "1 GB ≈ 1.024 MB theo hệ nhị phân." },
            { q: "Tệp .exe là gì?", options: ["A. Chương trình có thể chạy/cài đặt trên Windows", "B. Một bức ảnh", "C. Một bài hát", "D. Một trang web"], ans: 0, exp: ".exe là tệp thực thi; cần cẩn thận với tệp .exe từ nguồn lạ." },
            { q: "Muốn xóa tệp nhưng vẫn có thể khôi phục, bé dùng cách nào?", options: ["A. Nhấn Delete để đưa vào Recycle Bin", "B. Nhấn Shift+Delete", "C. Định dạng lại ổ cứng", "D. Rút USB"], ans: 0, exp: "Delete đưa tệp vào Recycle Bin, từ đó có thể Restore." },
            { q: "Phím tắt nào đổi tên tệp/thư mục?", options: ["A. F2", "B. F5", "C. Ctrl+C", "D. Alt+F4"], ans: 0, exp: "F2 cho phép đổi tên tệp hoặc thư mục đang chọn." },
            { q: "Vì sao nên đặt tên tệp không dấu khi học lập trình?", options: ["A. Tránh lỗi đường dẫn và font chữ trong các công cụ lập trình", "B. Để tên dài hơn", "C. Để máy chạy chậm hơn", "D. Không có lý do"], ans: 0, exp: "Tên không dấu giúp tránh lỗi khi công cụ lập trình xử lý đường dẫn." },
            { q: "Định dạng nào hỗ trợ nền trong suốt tốt nhất?", options: ["A. PNG", "B. JPG", "C. MP3", "D. EXE"], ans: 0, exp: "PNG hỗ trợ kênh alpha (nền trong suốt), phù hợp cho logo." },
            { q: "Cách nào giúp gửi nhiều tệp cùng lúc gọn nhất?", options: ["A. Nén thành một tệp .zip", "B. Đổi tất cả thành .exe", "C. In ra giấy", "D. Đổi tên thành một tệp"], ans: 0, exp: "Nén .zip gom nhiều tệp thành một gói nhỏ gọn để chia sẻ." }
        ]
    },

    9: {
        id: 9,
        chapterId: 1,
        chapterTitle: "Chương 1 — Khám phá thế giới máy tính",
        title: "Internet và 5 quy tắc An toàn số cho trẻ em",
        badge: "Hiệp Sĩ An Toàn Mạng",
        desc: "Hiểu Internet – website – trình duyệt hoạt động ra sao, nhận diện website giả và lừa đảo trực tuyến, xây dựng 5 quy tắc an toàn số để tự bảo vệ mình mỗi ngày.",
        session1: `
            <h4>1. Internet — con đường cao tốc của thế giới số</h4>
            <p>Hãy tưởng tượng <strong>Internet</strong> là một mạng lưới đường cao tốc khổng lồ nối hàng tỉ ngôi nhà trên khắp hành tinh. Mỗi ngôi nhà là một chiếc máy tính, điện thoại hoặc máy chủ. Khi bé gõ một địa chỉ web, dữ liệu sẽ chạy qua các con đường này chỉ trong vài phần trăm giây.</p>
            <div class="rich-grid">
                <div class="rich-card"><strong>🌍 Internet</strong><p>Hạ tầng mạng toàn cầu: cáp quang, vệ tinh, Wi-Fi, 4G/5G. Không có Internet thì không có website, video hay game online.</p></div>
                <div class="rich-card"><strong>🏠 Website</strong><p>Một “ngôi nhà” chứa nội dung (chữ, ảnh, video) đặt trên máy chủ. Mỗi nhà có một địa chỉ riêng gọi là URL.</p></div>
                <div class="rich-card"><strong>🚗 Trình duyệt</strong><p>“Chiếc xe” đưa bé đến ngôi nhà đó. Microsoft Edge, Chrome, Firefox là các trình duyệt.</p></div>
            </div>
            <p>Ở nhà, chiếc <strong>router Wi-Fi</strong> là cánh cổng nối máy tính của bé với Internet. Nhà cung cấp dịch vụ (Viettel, VNPT, FPT…) giống như đơn vị làm đường cao tốc đó.</p>

            <h4>2. Đọc một địa chỉ web (URL) như đọc địa chỉ nhà</h4>
            <p>Mỗi URL có cấu trúc rõ ràng. Ví dụ:</p>
            <div class="flow-row">
                <div class="flow-item"><strong>https://</strong><br><em>Giao thức</em></div>
                <div class="flow-arrow">→</div>
                <div class="flow-item"><strong>edu.vn</strong><br><em>Tên miền</em></div>
                <div class="flow-arrow">→</div>
                <div class="flow-item"><strong>/bai-hoc/tin-hoc</strong><br><em>Đường dẫn</em></div>
            </div>
            <div class="table-scroll">
                <table class="lesson-table">
                    <thead><tr><th>Thành phần</th><th>Ý nghĩa</th><th>Ví dụ</th></tr></thead>
                    <tbody>
                        <tr><td><strong>https://</strong></td><td>Kết nối được mã hóa, có ổ khóa 🔒</td><td>https://edu.vn</td></tr>
                        <tr><td><strong>http://</strong></td><td>Không mã hóa — không nên nhập mật khẩu</td><td>http://example.com</td></tr>
                        <tr><td><strong>Tên miền</strong></td><td>Tên “ngôi nhà” trên Internet</td><td>wikipedia.org</td></tr>
                        <tr><td><strong>.vn / .org / .win</strong></td><td>Đuôi tên miền; đuôi lạ cần cảnh giác</td><td>free-iphone.win</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="ok-box">✅ <strong>Dấu hiệu an toàn cơ bản:</strong> địa chỉ bắt đầu bằng <strong>https://</strong>, có biểu tượng ổ khóa, tên miền đúng chính tả và không có dấu hiệu lạ.</div>

            <h4>3. Thực hành trên Windows 10</h4>
            <div class="win10-box">
                <span class="win10-tag">Thao tác Windows 10</span>
                <ol>
                    <li>Mở <strong>Microsoft Edge</strong> từ Start Menu hoặc Taskbar.</li>
                    <li>Bấm vào thanh địa chỉ, gõ <code>edu.vn</code> rồi nhấn <strong>Enter</strong>.</li>
                    <li>Quan sát biểu tượng ổ khóa bên trái địa chỉ — đó là dấu hiệu HTTPS.</li>
                    <li>Mở thêm một thẻ mới bằng <span class="keycap">Ctrl</span> + <span class="keycap">T</span> và thử một địa chỉ khác.</li>
                </ol>
            </div>
        `,
        session2: `
            <h4>1. Mật khẩu — chìa khóa của ngôi nhà số</h4>
            <p>Mật khẩu giống như chìa khóa cửa nhà. Nếu đặt chìa khóa dưới tấm thảm, người lạ có thể vào bất cứ lúc nào. Một mật khẩu mạnh cần:</p>
            <ul>
                <li><strong>Dài từ 12 ký tự trở lên</strong> — càng dài càng khó đoán.</li>
                <li><strong>Trộn chữ hoa, chữ thường, số và ký hiệu</strong> như <code>!</code> <code>@</code> <code>#</code>.</li>
                <li><strong>Không chứa thông tin cá nhân</strong>: tên, ngày sinh, số điện thoại, tên trường.</li>
                <li><strong>Mỗi trang một mật khẩu khác nhau</strong> — nếu một trang bị lộ, các trang khác vẫn an toàn.</li>
            </ul>
            <div class="rich-grid">
                <div class="rich-card"><strong>❌ Yếu</strong><p><code>123456</code><br><code>ngaysinh2014</code><br><code>truongcuaem</code></p></div>
                <div class="rich-card"><strong>✅ Mạnh</strong><p><code>7#Lm2@Qp9!vT</code><br><code>CaVoiXanh-Di-hoc_2026</code></p></div>
            </div>
            <div class="note-box">💡 <strong>Mẹo câu mật khẩu:</strong> ghép 4 từ ngẫu nhiên không liên quan, thêm số và ký hiệu: <code>BanhMi + SaoHoa + 42!</code>. Bé dễ nhớ nhưng máy tính rất khó đoán.</div>

            <h4>2. Thông tin cá nhân — không chia sẻ tùy tiện</h4>
            <p>Những thông tin sau chỉ nên chia sẻ với bố mẹ, thầy cô và chỉ khi thật cần thiết:</p>
            <div class="vocab-row">
                <span class="vocab-chip">Họ tên đầy đủ</span>
                <span class="vocab-chip">Địa chỉ nhà</span>
                <span class="vocab-chip">Tên trường, lớp</span>
                <span class="vocab-chip">Số điện thoại</span>
                <span class="vocab-chip">Ảnh thẻ / CCCD</span>
                <span class="vocab-chip">Mã OTP</span>
                <span class="vocab-chip">Mật khẩu</span>
                <span class="vocab-chip">Vị trí đang ở</span>
            </div>
            <div class="warn-box">⚠️ <strong>Mã OTP là bí mật tuyệt đối.</strong> Không ai — kể cả người tự xưng là nhân viên ngân hàng, công an hay người quen — được yêu cầu bé đọc mã OTP. Đọc OTP cho người lạ nghĩa là mở cửa cho họ lấy tiền.</div>

            <h4>3. Nhận diện lừa đảo trực tuyến (Phishing)</h4>
            <p>Kẻ lừa đảo thường đóng vai người tốt để lấy thông tin. Hãy nhớ 5 dấu hiệu vàng:</p>
            <div class="step-list">
                <div class="step"><span class="num">1</span><div><strong>Quà quá lớn</strong> — trúng iPhone, nhận 10 triệu, “miễn phí 100%”.</div></div>
                <div class="step"><span class="num">2</span><div><strong>Ép thời gian</strong> — “chỉ còn 2 phút”, “làm ngay kẻo mất”.</div></div>
                <div class="step"><span class="num">3</span><div><strong>Đòi mật khẩu hoặc OTP</strong> — ngân hàng, trường học thật không bao giờ hỏi mật khẩu qua tin nhắn.</div></div>
                <div class="step"><span class="num">4</span><div><strong>Tên miền lạ</strong> — <code>free-iphone.win</code>, <code>vn-bank-secure.xyz</code>, sai chính tả so với trang thật.</div></div>
                <div class="step"><span class="num">5</span><div><strong>Link và tệp đáng ngờ</strong> — link rút gọn, tệp <code>.exe</code>, <code>.zip</code> từ người lạ.</div></div>
            </div>
            <div class="warn-box">⚠️ <strong>Ví dụ thật trong mô phỏng:</strong> trang “CHÚC MỪNG! BẠN ĐÃ TRÚNG IPHONE 15!” yêu cầu nhập số điện thoại và mật khẩu. Đó là 100% lừa đảo — không có món quà nào miễn phí chỉ vì bé bấm một cái nút.</div>
            <div class="ok-box">✅ <strong>Quy tắc vàng:</strong> Không nhập mật khẩu/OTP vào bất kỳ trang nào mở từ tin nhắn hay quảng cáo. Luôn tự gõ địa chỉ trang chính thức hoặc dùng trang đã lưu.</div>
        `,
        session3: `
            <h4>1. Quy trình 4 bước khi gặp điều bất thường</h4>
            <div class="flow-row">
                <div class="flow-item"><strong>DỪNG</strong><br><em>Không bấm, không nhập</em></div>
                <div class="flow-arrow">→</div>
                <div class="flow-item"><strong>SUY NGHĨ</strong><br><em>Điều này có hợp lý?</em></div>
                <div class="flow-arrow">→</div>
                <div class="flow-item"><strong>HỎI</strong><br><em>Bố mẹ / thầy cô</em></div>
                <div class="flow-arrow">→</div>
                <div class="flow-item"><strong>BÁO</strong><br><em>Nếu đã lỡ bấm</em></div>
            </div>

            <h4>2. Năm quy tắc an toàn số của em</h4>
            <div class="rich-grid">
                <div class="rich-card"><strong>1. Bảo vệ mật khẩu</strong><p>Mật khẩu dài, mạnh, mỗi trang một mật khẩu; không chia sẻ cho bạn bè.</p></div>
                <div class="rich-card"><strong>2. Giữ kín thông tin cá nhân</strong><p>Không đăng địa chỉ, số điện thoại, tên trường lên mạng xã hội.</p></div>
                <div class="rich-card"><strong>3. Kiểm tra trước khi tin</strong><p>So sánh 2–3 nguồn; nghi ngờ quà tặng, tin nhắn ép thời gian.</p></div>
                <div class="rich-card"><strong>4. Không gặp người lạ</strong><p>Không đi gặp người quen qua mạng khi chưa có bố mẹ đồng ý.</p></div>
                <div class="rich-card"><strong>5. Báo ngay khi có chuyện</strong><p>Nếu bị đe dọa, bị lừa hoặc thấy điều lạ, nói ngay với người lớn tin cậy.</p></div>
            </div>

            <h4>3. Khi nào chắc chắn phải hỏi người lớn?</h4>
            <div class="table-scroll">
                <table class="lesson-table">
                    <thead><tr><th>Tình huống</th><th>Vì sao nguy hiểm?</th><th>Việc cần làm</th></tr></thead>
                    <tbody>
                        <tr><td>Người lạ hỏi địa chỉ nhà, trường học</td><td>Có thể tìm đến bé ngoài đời</td><td>Không trả lời, chặn và báo bố mẹ</td></tr>
                        <tr><td>Popup “Máy bạn bị virus, bấm để quét”</td><td>Dẫn đến trang giả hoặc tải mã độc</td><td>Đóng tab, không bấm, báo người lớn</td></tr>
                        <tr><td>Ai đó xin mã OTP</td><td>Chiếm tài khoản, mất tiền</td><td>Tuyệt đối không đọc, báo ngay</td></tr>
                        <tr><td>Được rủ gửi ảnh riêng tư</td><td>Ảnh có thể bị phát tán</td><td>Từ chối, chặn, kể với bố mẹ</td></tr>
                        <tr><td>Bị bắt nạt trên mạng</td><td>Ảnh hưởng tâm lý</td><td>Lưu bằng chứng, báo người lớn</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="note-box">💡 <strong>Không phải mọi thứ trên Internet đều đúng.</strong> Một bài viết được nhiều lượt thích vẫn có thể sai. Hãy kiểm tra chéo và ưu tiên nguồn chính thức: trường học, cơ quan nhà nước, bách khoa toàn thư.</div>
            <div class="ok-box">✅ <strong>Bài học cốt lõi:</strong> Người lớn tin cậy là “lá chắn” của bé. Hỏi không phải là yếu — hỏi là thông minh.</div>
        `,
        tasks: [
            { id: "t9_1", text: "Mở Microsoft Edge, lần lượt truy cập edu.vn, wikipedia.org và free-iphone.win. Ghi lại 2 dấu hiệu an toàn và 3 dấu hiệu đáng ngờ của các trang này." },
            { id: "t9_2", text: "Tạo 3 mật khẩu mạnh theo công thức 4 từ + số + ký hiệu. Không dùng thông tin thật của em, lưu vào Notepad với tên 'MatKhauManh.txt'." },
            { id: "t9_3", text: "Viết 5 quy tắc an toàn số của riêng em và giải thích cho bố mẹ nghe trong 2 phút." }
        ],
        quiz: [
            { q: "Internet là gì?", options: ["A. Một ứng dụng trong Windows 10", "B. Mạng lưới máy tính toàn cầu kết nối hàng tỉ thiết bị", "C. Một loại ổ cứng", "D. Một trang web duy nhất"], ans: 1, exp: "Internet là hạ tầng mạng toàn cầu; website và ứng dụng chạy trên nền hạ tầng đó." },
            { q: "Trình duyệt web là gì?", options: ["A. Phần mềm giúp mở và hiển thị website", "B. Một loại cáp mạng", "C. Một tệp văn bản", "D. Một loại mật khẩu"], ans: 0, exp: "Microsoft Edge, Chrome, Firefox là trình duyệt — công cụ để xem website." },
            { q: "Địa chỉ bắt đầu bằng https:// cho biết điều gì?", options: ["A. Trang web rất nổi tiếng", "B. Kết nối được mã hóa và có ổ khóa bảo mật", "C. Trang web miễn phí", "D. Trang web của trường học"], ans: 1, exp: "HTTPS mã hóa dữ liệu giữa trình duyệt và máy chủ. Đây là dấu hiệu an toàn cơ bản, nhưng vẫn cần kiểm tra tên miền." },
            { q: "Mật khẩu nào mạnh nhất trong các lựa chọn sau?", options: ["A. 123456", "B. ngaysinh2014", "C. 7#Lm2@Qp9!vT", "D. tenminh"], ans: 2, exp: "Mật khẩu mạnh dài 12+ ký tự, có hoa, thường, số, ký hiệu và không chứa thông tin cá nhân." },
            { q: "Thông tin nào tuyệt đối không được chia sẻ cho người lạ?", options: ["A. Màu yêu thích", "B. Mã OTP và mật khẩu", "C. Tên một bộ phim", "D. Môn học yêu thích"], ans: 1, exp: "OTP và mật khẩu là chìa khóa tài khoản; chia sẻ nghĩa là mất quyền kiểm soát." },
            { q: "Dấu hiệu nào sau đây là điển hình của lừa đảo trực tuyến?", options: ["A. Quà tặng quá lớn, ép thời gian, đòi mật khẩu", "B. Trang web có nhiều hình ảnh", "C. Trang web dùng chữ to", "D. Trang web có màu xanh"], ans: 0, exp: "Quà lớn bất thường + áp lực thời gian + đòi thông tin bí mật là bộ ba của lừa đảo." },
            { q: "Một người lạ nhắn tin hỏi địa chỉ nhà và trường học của em. Em nên làm gì?", options: ["A. Trả lời đầy đủ cho lịch sự", "B. Không trả lời, chặn và báo bố mẹ", "C. Gửi ảnh thẻ học sinh", "D. Hẹn gặp riêng"], ans: 1, exp: "Thông tin vị trí có thể khiến em gặp nguy hiểm ngoài đời. Hãy chặn và báo người lớn." },
            { q: "Nhận được tệp đính kèm .exe từ một người không quen biết, em nên làm gì?", options: ["A. Mở ngay để xem", "B. Không mở, xóa và báo người lớn", "C. Chuyển tiếp cho bạn bè", "D. Đổi tên tệp rồi mở"], ans: 1, exp: "Tệp .exe có thể là mã độc. Không mở tệp từ nguồn lạ, dù đã đổi tên." },
            { q: "Khi trang web hiện “Máy bạn bị virus! Bấm vào đây để quét ngay”, em nên làm gì?", options: ["A. Bấm ngay để sửa máy", "B. Đóng tab, không bấm và báo người lớn", "C. Nhập mật khẩu để quét", "D. Tải thêm phần mềm lạ"], ans: 1, exp: "Đây là chiêu dụ bấm link độc. Hãy đóng tab và nhờ người lớn kiểm tra bằng công cụ thật." },
            { q: "Quy trình 4 bước khi gặp điều bất thường trên mạng là gì?", options: ["A. Bấm thử → tải về → cài đặt → kể lại", "B. Dừng → Suy nghĩ → Hỏi người lớn → Báo nếu đã lỡ bấm", "C. Chia sẻ → đăng công khai → chờ đợi", "D. Tắt máy → quên đi → không nói ai"], ans: 1, exp: "DỪNG – SUY NGHĨ – HỎI – BÁO giúp em không tự xử lý nguy hiểm một mình." }
        ]
    },

    10: {
        id: 10,
        chapterId: 1,
        chapterTitle: "Chương 1 — Khám phá thế giới máy tính",
        title: "Dự án: Bản đồ hệ thống máy tính của em",
        badge: "Bậc Thầy Bản Đồ Máy Tính",
        desc: "Ôn tập toàn bộ Chương 1 bằng dự án thực tế: khám phá máy tính đang dùng, đo thông số thật, vẽ bản đồ 4 lớp hệ thống và thuyết trình 3 phút như một kỹ sư nhí.",
        session1: `
            <h4>1. Bốn lớp của một hệ thống máy tính</h4>
            <p>Một chiếc máy tính giống như một <strong>ngôi nhà thông minh</strong>. Muốn ngôi nhà hoạt động, cần đủ 4 lớp, từ dưới lên:</p>
            <div class="flow-row">
                <div class="flow-item"><strong>Phần cứng</strong><br><em>Nền móng, gạch</em></div>
                <div class="flow-arrow">→</div>
                <div class="flow-item"><strong>Hệ điều hành</strong><br><em>Điện, nước</em></div>
                <div class="flow-arrow">→</div>
                <div class="flow-item"><strong>Ứng dụng</strong><br><em>Đồ đạc</em></div>
                <div class="flow-arrow">→</div>
                <div class="flow-item"><strong>Dữ liệu</strong><br><em>Đồ vật cá nhân</em></div>
            </div>
            <div class="table-scroll">
                <table class="lesson-table">
                    <thead><tr><th>Lớp</th><th>Vai trò</th><th>Ví dụ</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Phần cứng</strong></td><td>Phần chạm được: tính toán, lưu trữ, hiển thị</td><td>CPU, RAM, ổ cứng SSD, màn hình, bàn phím</td></tr>
                        <tr><td><strong>Hệ điều hành</strong></td><td>Quản lý phần cứng, tạo môi trường cho ứng dụng</td><td>Windows 10, Linux, macOS, Android</td></tr>
                        <tr><td><strong>Ứng dụng</strong></td><td>Giúp người dùng làm một việc cụ thể</td><td>Notepad, Paint, Calculator, Edge</td></tr>
                        <tr><td><strong>Dữ liệu</strong></td><td>Nội dung được tạo ra và lưu lại</td><td>Tệp .txt, .png, .mp3, thư mục, ảnh</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="note-box">💡 <strong>Nhớ nhanh:</strong> Phần cứng là “cơ thể”, hệ điều hành là “bộ não điều khiển”, ứng dụng là “kỹ năng”, dữ liệu là “ký ức”.</div>

            <h4>2. Vòng lặp IPO nối bốn lớp như thế nào?</h4>
            <p>Khi bé gõ phím, cả bốn lớp phối hợp tức thì:</p>
            <div class="step-list">
                <div class="step"><span class="num">1</span><div><strong>Input:</strong> bàn phím (phần cứng) nhận phím bấm, hệ điều hành chuyển tín hiệu tới ứng dụng.</div></div>
                <div class="step"><span class="num">2</span><div><strong>Process:</strong> CPU xử lý, RAM giữ dữ liệu tạm, ứng dụng tính toán theo lệnh.</div></div>
                <div class="step"><span class="num">3</span><div><strong>Output:</strong> màn hình hiện chữ, loa phát âm thanh.</div></div>
                <div class="step"><span class="num">4</span><div><strong>Lưu trữ:</strong> nếu bé bấm Save, dữ liệu được ghi xuống ổ cứng thành tệp.</div></div>
            </div>

            <h4>3. Bảng từ vựng 15 thuật ngữ cần thuộc</h4>
            <div class="vocab-row">
                <span class="vocab-chip">CPU — bộ xử lý</span>
                <span class="vocab-chip">RAM — bộ nhớ tạm</span>
                <span class="vocab-chip">SSD/HDD — ổ lưu trữ</span>
                <span class="vocab-chip">Mainboard — bo mạch chủ</span>
                <span class="vocab-chip">PSU — nguồn điện</span>
                <span class="vocab-chip">GPU — xử lý đồ họa</span>
                <span class="vocab-chip">OS — hệ điều hành</span>
                <span class="vocab-chip">Driver — trình điều khiển</span>
                <span class="vocab-chip">Application — ứng dụng</span>
                <span class="vocab-chip">File — tệp tin</span>
                <span class="vocab-chip">Folder — thư mục</span>
                <span class="vocab-chip">Extension — phần mở rộng</span>
                <span class="vocab-chip">Cloud — lưu trữ đám mây</span>
                <span class="vocab-chip">Backup — sao lưu</span>
                <span class="vocab-chip">Network — mạng</span>
            </div>
        `,
        session2: `
            <h4>1. Khám phá máy tính đang dùng</h4>
            <p>Mỗi chiếc máy có một “căn cước công dân” kỹ thuật số. Hãy tìm hiểu máy của bé bằng Windows 10:</p>
            <div class="win10-box">
                <span class="win10-tag">Thao tác Windows 10</span>
                <ol>
                    <li>Mở <strong>Settings</strong> bằng <span class="keycap">Win</span> + <span class="keycap">I</span>.</li>
                    <li>Chọn <strong>System</strong> → <strong>About</strong>.</li>
                    <li>Ghi lại: <strong>Device name</strong> (tên máy), <strong>Processor</strong> (CPU), <strong>Installed RAM</strong>, <strong>Windows edition</strong>.</li>
                    <li>Mở <strong>Task Manager</strong> bằng <span class="keycap">Ctrl</span> + <span class="keycap">Shift</span> + <span class="keycap">Esc</span>, chuyển sang tab <strong>Performance</strong>.</li>
                    <li>Quan sát CPU, Memory (RAM), Disk đang dùng bao nhiêu phần trăm.</li>
                </ol>
            </div>
            <div class="rich-grid">
                <div class="rich-card"><strong>🖥️ Device name</strong><p>Tên riêng của máy, ví dụ <code>CODER-NHI-PC</code>. Dùng khi cần kết nối hoặc nhờ hỗ trợ.</p></div>
                <div class="rich-card"><strong>🧠 Processor</strong><p>Tên CPU, số nhân và tốc độ. CPU càng mạnh, xử lý càng nhanh.</p></div>
                <div class="rich-card"><strong>💾 Installed RAM</strong><p>Bộ nhớ tạm. 8 GB đủ học tập; 16 GB thoải mái hơn khi mở nhiều ứng dụng.</p></div>
                <div class="rich-card"><strong>🪟 Windows edition</strong><p>Phiên bản Windows: Home hay Pro. Cho biết máy có những tính năng nào.</p></div>
            </div>

            <h4>2. Đọc thông số như một kỹ sư</h4>
            <div class="table-scroll">
                <table class="lesson-table">
                    <thead><tr><th>Chỉ số</th><th>Bình thường</th><th>Cần chú ý</th></tr></thead>
                    <tbody>
                        <tr><td>CPU</td><td>Dưới 50% khi học bài</td><td>Trên 90% liên tục → có ứng dụng ngốn CPU</td></tr>
                        <tr><td>RAM</td><td>Dưới 70%</td><td>Trên 85% → máy bắt đầu chậm, nên đóng bớt ứng dụng</td></tr>
                        <tr><td>Disk</td><td>Dưới 50%</td><td>100% kéo dài → ổ cứng đang bận, chờ hoặc kiểm tra</td></tr>
                        <tr><td>Ổ C:</td><td>Còn trên 20% trống</td><td>Dưới 10% → Windows không đủ chỗ làm việc</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="warn-box">⚠️ <strong>Đừng nhầm RAM với ổ cứng!</strong> RAM là bàn làm việc (tạm thời, mất khi tắt máy). Ổ cứng là tủ đựng đồ (giữ lại khi tắt máy). Tắt máy thì RAM trống, còn tệp trong ổ cứng vẫn còn.</div>
        `,
        session3: `
            <h4>1. Vẽ bản đồ hệ thống máy tính</h4>
            <p>Bản đồ hệ thống là sơ đồ cho thấy các thành phần của máy và cách chúng kết nối. Một bản đồ tốt cần:</p>
            <ul>
                <li><strong>4 khối lớn</strong> cho 4 lớp: Phần cứng → Hệ điều hành → Ứng dụng → Dữ liệu.</li>
                <li><strong>Mũi tên có nhãn</strong> cho luồng Input → Process → Output.</li>
                <li><strong>Ví dụ thật</strong> lấy từ chính máy bé đang dùng.</li>
                <li><strong>Chú thích ngắn</strong> giải thích vai trò từng khối.</li>
            </ul>
            <div class="flow-row">
                <div class="flow-item"><strong>Bàn phím / Chuột</strong><br><em>Input</em></div>
                <div class="flow-arrow">→</div>
                <div class="flow-item"><strong>CPU + RAM</strong><br><em>Process</em></div>
                <div class="flow-arrow">→</div>
                <div class="flow-item"><strong>Màn hình / Loa</strong><br><em>Output</em></div>
                <div class="flow-arrow">→</div>
                <div class="flow-item"><strong>Ổ cứng</strong><br><em>Lưu trữ</em></div>
            </div>
            <div class="note-box">💡 <strong>Mẹo trình bày:</strong> Vẽ từ dưới lên theo 4 lớp, dùng 4 màu khác nhau. Ghi tên thật của máy (ví dụ <code>CODER-NHI-PC</code>) để bản đồ mang dấu ấn cá nhân.</div>

            <h4>2. Thuyết trình 3 phút</h4>
            <div class="step-list">
                <div class="step"><span class="num">1</span><div><strong>Mở đầu (30 giây):</strong> “Đây là bản đồ máy tính của em, gồm 4 lớp: phần cứng, hệ điều hành, ứng dụng và dữ liệu.”</div></div>
                <div class="step"><span class="num">2</span><div><strong>Phần cứng (45 giây):</strong> Kể tên CPU, RAM, ổ cứng của máy và nhiệm vụ từng bộ phận.</div></div>
                <div class="step"><span class="num">3</span><div><strong>Hệ điều hành & ứng dụng (45 giây):</strong> Windows 10 quản lý máy; Notepad, Paint, Edge giúp em làm việc.</div></div>
                <div class="step"><span class="num">4</span><div><strong>Dữ liệu & IPO (45 giây):</strong> Giải thích một thao tác thật: gõ chữ → CPU xử lý → màn hình hiện → lưu thành tệp .txt.</div></div>
                <div class="step"><span class="num">5</span><div><strong>Kết luận (15 giây):</strong> “Bốn lớp phối hợp nhịp nhàng giúp máy tính hoạt động. Hiểu chúng giúp em tự tin làm chủ công nghệ.”</div></div>
            </div>

            <h4>3. Tiêu chí tự đánh giá dự án</h4>
            <div class="table-scroll">
                <table class="lesson-table">
                    <thead><tr><th>Tiêu chí</th><th>Đạt</th><th>Xuất sắc</th></tr></thead>
                    <tbody>
                        <tr><td>Đủ 4 lớp</td><td>Có đủ 4 khối</td><td>Có ví dụ thật từ máy của em</td></tr>
                        <tr><td>Luồng IPO</td><td>Có mũi tên Input → Output</td><td>Giải thích được bước Process</td></tr>
                        <tr><td>Thuyết trình</td><td>Đủ 3 phút, nói rõ ràng</td><td>Trả lời được 1 câu hỏi của người nghe</td></tr>
                        <tr><td>Từ vựng</td><td>Dùng đúng 10 thuật ngữ</td><td>Dùng đúng 15 thuật ngữ</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="ok-box">✅ <strong>Sản phẩm cuối chương:</strong> Một bản đồ hệ thống trên giấy A4 + một bài thuyết trình 3 phút + bảng 15 thuật ngữ. Đây chính là “hành trang” để bước vào Chương 2 — Làm chủ Windows 10.</div>
        `,
        tasks: [
            { id: "t10_1", text: "Mở Settings → System → About, ghi lại Device name, Processor, Installed RAM và Windows edition vào Notepad." },
            { id: "t10_2", text: "Mở Task Manager → Performance, ghi CPU / Memory / Disk đang dùng bao nhiêu % và nhận xét máy đang khỏe hay yếu." },
            { id: "t10_3", text: "Vẽ bản đồ 4 lớp hệ thống máy tính của em trên giấy A4 (có mũi tên IPO và ví dụ thật), sau đó thuyết trình 3 phút cho bố mẹ nghe." }
        ],
        quiz: [
            { q: "Thứ tự 4 lớp của một hệ thống máy tính từ dưới lên là gì?", options: ["A. Dữ liệu → Ứng dụng → Hệ điều hành → Phần cứng", "B. Phần cứng → Hệ điều hành → Ứng dụng → Dữ liệu", "C. Ứng dụng → Phần cứng → Dữ liệu → Hệ điều hành", "D. Hệ điều hành → Dữ liệu → Phần cứng → Ứng dụng"], ans: 1, exp: "Phần cứng là nền, hệ điều hành quản lý phần cứng, ứng dụng chạy trên hệ điều hành và tạo ra dữ liệu." },
            { q: "CPU có nhiệm vụ chính là gì?", options: ["A. Lưu ảnh và video", "B. Xử lý tính toán và thực thi lệnh", "C. Hiển thị hình ảnh", "D. Cấp nguồn điện"], ans: 1, exp: "CPU là bộ xử lý trung tâm — nơi thực hiện các phép tính và lệnh của chương trình." },
            { q: "RAM khác ổ cứng ở điểm nào?", options: ["A. RAM giữ dữ liệu tạm thời và mất khi tắt máy; ổ cứng giữ dữ liệu lâu dài", "B. RAM to hơn ổ cứng", "C. RAM là nơi lưu ảnh, ổ cứng là nơi tính toán", "D. Không có gì khác"], ans: 0, exp: "RAM là bộ nhớ tạm cho công việc đang chạy; ổ cứng lưu tệp bền vững." },
            { q: "Windows 10 thuộc lớp nào trong bản đồ hệ thống?", options: ["A. Phần cứng", "B. Hệ điều hành", "C. Ứng dụng", "D. Dữ liệu"], ans: 1, exp: "Windows 10 là hệ điều hành, đứng giữa phần cứng và ứng dụng." },
            { q: "Notepad và Paint thuộc lớp nào?", options: ["A. Phần cứng", "B. Hệ điều hành", "C. Ứng dụng", "D. Dữ liệu"], ans: 2, exp: "Đây là các ứng dụng giúp người dùng thực hiện một công việc cụ thể." },
            { q: "Tệp BaiHoc.txt và ảnh AnhKyNiem.png thuộc lớp nào?", options: ["A. Phần cứng", "B. Hệ điều hành", "C. Ứng dụng", "D. Dữ liệu"], ans: 3, exp: "Tệp tin là dữ liệu — nội dung được tạo ra và lưu lại." },
            { q: "Khi bé bấm Save trong Notepad, dữ liệu được ghi ở đâu?", options: ["A. Vào CPU", "B. Vào ổ cứng thành tệp", "C. Vào màn hình", "D. Vào bàn phím"], ans: 1, exp: "Save ghi nội dung xuống ổ cứng (SSD/HDD) thành tệp để giữ lại sau khi tắt máy." },
            { q: "Muốn xem tên máy, CPU và RAM trên Windows 10, bé vào đâu?", options: ["A. Settings → System → About", "B. Paint → File", "C. Edge → History", "D. Recycle Bin"], ans: 0, exp: "Settings → System → About hiển thị Device name, Processor, Installed RAM và Windows edition." },
            { q: "Task Manager → Performance dùng để làm gì?", options: ["A. Đổi hình nền", "B. Xem CPU, RAM, Disk đang được dùng bao nhiêu", "C. Tạo thư mục mới", "D. In tài liệu"], ans: 1, exp: "Performance cho biểu đồ tài nguyên thời gian thực, giúp biết máy đang khỏe hay quá tải." },
            { q: "Bản đồ hệ thống máy tính giúp ích gì cho bé?", options: ["A. Hiểu các thành phần liên kết thế nào và giải thích máy hoạt động ra sao", "B. Làm máy chạy nhanh hơn ngay lập tức", "C. Xóa được virus", "D. Tăng dung lượng ổ cứng"], ans: 0, exp: "Bản đồ là công cụ tư duy: giúp nhìn thấy bức tranh tổng thể và giải thích hệ thống rõ ràng." }
        ]
    }
};
