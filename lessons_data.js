/**
 * BỘ DỮ LIỆU GIÁO TRÌNH: TỪ NGƯỜI DÙNG WINDOWS 10 ĐẾN NHÀ SÁNG TẠO PHẦN MỀM NHÍ
 * Dành cho lứa tuổi 10 tuổi — Chuẩn hóa trên môi trường Windows 10
 */

const LESSONS_DATABASE = [
    // ==========================================
    // CHƯƠNG 1: KHÁM PHÁ THẾ GIỚI MÁY TÍNH
    // ==========================================
    {
        id: 1,
        chapterId: 1,
        chapterTitle: "Chương 1 — Khám phá thế giới máy tính",
        title: "Máy tính là gì & Vòng lặp Xử lý IPO",
        badge: "Thám Tử Phần Cứng",
        desc: "Làm quen với cỗ máy vi tính thông minh, hiểu chu trình Xử lý Thông tin (Input - Process - Output) và tự tin ngồi trước màn hình Windows 10.",
        session1: `
            <h4>1. Máy tính không phải là phép thuật!</h4>
            <p>Rất nhiều bạn nhỏ nghĩ máy tính giống như một chiếc hộp thần kỳ biết tự làm mọi thứ. Nhưng thực ra, máy tính giống hệt một <strong>nhà bếp siêu tốc</strong>:</p>
            <img src="https://i.postimg.cc/qvmn0bR2/bai-1.png" alt="Minh họa Bài 1: Máy tính và vòng lặp xử lý Input - Process - Output" class="lesson-image">
            <div class="model-box">
                <div class="model-step"><strong>1. Đầu vào (Input)</strong><br>Nguyên liệu thô: Trứng, bột, đường<br><em>(Bé gõ phím, bấm chuột, nói vào mic)</em></div>
                <div class="model-arrow">➡️</div>
                <div class="model-step"><strong>2. Xử lý (Process)</strong><br>Đầu bếp chế biến theo công thức<br><em>(Bộ não CPU tính toán, thực thi lệnh)</em></div>
                <div class="model-arrow">➡️</div>
                <div class="model-step"><strong>3. Đầu ra (Output)</strong><br>Bánh kem thơm ngon dọn ra bàn<br><em>(Hình ảnh trên màn hình, âm thanh loa)</em></div>
            </div>
            <p>Mỗi khi bé nhấn một phím chữ cái hoặc bấm vào một nhân vật trong game, bé vừa gửi một nguyên liệu <strong>Input</strong>. Máy tính xử lý trong chớp mắt và trả về kết quả <strong>Output</strong>!</p>
        `,
        session2: `
            <h4>2. Thao tác thực chiến trên Windows 10</h4>
            <p>Hãy chứng kiến tốc độ xử lý siêu việt của máy tính ngay trên chiếc máy tính của bé:</p>
            <div class="win10-box">
                <span class="win10-tag">Thao tác Windows 10</span>
                <ol>
                    <li>Nhấn tổ hợp phím <strong>Windows + S</strong> (hoặc bấm vào biểu tượng Kính lúp ở góc dưới cùng bên trái màn hình).</li>
                    <li>Gõ chữ <code>Calculator</code> rồi bấm phím <strong>Enter</strong> để khởi động ứng dụng Máy tính.</li>
                    <li>Nhập phép tính: <code>987654 x 321</code> và bấm dấu <code>=</code>. Kết quả hiện ra ngay lập tức! Bộ não của máy tính đã giải bài toán này trong chưa đầy 1 phần triệu giây.</li>
                    <li>Tiếp tục bấm <strong>Windows + R</strong>, gõ <code>notepad</code> và Enter để mở Sổ tay ghi chú. Gõ câu đầu tiên của bé: <em>"Xin chào Windows 10, tôi là lập trình viên nhí!"</em>.</li>
                </ol>
            </div>
        `,
        session3: `
            <h4>3. Thế giới các loại máy tính quanh em</h4>
            <p>Máy tính không chỉ có hình dáng chiếc thùng sắt đặt trên bàn học:</p>
            <img src="https://i.postimg.cc/k4GMdCG7/maytinh.png" alt="Minh họa các loại máy tính quanh em: Desktop, Laptop, Tablet và Smartphone" class="lesson-image">
            <ul>
                <li><strong>Desktop (Máy tính bàn):</strong> Thân máy to, màn hình rộng, bàn phím và chuột tách rời. Rất mạnh mẽ và bền bỉ.</li>
                <li><strong>Laptop (Máy tính xách tay):</strong> Gom màn hình, pin và bàn phím vào một khối nhỏ gọn, dễ dàng gập lại mang đi học.</li>
                <li><strong>Tablet & Smartphone (Máy tính bảng & Điện thoại):</strong> Máy tính bỏ túi với màn hình cảm ứng.</li>
                <li><strong>Máy tính nhúng (Embedded):</strong> Chip máy tính siêu nhỏ nằm ẩn bên trong máy giặt, tivi thông minh, xe ô tô và robot hút bụi.</li>
            </ul>
        `,
        tasks: [
            { id: "t1_1", text: "Mở ứng dụng Calculator trên Windows 10, tính xem 1 ngày có bao nhiêu giây: 24 x 60 x 60." },
            { id: "t1_2", text: "Mở Notepad, gõ 3 điều bé tò mò nhất về máy tính và lưu lại trên màn hình Desktop với tên 'GhiChuDauTien.txt'." },
            { id: "t1_3", text: "Tìm trong nhà 3 đồ vật có gắn vi mạch máy tính bên trong và ghi tên chúng ra giấy." }
        ],
        quiz: [
            { q: "Mô hình xử lý dữ liệu cơ bản của máy tính là gì?", options: ["A. Chơi game → Tắt máy → Cắm sạc", "B. Input (Đầu vào) → Process (Xử lý) → Output (Đầu ra)", "C. Màn hình → Bàn phím → Chuột", "D. Tải xuống → Xóa tệp → Khởi động lại"], ans: 1, exp: "Mô hình IPO (Input - Process - Output) là nguyên lý hoạt động nền tảng của mọi hệ thống máy tính." },
            { q: "Thiết bị nào sau đây thuộc nhóm Đầu vào (Input)?", options: ["A. Màn hình", "B. Bàn phím", "C. Loa phát thanh", "D. Máy in màu"], ans: 1, exp: "Bàn phím đưa chữ và số do con người gõ vào máy tính xử lý nên là thiết bị Input." },
            { q: "Thiết bị nào sau đây thuộc nhóm Đầu ra (Output)?", options: ["A. Chuột máy tính", "B. Màn hình hiển thị", "C. Webcam", "D. Bàn vẽ cảm ứng"], ans: 1, exp: "Màn hình xuất hình ảnh cho mắt con người nhìn thấy, là thiết bị Output." },
            { q: "Phím tắt mở thanh tìm kiếm trên Windows 10 là gì?", options: ["A. Ctrl + C", "B. Win + S", "C. Alt + F4", "D. Shift + Delete"], ans: 1, exp: "Tổ hợp phím Win + S (Search) mở nhanh thanh tìm kiếm của Windows 10." },
            { q: "Điểm khác biệt lớn nhất giữa Laptop và Desktop là gì?", options: ["A. Laptop không có hệ điều hành", "B. Laptop tích hợp sẵn màn hình, bàn phím và có pin mang đi được", "C. Laptop không tính toán được", "D. Laptop không thể kết nối Internet"], ans: 1, exp: "Laptop tích hợp trọn vẹn màn hình, linh kiện và pin dự phòng trong một thân máy gọn nhẹ." },
            { q: "Phần nào của máy tính thực hiện các phép tính và chỉ huy mọi bộ phận?", options: ["A. Chuột máy tính", "B. CPU (Bộ vi xử lý)", "C. Vỏ máy tính", "D. Dây nguồn"], ans: 1, exp: "CPU (Central Processing Unit) được mệnh danh là bộ não chỉ huy của máy tính." },
            { q: "Khi nhấn Win + R và gõ 'notepad', ứng dụng nào sẽ mở ra?", options: ["A. Máy tính bỏ túi", "B. Trình duyệt web", "C. Sổ tay soạn thảo văn bản đơn giản", "D. Game dò mìn"], ans: 2, exp: "Notepad là trình soạn thảo văn bản thuần túy được cài sẵn trên Windows." },
            { q: "Máy tính có tự hiểu suy nghĩ của bé mà không cần nhận chỉ dẫn không?", options: ["A. Có, máy tính tự biết mọi điều", "B. Không, máy tính chỉ làm theo các chỉ dẫn lập trình được đưa vào", "C. Chỉ khi máy tính cắm điện", "D. Tùy thuộc vào màn hình to hay nhỏ"], ans: 1, exp: "Máy tính không tự suy nghĩ; nó thực hiện chính xác chỉ dẫn của các phần mềm." },
            { q: "Tivi thông minh trong phòng khách có được coi là một dạng máy tính không?", options: ["A. Có, vì nó có chip vi xử lý, bộ nhớ và hệ điều hành bên trong", "B. Không, tivi chỉ là tấm gương", "C. Chỉ là thiết bị cơ khí", "D. Không có dòng điện"], ans: 0, exp: "Tivi thông minh là một dạng máy tính nhúng chuyên biệt phục vụ giải trí." },
            { q: "Ứng dụng Calculator trên Windows 10 có vai trò gì?", options: ["A. Vẽ tranh hoạt hình", "B. Giúp tính toán các phép tính số học chuẩn xác", "C. Xem phim hoạt hình", "D. Quét virus"], ans: 1, exp: "Calculator là công cụ máy tính bỏ túi hỗ trợ tính toán tức thì." }
        ]
    },
    {
        id: 2,
        chapterId: 1,
        chapterTitle: "Chương 1 — Khám phá thế giới máy tính",
        title: "Phần cứng và Phần mềm phối hợp",
        badge: "Bác Sĩ Máy Tính",
        desc: "Phân biệt rõ ràng giữa Phần cứng (thân xác) và Phần mềm (trí tuệ), hiểu cách chúng bắt tay nhau để mở một trò chơi trên Windows 10.",
        session1: `
            <h4>1. Thân xác và Trí tuệ của máy tính</h4>
            <p>Hãy liên tưởng chiếc máy tính giống như một con người:</p>
            <img src="https://i.postimg.cc/jj6wXBnc/tritue-maytinh.png" alt="Minh họa Bài 2 Buổi 1: Phần cứng là thân xác - Phần mềm là trí tuệ máy tính" class="lesson-image">
            <ul>
                <li><strong>Phần cứng (Hardware):</strong> Là những bộ phận cơ thể bé có thể nhìn thấy, sờ chạm và cầm nắm được (Vỏ máy, màn hình, bàn phím, chuột, bo mạch chủ, quạt tản nhiệt).</li>
                <li><strong>Phần mềm (Software):</strong> Là suy nghĩ, ký ức và kiến thức vô hình bên trong não bộ (Hệ điều hành Windows 10, trình duyệt Edge, game Minecraft, bài hát MP3).</li>
            </ul>
            <div class="note-box">
                👉 Không có phần cứng, phần mềm không có nơi trú ngụ.<br>
                👉 Không có phần mềm, phần cứng chỉ là một khối sắt vô tri nằm im lìm!
            </div>
        `,
        session2: `
            <h4>2. Soi lý lịch phần cứng trên Windows 10</h4>
            <div class="win10-box">
                <span class="win10-tag">Khám phá cấu hình Windows 10</span>
                <ol>
                    <li>Bấm chuột phải vào biểu tượng nút <strong>Start</strong> (hình cửa sổ ở góc dưới bên trái).</li>
                    <li>Trong menu vừa hiện lên, nhấp chọn dòng <strong>System</strong> (Hệ thống).</li>
                    <li>Cửa sổ thông tin xuất hiện! Bé hãy quan sát:
                        <ul>
                            <li><strong>Device name:</strong> Tên máy tính của bé.</li>
                            <li><strong>Processor:</strong> Tên chip não bộ CPU (Intel Core i3/i5/i7 hoặc AMD Ryzen).</li>
                            <li><strong>Installed RAM:</strong> Dung lượng bộ nhớ bàn làm việc (4GB, 8GB hoặc 16GB).</li>
                            <li><strong>Windows edition:</strong> Phiên bản Windows 10 Home hoặc Windows 10 Pro.</li>
                        </ul>
                    </li>
                </ol>
            </div>
        `,
        session3: `
            <h4>3. Khi một trò chơi khởi động, chuyện gì xảy ra?</h4>
            <img src="https://i.postimg.cc/7Pjzq14N/hoatdong.png" alt="Minh họa Bài 2 Buổi 3: Cách phần cứng và phần mềm phối hợp khi mở trò chơi" class="lesson-image">
            <ol>
                <li>Bé bấm đúp chuột vào biểu tượng trò chơi (Phần cứng chuột báo tín hiệu).</li>
                <li>Hệ điều hành Windows 10 (Phần mềm hệ thống) tiếp nhận lệnh và ra lệnh cho Ổ cứng SSD (Phần cứng) nạp tệp dữ liệu lên RAM.</li>
                <li>CPU và Card đồ họa GPU xử lý các phép toán 3D, sau đó xuất hình ảnh ra Màn hình (Phần cứng) và xuất âm thanh ra Loa.</li>
            </ol>
        `,
        tasks: [
            { id: "t2_1", text: "Mở cửa sổ System trên Windows 10, ghi lại chính xác tên chip CPU và dung lượng RAM của máy." },
            { id: "t2_2", text: "Lập danh sách 3 phần cứng gắn ngoài đang kết nối với máy tính qua cổng USB." },
            { id: "t2_3", text: "Vẽ một bức tranh nhỏ phân biệt Hardware (hình chiếc máy) và Software (hình đám mây chứa icon phần mềm)." }
        ],
        quiz: [
            { q: "Phần cứng (Hardware) máy tính là gì?", options: ["A. Các trang web xem phim", "B. Các linh kiện vật lý có thể nhìn thấy và chạm tay vào được", "C. Các trò chơi cài trên mạng", "D. Âm nhạc phát ra từ loa"], ans: 1, exp: "Hardware bao gồm toàn bộ thiết bị vật lý cấu thành máy tính." },
            { q: "Cái nào sau đây là PHẦN MỀM?", options: ["A. Chuột quang", "B. Bàn phím cơ", "C. Hệ điều hành Windows 10", "D. Màn hình máy tính"], ans: 2, exp: "Windows 10 là phần mềm hệ điều hành điều khiển máy tính." },
            { q: "Để mở nhanh bảng thông số cấu hình System trên Windows 10, bé nhấp chuột phải vào đâu?", options: ["A. Nút Start góc trái màn hình", "B. Khoảng trống trên bàn làm việc thật", "C. Thùng rác Recycle Bin", "D. Nút tăng âm lượng"], ans: 0, exp: "Bấm chuột phải vào Start mở menu Power User (Win + X) có mục System." },
            { q: "Nếu chiếc máy tính có phần cứng cực kỳ đắt tiền nhưng không cài phần mềm nào, máy sẽ thế nào?", options: ["A. Vẫn chơi game mượt mà", "B. Không thể khởi động vào màn hình làm việc để sử dụng", "C. Tự động kết nối mạng xã hội", "D. Biến thành máy in"], ans: 1, exp: "Thiếu phần mềm, máy tính không có chỉ dẫn hoạt động nên không dùng được." },
            { q: "Card đồ họa (GPU) chuyên phụ trách nhiệm vụ gì?", options: ["A. Đun nước sôi", "B. Xử lý tính toán hình ảnh, màu sắc và hiệu ứng 3D", "C. Phát ra tiếng gió", "D. Lưu trữ văn bản"], ans: 1, exp: "GPU (Graphics Processing Unit) là chuyên gia vẽ các khung hình đồ họa và game." },
            { q: "Cổng cắm hình chữ nhật dẹt phổ biến trên máy tính dùng cắm chuột và USB tên là gì?", options: ["A. Cổng HDMI", "B. Cổng USB", "C. Cổng mạng LAN", "D. Cổng Audio"], ans: 1, exp: "Cổng USB (Universal Serial Bus) là chuẩn kết nối ngoại vi phổ biến nhất thế giới." },
            { q: "Trình duyệt Google Chrome hoặc Microsoft Edge thuộc nhóm nào?", options: ["A. Phần cứng", "B. Phần mềm ứng dụng", "C. Thiết bị lưu trữ", "D. Bo mạch chủ"], ans: 1, exp: "Trình duyệt web là phần mềm ứng dụng do con người lập trình ra." },
            { q: "Bộ phận nào cấp điện năng cho toàn bộ linh kiện trong máy tính bàn hoạt động?", options: ["A. Nguồn máy tính (Power Supply Unit - PSU)", "B. Màn hình", "C. Chuột", "D. Tai nghe"], ans: 0, exp: "Bộ nguồn PSU chuyển đổi dòng điện lưới để nuôi các linh kiện bên trong." },
            { q: "Tại sao phần mềm lại được gọi là 'vô hình'?", options: ["A. Vì nó làm bằng thủy tinh", "B. Vì nó tồn tại dưới dạng các dòng mã nhị phân và tín hiệu điện tử bên trong bộ nhớ", "C. Vì người lớn giấu đi", "D. Vì nó chỉ hoạt động vào ban đêm"], ans: 1, exp: "Phần mềm là dữ liệu và thuật toán số học, không có hình khối vật lý." },
            { q: "Hành động cắm thêm một chiếc USB vào máy tính là thao tác với cái gì?", options: ["A. Thêm một phần cứng lưu trữ ngoại vi", "B. Cài đặt một trang web", "C. Tắt máy", "D. Xóa Windows"], ans: 0, exp: "USB flash drive là một thiết bị phần cứng cắm ngoài." }
        ]
    },
    {
        id: 3,
        chapterId: 1,
        chapterTitle: "Chương 1 — Khám phá thế giới máy tính",
        title: "Bộ ba: CPU, RAM và Ổ Cứng Lưu Trữ",
        badge: "Kỹ Sư Bộ Nhớ",
        desc: "Thấu hiểu nguyên lý làm việc của Bộ ba nguyên tử: Não bộ CPU, Bàn học RAM và Tủ kho tài liệu SSD/HDD trên Windows 10.",
        session1: `
            <h4>1. Câu chuyện căn phòng làm việc của Giáo sư Máy Tính</h4>
            <div class="model-box">
                <div class="model-step">
                    <strong>🧠 Não bộ CPU</strong><br>
                    Là Giáo Sư thông thái ngồi giữa phòng, tay cầm bút tính toán hàng triệu bài toán mỗi giây.
                </div>
                <div class="model-step">
                    <strong>🪑 Mặt bàn học RAM</strong><br>
                    Nơi Giáo sư bày những cuốn vở ĐANG LÀM RA BÀN. Bàn càng rộng thì bày được càng nhiều bài tập cùng lúc. Tối đi ngủ tắt đèn (tắt máy), mặt bàn bị dọn sạch bong!
                </div>
                <div class="model-step">
                    <strong>🗄️ Tủ sách Ổ CỨNG (SSD/HDD)</strong><br>
                    Nơi cất giữ sách vở lâu năm. Dù cúp điện hay khóa cửa đi chơi 1 tháng, sách trong tủ vẫn còn nguyên vẹn!
                </div>
            </div>
            <p><strong>Khác biệt sống còn:</strong> RAM là bộ nhớ <em>tạm thời</em> (mất điện là mất hết). Ổ cứng SSD/HDD là bộ nhớ <em>vĩnh viễn</em> (mất điện dữ liệu vẫn an toàn).</p>
        `,
        session2: `
            <h4>2. Quan sát nhịp tim CPU và RAM qua Task Manager Windows 10</h4>
            <div class="win10-box">
                <span class="win10-tag">Bí kíp Task Manager</span>
                <ol>
                    <li>Nhấn đồng thời 3 phím: <strong>Ctrl + Shift + Esc</strong>. Đây là phím tắt thần thánh để bật bảng <strong>Task Manager</strong>.</li>
                    <li>Bấm vào tab <strong>Performance</strong> ở thanh trên cùng.</li>
                    <li>Quan sát đồ thị nhấp nhô màu xanh:
                        <ul>
                            <li><strong>CPU:</strong> Xem biểu đồ sóng não. Nếu vọt lên 100%, nghĩa là CPU đang làm việc hết công suất!</li>
                            <li><strong>Memory (RAM):</strong> Xem máy đang dùng bao nhiêu GB (Ví dụ: 3.2 / 7.9 GB).</li>
                            <li><strong>Disk (Ổ đĩa):</strong> Tốc độ đọc và ghi dữ liệu của ổ SSD.</li>
                        </ul>
                    </li>
                </ol>
            </div>
        `,
        session3: `
            <h4>3. Vì sao máy tính đôi khi bị đơ, giật lag?</h4>
            <p>Nếu mặt bàn (RAM) của bé chỉ rộng 4GB, nhưng bé mở cùng lúc 1 game Minecraft + mở video Youtube + 15 tab Google Chrome, mặt bàn sẽ bị tràn kín chỗ!</p>
            <p>Khi đó, Giáo sư CPU phải mất công cất bớt sách vào tủ rồi lại lấy ra, khiến máy tính phản hồi chậm chạp. Bí kíp của dân chuyên nghiệp: <em>Hãy đóng bớt các tab và phần mềm không dùng để giải phóng RAM!</em></p>
        `,
        tasks: [
            { id: "t3_1", text: "Bấm tổ hợp phím Ctrl + Shift + Esc mở Task Manager và quan sát đồ thị nhịp tim của CPU." },
            { id: "t3_2", text: "Kiểm tra xem máy tính của bé có tổng cộng bao nhiêu GB RAM trong tab Performance." },
            { id: "t3_3", text: "Thử mở liên tiếp 5 ứng dụng khác nhau rồi nhìn xem phần trăm RAM (Memory) có tăng lên không." }
        ],
        quiz: [
            { q: "Bộ nhớ RAM có đặc tính gì nổi bật nhất?", options: ["A. Lưu trữ dữ liệu vĩnh viễn không bao giờ mất", "B. Là bộ nhớ tạm thời, khi tắt máy hoặc mất điện sẽ bị xóa sạch", "C. Làm từ giấy", "D. Dùng để in ảnh"], ans: 1, exp: "RAM (Random Access Memory) là bộ nhớ khả biến, cần nguồn điện liên tục để duy trì dữ liệu." },
            { q: "Thiết bị nào chịu trách nhiệm lưu trữ bài hát, ảnh và hệ điều hành lâu dài khi tắt máy?", options: ["A. Bộ nhớ RAM", "B. Ổ đĩa cứng (SSD hoặc HDD)", "C. Con chuột", "D. Dây cáp mạng"], ans: 1, exp: "Ổ đĩa cứng lưu trữ dữ liệu vĩnh viễn trên các phiến đĩa từ hoặc chip nhớ flash." },
            { q: "Tổ hợp phím tắt nhanh nhất trên Windows 10 để mở Task Manager là gì?", options: ["A. Ctrl + Shift + Esc", "B. Ctrl + Alt + Delete", "C. Win + Space", "D. Alt + Tab"], ans: 0, exp: "Ctrl + Shift + Esc mở trực tiếp Task Manager mà không qua màn hình bảo mật trung gian." },
            { q: "Tại sao ổ cứng thể rắn SSD lại được ưa chuộng hơn ổ cơ HDD đời cũ?", options: ["A. Vì SSD to và nặng hơn", "B. Vì SSD chạy nhanh gấp nhiều lần, êm ái và chống va đập tốt hơn", "C. Vì SSD phát ra tiếng kêu to", "D. Vì SSD không cần cắm điện"], ans: 1, exp: "SSD dùng chip nhớ điện tử siêu tốc độ, giúp Windows 10 khởi động chỉ mất vài giây." },
            { q: "CPU được viết tắt từ cụm từ tiếng Anh nào?", options: ["A. Central Processing Unit", "B. Computer Personal Utility", "C. Core Program Universal", "D. Center Power USB"], ans: 0, exp: "CPU là Central Processing Unit (Bộ xử lý trung tâm)." },
            { q: "Hiện tượng máy tính bị 'treo' khi mở quá nhiều cửa sổ thường do thiếu tài nguyên gì?", options: ["A. Thiếu mực in", "B. Cạn kiệt bộ nhớ RAM và CPU bị nghẽn 100%", "C. Hết pin chuột", "D. Màn hình bị tối"], ans: 1, exp: "Khi RAM đầy tràn và CPU quá tải, hệ điều hành không còn chỗ để xử lý lệnh mới." },
            { q: "1 Gigabyte (GB) xấp xỉ bằng bao nhiêu Megabyte (MB)?", options: ["A. 10 MB", "B. 100 MB", "C. 1024 MB", "D. 10000 MB"], ans: 2, exp: "1 GB = 1024 MB theo hệ đếm nhị phân của công nghệ thông tin." },
            { q: "Trong Task Manager, tab nào cho xem biểu đồ sử dụng phần cứng theo thời gian thực?", options: ["A. Processes", "B. Performance", "C. Users", "D. Details"], ans: 1, exp: "Tab Performance hiển thị trực quan đồ thị sóng của CPU, Memory, Disk và GPU." },
            { q: "Để máy tính chạy nhanh hơn khi vừa khởi động xong, bé nên làm gì?", options: ["A. Đóng các ứng dụng chạy ngầm không cần thiết", "B. Đập tay vào thùng máy", "C. Bấm liên tục chuột trái", "D. Rút dây cắm màn hình"], ans: 0, exp: "Tắt ứng dụng chạy ngầm giúp trả lại mặt bàn RAM sạch sẽ cho máy tính." },
            { q: "Đơn vị đo xung nhịp tốc độ của CPU thường là gì?", options: ["A. Kilomet trên giờ (km/h)", "B. Gigahertz (GHz)", "C. Lít (L)", "D. Megapixel (MP)"], ans: 1, exp: "Tần số hoạt động của vi xử lý CPU được đo bằng Gigahertz (tỷ chu kỳ mỗi giây)." }
        ]
    },

    // ==========================================
    // CHƯƠNG 2: LÀM CHỦ WINDOWS 10
    // ==========================================
    {
        id: 11,
        chapterId: 2,
        chapterTitle: "Chương 2 — Làm chủ Windows 10",
        title: "Desktop, Start Menu và Thanh Taskbar",
        badge: "Phù Thủy Màn Hình Nền",
        desc: "Làm chủ bộ mặt chính của Windows 10: Tổ chức bàn làm việc Desktop ngăn nắp, làm chủ các ô Live Tiles trên Start Menu và ghim app vào Taskbar.",
        session1: `
            <h4>1. Ba khu vực quyền lực trên màn hình Windows 10</h4>
            <div class="note-box">
                🖥️ <strong>1. Bàn làm việc Desktop:</strong> Mặt bàn ảo chính, nơi đặt các biểu tượng (Icon) lối tắt để mở bài học nhanh.<br>
                🚀 <strong>2. Nút Start Menu:</strong> Cánh cổng dẫn tới tất cả kho tàng phần mềm cài trong máy.<br>
                📌 <strong>3. Thanh tác vụ Taskbar:</strong> Chiếc khay nằm ngang dưới cùng, giữ những công cụ quan trọng nhất luôn sẵn sàng.
            </div>
            <p><strong>Đặc sản Live Tiles của Windows 10:</strong> Khi mở Start Menu, phía bên phải có những ô gạch nhiều màu sắc tự cập nhật tin tức, thời tiết hoặc hình ảnh sinh động!</p>
        `,
        session2: `
            <h4>2. Biến Taskbar thành trợ thủ đắc lực</h4>
            <div class="win10-box">
                <span class="win10-tag">Mẹo Ghim Ứng Dụng Chuẩn Windows 10</span>
                <ol>
                    <li>Bấm phím <strong>Windows</strong> trên bàn phím để mở Start Menu.</li>
                    <li>Cuộn danh sách ứng dụng bên trái xuống chữ <strong>P</strong>, tìm phần mềm <strong>Paint</strong> (hoặc gõ chữ <code>Paint</code>).</li>
                    <li>Bấm <strong>chuột phải</strong> vào biểu tượng Paint -> chọn <strong>More</strong> -> chọn <strong>Pin to taskbar</strong> (Ghim vào thanh tác vụ).</li>
                    <li>Nhìn xuống đáy màn hình: Biểu tượng hộp màu Paint đã nằm cố định ở đó! Từ nay, chỉ cần 1 cú nhấp chuột duy nhất là có thể mở ngay mà không cần tìm kiếm.</li>
                </ol>
            </div>
        `,
        session3: `
            <h4>3. Dọn dẹp bàn học Desktop gọn gàng</h4>
            <p>Một màn hình Desktop bừa bãi chứa hàng trăm tệp tin sẽ khiến bé mất thời gian tìm kiếm và làm máy khởi động chậm hơn.</p>
            <ul>
                <li>Bấm chuột phải vào vùng trống trên Desktop -> chọn <strong>View</strong> -> chọn <strong>Auto arrange icons</strong> để các icon tự động xếp ngay ngắn thẳng hàng.</li>
                <li>Bấm <strong>Win + A</strong> để mở trung tâm điều khiển <strong>Action Center</strong> ở góc phải, thử bật tính năng <strong>Night light</strong> để chuyển màn hình sang ánh sáng vàng ấm bảo vệ mắt ban đêm!</li>
            </ul>
        `,
        tasks: [
            { id: "t11_1", text: "Ghim 3 phần mềm bé dùng nhiều nhất (Notepad, Paint, Calculator) xuống thanh Taskbar." },
            { id: "t11_2", text: "Mở Start Menu, bấm chuột phải vào một ô gạch Live Tile bất kỳ và đổi kích thước của nó (Resize) sang Medium hoặc Small." },
            { id: "t11_3", text: "Bấm tổ hợp phím Win + A mở Action Center và kiểm tra xem chế độ Night Light đang Bật hay Tắt." }
        ],
        quiz: [
            { q: "Phím nào trên bàn phím dùng để mở tức thì Start Menu trên Windows 10?", options: ["A. Phím Windows (biểu tượng 4 ô cửa sổ)", "B. Phím Esc", "C. Phím Space", "D. Phím Backspace"], ans: 0, exp: "Phím Windows nằm giữa phím Ctrl và Alt dùng để đóng/mở Start Menu." },
            { q: "Thao tác 'Pin to taskbar' có tác dụng gì?", options: ["A. Xóa phần mềm khỏi máy", "B. Ghim biểu tượng phần mềm xuống thanh tác vụ dưới đáy màn hình", "C. Đổi màu màn hình", "D. Tắt máy"], ans: 1, exp: "Pin to taskbar gắn cố định ứng dụng lên thanh tác vụ để mở nhanh bằng 1 click." },
            { q: "Các ô gạch vuông nhiều màu sắc nằm bên phải Start Menu của Windows 10 gọi là gì?", options: ["A. Live Tiles", "B. Task Manager", "C. File Explorer", "D. Icon Desktop"], ans: 0, exp: "Live Tiles là thiết kế giao diện động đặc trưng của Windows 10." },
            { q: "Tổ hợp phím tắt mở trung tâm thông báo và cài đặt nhanh Action Center trên Windows 10 là gì?", options: ["A. Win + A", "B. Win + D", "C. Win + E", "D. Win + L"], ans: 0, exp: "Win + A (Action) trượt bảng Action Center từ cạnh phải màn hình ra." },
            { q: "Tính năng Night Light trên Windows 10 giúp ích gì cho bé?", options: ["A. Tăng âm lượng loa", "B. Lọc bớt ánh sáng xanh gây mỏi mắt, giúp bảo vệ mắt vào buổi tối", "C. Làm máy chạy nhanh gấp đôi", "D. Khóa bàn phím"], ans: 1, exp: "Night Light ngả màu màn hình sang tông ấm giúp mắt không bị căng thẳng khi dùng ban đêm." },
            { q: "Để dọn các biểu tượng trên Desktop tự động thẳng hàng, ta dùng tùy chọn nào trong menu View?", options: ["A. Large icons", "B. Auto arrange icons", "C. Delete all", "D. Hidden items"], ans: 1, exp: "Auto arrange icons tự động căn chỉnh trật tự các biểu tượng trên màn hình." },
            { q: "Khay hệ thống (System Tray) nằm ở vị trí nào trên thanh Taskbar?", options: ["A. Ở chính giữa", "B. Góc dưới cùng bên phải (cạnh đồng hồ và biểu tượng Wifi)", "C. Góc trên cùng bên trái", "D. Nằm ẩn sau màn hình"], ans: 1, exp: "Góc phải thanh Taskbar là System Tray hiển thị ngày giờ, pin, mạng và loa." },
            { q: "Khi một ứng dụng đang mở, biểu tượng của nó trên Taskbar có dấu hiệu gì?", options: ["A. Bị đổi màu đỏ", "B. Có một gạch sáng nhỏ nằm ngay dưới chân biểu tượng", "C. Biến mất hoàn toàn", "D. Rung lắc liên tục"], ans: 1, exp: "Windows 10 hiển thị một vạch gạch ngang nhỏ dưới biểu tượng để báo hiệu ứng dụng đang chạy." },
            { q: "Muốn bỏ ghim một ứng dụng khỏi Taskbar, bé bấm chuột phải vào biểu tượng đó rồi chọn gì?", options: ["A. Unpin from taskbar", "B. Delete file", "C. Close all", "D. Rename"], ans: 0, exp: "Unpin from taskbar gỡ ứng dụng khỏi thanh tác vụ mà không làm mất phần mềm." },
            { q: "Tổ hợp phím Win + D có phép thuật kỳ diệu nào?", options: ["A. Tắt máy ngay lập tức", "B. Ẩn tất cả cửa sổ để quay về màn hình Desktop tức thì", "C. Xóa hết tệp tin", "D. Bật nhạc"], ans: 1, exp: "Win + D (Desktop) lập tức thu nhỏ mọi cửa sổ để lộ màn hình Desktop sạch sẽ." }
        ]
    },
    {
        id: 14,
        chapterId: 2,
        chapterTitle: "Chương 2 — Làm chủ Windows 10",
        title: "File Explorer & Bí Ẩn Phần Mở Rộng Tệp (.ext)",
        badge: "Thuyền Trưởng Thư Mục",
        desc: "Làm chủ File Explorer trên Windows 10, khai phá sức mạnh thanh Ribbon và mở khóa bí mật đuôi tệp tin mà trường học ít dạy bé.",
        session1: `
            <h4>1. Thành phố tệp tin và cây thư mục</h4>
            <p>Mỗi dữ liệu trong máy tính đều có một 'địa chỉ nhà' rõ ràng:</p>
            <div class="model-box">
                <div class="model-step"><strong>Ổ đĩa (Drive)</strong><br>Tòa chung cư lớn: Ổ C: (Chứa Windows), Ổ D: (Chứa bài học)</div>
                <div class="model-arrow">➡️</div>
                <div class="model-step"><strong>Thư mục (Folder)</strong><br>Căn hộ & từng ngăn tủ có dán nhãn phân loại</div>
                <div class="model-arrow">➡️</div>
                <div class="model-step"><strong>Tệp tin (File)</strong><br>Đồ vật cụ thể: Bức tranh, bài hát, tệp mã lệnh</div>
            </div>
            <p><strong>Bí mật đuôi tệp (File Extension):</strong> Tên một tệp luôn gồm 2 phần ngăn cách bởi dấu chấm: <code>TenTep.duoi</code>. Đuôi tệp cho Windows biết cần dùng ứng dụng nào để mở nó!</p>
        `,
        session2: `
            <h4>2. Bật tính năng 'Hiển thị đuôi tệp' trên Windows 10</h4>
            <div class="win10-box">
                <span class="win10-tag">Khám phá Ribbon trên Windows 10 File Explorer</span>
                <ol>
                    <li>Bấm phím <strong>Windows + E</strong> để mở trình quản lý tệp <strong>File Explorer</strong>.</li>
                    <li>Nhìn lên thanh công cụ <strong>Ribbon</strong> phía trên cùng, bấm vào tab <strong>View</strong>.</li>
                    <li>Tìm ô vuông có chữ <strong>File name extensions</strong> và TÍCH CHỌN VÀO ĐÓ.</li>
                    <li>Bây giờ bé sẽ nhìn thấy toàn bộ 'bí mật' của các tệp tin:
                        <ul>
                            <li><code>.txt</code>: Tệp văn bản thuần túy của Notepad.</li>
                            <li><code>.png</code> / <code>.jpg</code>: Tệp hình ảnh bức vẽ.</li>
                            <li><code>.mp3</code>: Tệp bài hát âm thanh.</li>
                            <li><code>.html</code>: Tệp trang web bé sẽ tự viết ở Chương 5!</li>
                        </ul>
                    </li>
                </ol>
            </div>
        `,
        session3: `
            <h4>3. Những phím tắt quản lý tệp quyền năng</h4>
            <ul>
                <li><strong>Ctrl + Shift + N:</strong> Tạo thư mục mới (New Folder) trong 1 giây mà không cần bấm chuột phải.</li>
                <li><strong>F2:</strong> Đổi tên (Rename) tệp hoặc thư mục đang chọn.</li>
                <li><strong>Ctrl + C / Ctrl + V:</strong> Sao chép (Copy) và Dán (Paste) tệp sang nơi khác.</li>
                <li><strong>Ctrl + Z:</strong> Cứu cánh hoàn tác (Undo) nếu lỡ tay xóa nhầm hoặc di chuyển nhầm chỗ!</li>
            </ul>
        `,
        tasks: [
            { id: "t14_1", text: "Bấm Win + E mở File Explorer, vào tab View và tích chọn 'File name extensions'." },
            { id: "t14_2", text: "Tại thư mục Documents, dùng phím tắt Ctrl + Shift + N tạo thư mục tên 'HocTap_Win10'." },
            { id: "t14_3", text: "Tạo một tệp Notepad trong thư mục đó, đổi tên thành 'BaiHoc.txt' và kiểm tra xem đuôi .txt có hiển thị rõ ràng không." }
        ],
        quiz: [
            { q: "Phím tắt kinh điển để mở File Explorer trên Windows 10 là gì?", options: ["A. Win + E", "B. Win + F", "C. Ctrl + E", "D. Alt + E"], ans: 0, exp: "Win + E (Explorer) là phím tắt tiêu chuẩn mở trình quản lý tệp." },
            { q: "Thanh công cụ chứa các tab Home, Share, View trên Windows 10 có tên gọi là gì?", options: ["A. Thanh Taskbar", "B. Thanh Ribbon", "C. Thanh Dock", "D. Menu Start"], ans: 1, exp: "Thanh Ribbon là dải công cụ trực quan phía trên cửa sổ File Explorer của Windows 10." },
            { q: "Tổ hợp phím tạo nhanh một thư mục mới (New Folder) là gì?", options: ["A. Ctrl + Shift + N", "B. Ctrl + N", "C. Alt + N", "D. Win + N"], ans: 0, exp: "Ctrl + Shift + N lập tức tạo thư mục mới tại vị trí đang mở." },
            { q: "Phần mở rộng (đuôi tệp) .png hoặc .jpg cho biết đây là loại dữ liệu gì?", options: ["A. Tệp hình ảnh", "B. Tệp bài hát âm thanh", "C. Tệp cài đặt phần mềm", "D. Tệp virus"], ans: 0, exp: ".png và .jpg là hai định dạng lưu trữ hình ảnh phổ biến nhất thế giới." },
            { q: "Nếu bé đổi tên tệp từ 'BucTranh.png' thành 'BucTranh.txt', điều gì sẽ xảy ra?", options: ["A. Bức tranh biến thành bức thư", "B. Định dạng bên trong không đổi, nhưng máy tính sẽ bị nhầm lẫn khi chọn phần mềm mở tệp", "C. Máy tính bị sập nguồn", "D. Tệp tự động bị xóa"], ans: 1, exp: "Đổi đuôi tệp bằng tay không làm đổi dữ liệu gốc mà khiến máy tính hiểu sai loại tệp." },
            { q: "Phím tắt F2 trên bàn phím có tác dụng gì khi đang chọn một tệp tin?", options: ["A. Xóa tệp", "B. Đổi tên tệp (Rename)", "C. In tệp ra giấy", "D. Thu nhỏ cửa sổ"], ans: 1, exp: "Phím F2 kích hoạt chế độ đổi tên tệp tin cực kỳ nhanh chóng." },
            { q: "Ổ đĩa nào trên máy tính thường là nơi cài đặt hệ thống Windows 10?", options: ["A. Ổ đĩa C:", "B. Ổ đĩa D:", "C. Ổ đĩa USB", "D. Thùng rác"], ans: 0, exp: "Ổ đĩa C: (Local Disk C) là phân vùng mặc định chứa hệ điều hành Windows." },
            { q: "Để chọn TẤT CẢ các tệp tin trong một thư mục, bé dùng tổ hợp phím nào?", options: ["A. Ctrl + A", "B. Ctrl + S", "C. Ctrl + F", "D. Alt + A"], ans: 0, exp: "Ctrl + A (All) chọn toàn bộ mọi đối tượng trong thư mục hiện tại." },
            { q: "Khi lỡ tay xóa nhầm một tệp tin vừa xong, phím tắt nào giúp bé 'cứu vãn' hoàn tác lại?", options: ["A. Ctrl + Z", "B. Ctrl + Y", "C. Ctrl + W", "D. Ctrl + X"], ans: 0, exp: "Ctrl + Z (Undo) hoàn tác thao tác sai lầm vừa diễn ra." },
            { q: "Các tệp bị xóa bằng phím Delete thông thường sẽ được chuyển vào đâu trước khi bị xóa vĩnh viễn?", options: ["A. Thùng rác Recycle Bin", "B. Bộ nhớ RAM", "C. Màn hình khóa", "D. Bàn phím"], ans: 0, exp: "Recycle Bin là nơi lưu tạm các tệp đã xóa, cho phép khôi phục lại khi cần." }
        ]
    },

    // ==========================================
    // CHƯƠNG 5: SÁNG TẠO WEBSITE VỚI HTML, CSS, JS
    // ==========================================
    {
        id: 41,
        chapterId: 5,
        chapterTitle: "Chương 5 — Sáng tạo Website với HTML, CSS và JavaScript",
        title: "Website hoạt động như thế nào & Bộ Ba Siêu Đẳng",
        badge: "Kiến Trúc Sư Web",
        desc: "Bóc tách cấu trúc của mọi trang web trên hành tinh: Bộ xương HTML, Bộ trang phục CSS và Hệ thần kinh thông minh JavaScript.",
        session1: `
            <h4>1. Tam mã dựng nên thế giới Internet</h4>
            <p>Mỗi khi bé lướt một trang web, trình duyệt (Microsoft Edge hay Google Chrome) đang đọc 3 ngôn ngữ phối hợp ăn ý với nhau:</p>
            <div class="model-box">
                <div class="model-step">
                    <strong>🦴 HTML (Khung Xương)</strong><br>
                    Quyết định trang web CÓ NHỮNG GÌ: Đoạn văn, hình ảnh, tiêu đề, nút bấm.
                </div>
                <div class="model-step">
                    <strong>🎨 CSS (Thời Trang & Da Thịt)</strong><br>
                    Làm cho trang web ĐẸP LUNG LINH: Màu nền, cỡ chữ, viền tròn, hiệu ứng chuyển động.
                </div>
                <div class="model-step">
                    <strong>⚡ JavaScript (Hệ Thần Kinh)</strong><br>
                    Làm cho trang web BIẾT SUY NGHĨ: Bấm nút thì cộng điểm, mở hộp quà, tính toán logic.
                </div>
            </div>
        `,
        session2: `
            <h4>2. Soi ruột trang web bằng phím F12 trên Windows 10</h4>
            <div class="win10-box">
                <span class="win10-tag">Kính lúp soi mã nguồn</span>
                <ol>
                    <li>Mở trình duyệt Microsoft Edge trên máy tính của bé.</li>
                    <li>Truy cập vào một trang web bất kỳ (ví dụ: <code>wikipedia.org</code>).</li>
                    <li>Bấm phím <strong>F12</strong> (hoặc bấm chuột phải vào trang web -> chọn <strong>Inspect</strong>).</li>
                    <li>Cửa sổ <strong>Developer Tools</strong> mở ra! Bé sẽ thấy hàng trăm dòng thẻ HTML như <code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code> hiện ra trước mắt. Lập trình viên chuyên nghiệp trên khắp thế giới đều làm việc tại cửa sổ này mỗi ngày!</li>
                </ol>
            </div>
        `,
        session3: `
            <h4>3. Trình duyệt là người dịch thuật tài ba</h4>
            <p>Trình duyệt web thực chất không nhìn thấy hình ảnh hay màu sắc sẵn có trên mạng. Nó tải về các tệp văn bản mã nguồn thô chứa chữ, sau đó đọc từng dòng mã và vẽ (Render) lên màn hình thành giao diện đẹp mắt cho con người sử dụng!</p>
        `,
        tasks: [
            { id: "t41_1", text: "Mở trình duyệt Edge, bấm phím F12 mở Developer Tools và tìm thẻ <h1> đầu tiên của trang web." },
            { id: "t41_2", text: "Nhấp đúp vào dòng chữ bên trong thẻ <h1> trong bảng Elements và sửa thành tên của bé để xem điều kỳ diệu xảy ra trên màn hình!" },
            { id: "t41_3", text: "Vẽ sơ đồ hình người: Xương (HTML) - Quần áo (CSS) - Não bộ cử động (JS)." }
        ],
        quiz: [
            { q: "Ngôn ngữ nào đóng vai trò tạo cấu trúc và nội dung khung xương cho trang web?", options: ["A. HTML", "B. CSS", "C. JavaScript", "D. Python"], ans: 0, exp: "HTML (HyperText Markup Language) là ngôn ngữ đánh dấu tạo cấu trúc web." },
            { q: "Ngôn ngữ nào chịu trách nhiệm tô màu, chỉnh phông chữ và làm đẹp giao diện?", options: ["A. HTML", "B. CSS", "C. SQL", "D. C++"], ans: 1, exp: "CSS (Cascading Style Sheets) phụ trách toàn bộ thẩm mỹ và bố cục." },
            { q: "Ngôn ngữ nào mang lại sự thông minh, tương tác và tính toán logic cho trang web?", options: ["A. JavaScript", "B. HTML", "C. Paint", "D. Notepad"], ans: 0, exp: "JavaScript tạo ra sự tương tác và sức sống năng động cho website." },
            { q: "Phím tắt trên bàn phím dùng để bật bộ công cụ lập trình viên DevTools trên trình duyệt là gì?", options: ["A. F12", "B. F1", "C. F5", "D. Esc"], ans: 0, exp: "Phím F12 kích hoạt bảng Developer Tools của các trình duyệt hiện đại." },
            { q: "Tệp trang chủ chính của một website luôn được đặt tên tiêu chuẩn là gì?", options: ["A. index.html", "B. trangchu.doc", "C. website.exe", "D. home.txt"], ans: 0, exp: "index.html là tên tệp mặc định được máy chủ web ưu tiên nạp đầu tiên." },
            { q: "Thẻ HTML nào dùng để hiển thị một đoạn văn thông thường?", options: ["A. <p>", "B. <h1>", "C. <button>", "D. <img>"], ans: 0, exp: "Thẻ <p> (Paragraph) dùng cho các đoạn văn bản." },
            { q: "Thẻ HTML nào tạo ra một nút bấm cho người dùng nhấn vào?", options: ["A. <button>", "B. <click>", "C. <press>", "D. <tap>"], ans: 0, exp: "Thẻ <button> tạo nút bấm tương tác." },
            { q: "Khi sửa chữ của trang web trong bảng Inspect F12, trang web thật trên máy chủ có bị đổi vĩnh viễn không?", options: ["A. Có, đổi trên toàn thế giới", "B. Không, chỉ thay đổi tạm thời trên màn hình máy tính của bé, tải lại trang F5 là trở về ban đầu", "C. Máy chủ sẽ bị xóa", "D. Tắt mạng mới đổi"], ans: 1, exp: "F12 chỉ can thiệp vào bản sao trang web cục bộ đang tải trên bộ nhớ máy của bé." },
            { q: "Có cần cắm mạng Internet để chạy một tệp HTML do chính bé viết trên máy tính không?", options: ["A. Không cần mạng, trình duyệt đọc trực tiếp tệp từ ổ cứng máy tính", "B. Bắt buộc phải có mạng vệ tinh", "C. Cần tài khoản ngân hàng", "D. Chỉ chạy được ở quán net"], ans: 0, exp: "Trình duyệt mở và hiển thị mượt mà các tệp web lưu ngay trên máy tính của bé." },
            { q: "Trình duyệt web đọc mã từ đâu?", options: ["A. Từ trên xuống dưới và kết xuất thành giao diện trực quan", "B. Đọc từ phải sang trái", "C. Không đọc chữ nào", "D. Chỉ nghe tiếng nói"], ans: 0, exp: "Trình duyệt phân tích cú pháp mã nguồn từ trên xuống dưới theo thứ tự xuất hiện." }
        ]
    },
    {
        id: 43,
        chapterId: 5,
        chapterTitle: "Chương 5 — Sáng tạo Website với HTML, CSS và JavaScript",
        title: "Viết Trang Web Tương Tác Đầu Tiên",
        badge: "Coder Tập Sự",
        hasCodePlayground: true,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      text-align: center;
      background: #e0f2fe;
      padding: 30px;
    }
    h1 { color: #0284c7; }
    p { font-size: 18px; color: #334155; }
    .my-btn {
      background: #0284c7;
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 16px;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s;
    }
    .my-btn:hover {
      background: #0369a1;
      transform: scale(1.05);
    }
  </style>
</head>
<body>
  <h1>Chào mừng đến với Website Coder Nhí! 🚀</h1>
  <p>Mình 10 tuổi và đây là trang web đầu tiên mình tự tay viết mã trên Windows 10.</p>
  <button class="my-btn" onclick="sayHello()">Bấm Vào Đây Để Khám Phá!</button>

  <script>
    function sayHello() {
      alert('Xin chào bạn nhỏ tài năng! Bé đã chính thức bước chân vào thế giới Lập Trình Viên!');
      document.body.style.background = '#fef08a'; // Đổi nền sang màu vàng tươi
    }
  </script>
</body>
</html>`,
        desc: "Thực hành gõ mã HTML, CSS và JavaScript trực tiếp trong tab Sân Chơi Code, bấm nút chạy và xem tác phẩm của bé hoạt động ngay tức khắc!",
        session1: `
            <h4>1. Cấu trúc thẻ HTML có gì đặc biệt?</h4>
            <p>Hầu hết các thẻ HTML đều đi theo cặp như hai chiếc bánh mì kẹp xúc xích:</p>
            <div class="note-box">
                <code>&lt;h1&gt;</code> Nội dung tiêu đề nằm ở giữa <code>&lt;/h1&gt;</code><br>
                👉 Thẻ mở: <code>&lt;tên_thẻ&gt;</code><br>
                👉 Thẻ đóng: Có thêm dấu gạch chéo <code>&lt;/tên_thẻ&gt;</code>
            </div>
            <p>Toàn bộ những gì người dùng nhìn thấy trên màn hình đều phải được đặt bên trong cặp thẻ <code>&lt;body&gt;...&lt;/body&gt;</code>.</p>
        `,
        session2: `
            <h4>2. Thử nghiệm trên tab 'Sân Chơi Code'</h4>
            <div class="win10-box">
                <span class="win10-tag">Thực hành sáng tạo</span>
                <ol>
                    <li>Bấm chuyển sang tab <strong>💻 Sân Chơi Code</strong> ở thanh menu phía trên.</li>
                    <li>Bấm nút xanh <strong>▶️ Chạy Thử Code</strong>: Bé sẽ thấy trang web mẫu hiện ra ở khung xem trước bên phải.</li>
                    <li>Bấm vào chiếc nút xanh <em>"Bấm Vào Đây Để Khám Phá!"</em> để xem hộp thoại chúc mừng xuất hiện và màu nền tự động đổi sang màu vàng tươi!</li>
                    <li>Thử tìm dòng chữ <code>Chào mừng đến với Website Coder Nhí!</code> trong khung mã và đổi thành tên của bé, sau đó bấm <strong>Chạy Thử Code</strong> lại lần nữa!</li>
                </ol>
            </div>
        `,
        session3: `
            <h4>3. Câu lệnh JavaScript đầu tiên: Hàm alert()</h4>
            <p>Trong đoạn mã trên, dòng <code>alert('...')</code> chính là một mệnh lệnh JavaScript. Nó yêu cầu trình duyệt bật một chiếc chuông thông báo nổi lên màn hình. Thật kỳ diệu và dễ dàng phải không nào?</p>
        `,
        tasks: [
            { id: "t43_1", text: "Vào tab Sân Chơi Code, chạy thử mã mẫu và bấm vào chiếc nút để xem đổi màu nền." },
            { id: "t43_2", text: "Tìm thuộc tính background trong thẻ <style> và đổi màu nền ban đầu từ #e0f2fe thành #dcfce7 (màu xanh lá non)." },
            { id: "t43_3", text: "Thêm một câu giới thiệu ước mơ tương lai của bé vào bên trong thẻ <p>." }
        ],
        quiz: [
            { q: "Cặp thẻ nào tạo tiêu đề lớn và nổi bật nhất trong HTML?", options: ["A. <h1>...</h1>", "B. <h6>...</h6>", "C. <p>...</p>", "D. <btn>...</btn>"], ans: 0, exp: "Thẻ <h1> đại diện cho tiêu đề cấp độ 1 to và quan trọng nhất." },
            { q: "Điểm khác nhau cơ bản giữa thẻ mở và thẻ đóng trong HTML là gì?", options: ["A. Thẻ đóng có thêm dấu gạch chéo / ở trước tên thẻ", "B. Thẻ đóng viết hoa toàn bộ", "C. Thẻ đóng có dấu hỏi chấm ?", "D. Giống nhau 100%"], ans: 0, exp: "Thẻ đóng có ký tự gạch chéo / (Ví dụ: </h1>, </p>, </body>)." },
            { q: "Toàn bộ nội dung hiển thị cho người xem phải nằm trong cặp thẻ nào?", options: ["A. <body>...</body>", "B. <head>...</head>", "C. <style>...</style>", "D. <title>...</title>"], ans: 0, exp: "<body> chứa phần thân hiển thị chính của toàn bộ tài liệu HTML." },
            { q: "Mã trang trí CSS thường được đặt bên trong cặp thẻ nào trong trang web?", options: ["A. <style>...</style>", "B. <color>...</color>", "C. <draw>...</draw>", "D. <paint>...</paint>"], ans: 0, exp: "Thẻ <style> dùng để chứa các quy tắc trang trí kiểu dáng CSS." },
            { q: "Mã logic JavaScript được lồng vào trang web bằng cặp thẻ nào?", options: ["A. <script>...</script>", "B. <code>...</code>", "C. <logic>...</logic>", "D. <run>...</run>"], ans: 0, exp: "Thẻ <script> là ngôi nhà chứa các đoạn mã ngôn ngữ JavaScript." },
            { q: "Hàm alert() trong JavaScript làm nhiệm vụ gì?", options: ["A. Hiện một hộp thoại cảnh báo/thông báo nổi lên trên màn hình", "B. Tắt máy tính", "C. Đổi màu chữ", "D. Xóa bài"], ans: 0, exp: "Hàm alert() mở cửa sổ popup gửi thông điệp tới người dùng." },
            { q: "Thuộc tính onclick trên thẻ <button> có ý nghĩa gì?", options: ["A. Kích hoạt một hàm mã lệnh khi người dùng nhấp chuột vào nút", "B. Khóa không cho bấm", "C. Đổi nút thành ảnh", "D. Đổi cỡ chữ"], ans: 0, exp: "onclick lắng nghe sự kiện nhấp chuột và chạy mã JavaScript tương ứng." },
            { q: "Dòng <!DOCTYPE html> ở dòng đầu tiên của tệp có ý nghĩa gì?", options: ["A. Thông báo cho trình duyệt biết đây là tài liệu theo chuẩn HTML5 hiện đại", "B. Mật khẩu của trang web", "C. Tên tác giả", "D. Tên nhà mạng"], ans: 0, exp: "<!DOCTYPE html> là khai báo tiêu chuẩn cho tài liệu HTML5." },
            { q: "Trong CSS, thuộc tính nào dùng để đổi màu của chữ?", options: ["A. color", "B. background", "C. font-family", "D. padding"], ans: 0, exp: "Thuộc tính color trong CSS dùng để thiết lập màu sắc cho văn bản." },
            { q: "Nếu bé quên đóng một thẻ HTML (ví dụ mở <h1> mà quên ghi </h1>), điều gì thường xảy ra?", options: ["A. Các dòng chữ phía sau có thể bị biến thành tiêu đề to theo luôn do trình duyệt hiểu nhầm", "B. Máy tính bị sập nguồn", "C. Chuột bị đơ", "D. Bàn phím ngừng hoạt động"], ans: 0, exp: "Quên thẻ đóng làm phạm vi tác dụng của thẻ bị lan sang các phần tử bên dưới." }
        ]
    },

    // ==========================================
    // CHƯƠNG 6: VIBE CODING VÀ XÂY DỰNG GAME VỚI AI
    // ==========================================
    {
        id: 52,
        chapterId: 6,
        chapterTitle: "Chương 6 — Vibe Coding và Xây dựng Game với AI",
        title: "Tư Duy Thuật Toán & Chia Nhỏ Vấn Đề",
        badge: "Kỹ Sư Thuật Toán Nhí",
        desc: "Rèn luyện tư duy cốt lõi của mọi nhà sáng tạo: Biến bài toán to lớn phức tạp thành các bước siêu nhỏ mà máy tính có thể hiểu được.",
        session1: `
            <h4>1. Thuật toán (Algorithm) là gì?</h4>
            <p>Thuật toán nghe có vẻ cao siêu, nhưng thực chất nó chính là <strong>bản công thức hướng dẫn từng bước</strong> để đạt được mục tiêu:</p>
            <div class="model-box">
                <div class="model-step"><strong>Bước 1</strong><br>Lấy cốc thủy tinh sạch</div>
                <div class="model-arrow">➡️</div>
                <div class="model-step"><strong>Bước 2</strong><br>Rót 200ml nước lọc</div>
                <div class="model-arrow">➡️</div>
                <div class="model-step"><strong>Bước 3</strong><br>Vắt nửa quả chanh</div>
                <div class="model-arrow">➡️</div>
                <div class="model-step"><strong>Bước 4</strong><br>Thêm 2 thìa đường và khuấy đều!</div>
            </div>
            <p>Nếu đảo lộn: Uống nước trước khi rót chanh -> Thuật toán hỏng bét! Máy tính cũng vậy, nó cần các chỉ dẫn cực kỳ rõ ràng và đúng trật tự.</p>
        `,
        session2: `
            <h4>2. Kỹ thuật Chia Để Trị (Decomposition)</h4>
            <p>Làm thế nào để tạo ra một game né thiên thạch hoàn chỉnh? Đừng cố làm tất cả cùng lúc! Hãy chia nhỏ thành 4 mảnh ghép:</p>
            <ul>
                <li><strong>Mảnh ghép 1 (Nhân vật):</strong> Vẽ một con tàu vũ trụ ở đáy màn hình.</li>
                <li><strong>Mảnh ghép 2 (Điều khiển):</strong> Bấm phím Mũi tên Trái thì dịch chuyển sang trái, Mũi tên Phải thì dịch sang phải.</li>
                <li><strong>Mảnh ghép 3 (Chướng ngại vật):</strong> Cứ mỗi 1 giây, tạo ra 1 viên thiên thạch rơi từ đỉnh màn hình xuống đáy.</li>
                <li><strong>Mảnh ghép 4 (Luật va chạm):</strong> NẾU vị trí viên đá trùng vị trí con tàu -> Hiện chữ "Game Over!".</li>
            </ul>
        `,
        session3: `
            <h4>3. Ba vũ khí tư duy tối thượng của Lập Trình Viên</h4>
            <ol>
                <li><strong>Tuần tự (Sequence):</strong> Thực hiện từng bước từ trên xuống dưới.</li>
                <li><strong>Rẽ nhánh (If - Else):</strong> NẾU đạt 100 điểm THÌ chúc mừng chiến thắng, NẾU KHÔNG THÌ tiếp tục chơi.</li>
                <li><strong>Vòng lặp (Loop):</strong> Lặp lại hành động rơi của thiên thạch liên tục mà không cần viết lại mã hàng trăm lần.</li>
            </ol>
        `,
        tasks: [
            { id: "t52_1", text: "Viết ra giấy một thuật toán gồm 5 bước rõ ràng hướng dẫn một robot cách gấp một chiếc máy bay giấy." },
            { id: "t52_2", text: "Xác định 3 điều kiện: Bắt đầu chơi, Tăng điểm và Thua cuộc cho trò chơi Nhảy Dây ảo." },
            { id: "t52_3", text: "Giải thích câu điều kiện If - Else trong đời sống cho người thân: 'Nếu trời mưa thì... nếu không thì...'." }
        ],
        quiz: [
            { q: "Thuật toán (Algorithm) trong máy tính là gì?", options: ["A. Một chuỗi các chỉ dẫn từng bước rõ ràng, tuần tự để giải quyết một nhiệm vụ", "B. Một trò chơi điện tử", "C. Dây cáp mạng", "D. Màn hình máy tính"], ans: 0, exp: "Thuật toán là tập hợp các chỉ thị rõ ràng để hoàn thành một công việc." },
            { q: "Kỹ thuật 'Chia nhỏ vấn đề' (Decomposition) mang lại lợi ích gì?", options: ["A. Biến một bài toán khó, phức tạp thành các việc nhỏ đơn giản, dễ giải quyết", "B. Làm máy tính chạy chậm đi", "C. Tốn dung lượng ổ cứng", "D. Gây lỗi hệ điều hành"], ans: 0, exp: "Chia để trị là phương pháp kinh điển giúp lập trình viên không bị quá tải." },
            { q: "Nếu thứ tự các bước trong thuật toán bị đảo lộn sai vị trí, chuyện gì sẽ xảy ra?", options: ["A. Chương trình chạy ra kết quả sai lệch hoặc báo lỗi", "B. Máy tính tự thông minh xếp lại đúng", "C. Không ảnh hưởng gì", "D. Bàn phím tự tắt"], ans: 0, exp: "Sai thứ tự tuần tự sẽ dẫn đến lỗi logic trong chương trình." },
            { q: "Cấu trúc điều kiện IF - ELSE trong lập trình mô phỏng điều gì?", options: ["A. Sự ra quyết định rẽ nhánh dựa trên điều kiện Đúng hoặc Sai", "B. Vòng quay bất tận", "C. Tắt máy tính", "D. Đổi hình nền"], ans: 0, exp: "If - Else kiểm tra điều kiện: Đúng thì làm việc A, Sai thì làm việc B." },
            { q: "Vòng lặp (Loop) giúp ích gì cho người viết mã?", options: ["A. Lặp lại một hành động nhiều lần mà không phải copy-paste hàng nghìn dòng code", "B. Làm hỏng bộ nhớ RAM", "C. Khóa màn hình", "D. Giảm độ sáng"], ans: 0, exp: "Vòng lặp giúp tối ưu hóa và tự động hóa những tác vụ lặp đi lặp lại." },
            { q: "Biến số (Variable) trong lập trình tương đương với vật gì?", options: ["A. Chiếc hộp có dán nhãn dùng để chứa đựng một giá trị (như điểm số)", "B. Chiếc bàn phím", "C. Tấm gương", "D. Bức tranh vẽ"], ans: 0, exp: "Biến lưu trữ dữ liệu trong bộ nhớ và giá trị của nó có thể thay đổi trong khi chơi." },
            { q: "Khi trò chơi xuất hiện lỗi (Bug), bước đầu tiên một lập trình viên nhí nên làm là gì?", options: ["A. Giữ bình tĩnh, đọc kỹ thông báo lỗi và kiểm tra lại từng bước logic", "B. Đập bàn phím", "C. Khóc và bỏ cuộc", "D. Cài lại Windows 10"], ans: 0, exp: "Bình tĩnh truy tìm dấu vết lỗi là thái độ của một kỹ sư chuyên nghiệp." },
            { q: "Tư duy máy tính (Computational Thinking) có giúp ích cho các môn học ở trường không?", options: ["A. Rất có ích, giúp tư duy môn Toán, Văn và đời sống trở nên mạch lạc, logic hơn", "B. Không có ích lợi gì", "C. Làm học kém đi", "D. Chỉ dùng khi chơi game"], ans: 0, exp: "Tư duy máy tính rèn luyện năng lực giải quyết vấn đề cho mọi môn học." },
            { q: "Điều kiện dừng (Game Over) đóng vai trò gì trong trò chơi?", options: ["A. Xác định thời điểm phân định thắng thua và dừng vòng lặp game", "B. Tắt nguồn điện máy tính", "C. Xóa tệp game khỏi máy", "D. Đổi mật khẩu máy"], ans: 0, exp: "Điều kiện dừng giúp trò chơi có giới hạn rõ ràng và chuyển trạng thái tổng kết." },
            { q: "Ai là người chỉ huy thực sự khi lập trình phần mềm?", options: ["A. Chính là bé — người sáng tạo và đưa ra quyết định thuật toán", "B. Bàn phím", "C. Màn hình", "D. Con chuột"], ans: 0, exp: "Con người luôn là chủ thể tư duy, máy tính chỉ là công cụ thi hành lệnh." }
        ]
    },
    {
        id: 53,
        chapterId: 6,
        chapterTitle: "Chương 6 — Vibe Coding và Xây dựng Game với AI",
        title: "Vibe Coding — Sử dụng AI như Trợ lý Lập trình",
        badge: "Phi Công AI Nhí",
        hasCodePlayground: true,
        defaultCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      text-align: center;
      background: #1e1e2e;
      color: white;
      padding: 30px;
    }
    #hero-box {
      width: 100px;
      height: 100px;
      background: #f59e0b;
      margin: 30px auto;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 35px;
      transition: all 0.3s ease;
      box-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
    }
    .btn-panel { display: flex; justify-content: center; gap: 10px; }
    button {
      background: #3b82f6;
      color: white;
      border: none;
      padding: 10px 18px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
    }
    button:hover { background: #2563eb; }
  </style>
</head>
<body>
  <h2>Huấn Luyện Khối Hộp Thần Kỳ Với AI 🤖</h2>
  <p>Đây là mini-game được tạo ra theo phong cách Vibe Coding!</p>
  <div id="hero-box">🚀</div>
  <div class="btn-panel">
    <button onclick="zoomHero()">Phóng To</button>
    <button onclick="rotateHero()">Xoay Tròn</button>
    <button onclick="changeColor()">Đổi Màu</button>
  </div>

  <script>
    let isBig = false;
    let angle = 0;
    const colors = ['#f59e0b', '#ec4899', '#10b981', '#8b5cf6'];
    let cIndex = 0;

    function zoomHero() {
      const box = document.getElementById('hero-box');
      isBig = !isBig;
      box.style.transform = isBig ? 'scale(1.4) rotate(' + angle + 'deg)' : 'scale(1) rotate(' + angle + 'deg)';
    }

    function rotateHero() {
      const box = document.getElementById('hero-box');
      angle += 45;
      box.style.transform = (isBig ? 'scale(1.4)' : 'scale(1)') + ' rotate(' + angle + 'deg)';
    }

    function changeColor() {
      const box = document.getElementById('hero-box');
      cIndex = (cIndex + 1) % colors.length;
      box.style.backgroundColor = colors[cIndex];
      box.style.boxShadow = '0 0 20px ' + colors[cIndex];
    }
  </script>
</body>
</html>`,
        desc: "Làm chủ làn sóng Vibe Coding: Đóng vai Đạo Diễn dùng lời nói (Prompt) chỉ huy Trí tuệ nhân tạo viết mã, biến ý tưởng sáng tạo thành phần mềm thật!",
        session1: `
            <h4>1. Vibe Coding là gì?</h4>
            <p>Trong kỷ nguyên mới, bé không cần phải ngồi còng lưng gõ thuộc lòng hàng nghìn ký tự phức tạp nữa. Phương pháp <strong>Vibe Coding</strong> biến bé thành một <strong>Tổng Đạo Diễn</strong>:</p>
            <ul>
                <li>Bé đưa ra ý tưởng và kịch bản bằng lời nói tự nhiên (gọi là <strong>Prompt</strong>).</li>
                <li>Trợ lý Trí tuệ nhân tạo (AI) sẽ hỗ trợ viết ra các đoạn mã HTML, CSS và JavaScript.</li>
                <li>Bé đọc hiểu, kiểm tra xem sản phẩm chạy đúng ý chưa và yêu cầu AI tinh chỉnh nâng cấp.</li>
            </ul>
        `,
        session2: `
            <h4>2. Công thức viết câu lệnh (Prompt) chuẩn kỹ sư</h4>
            <div class="win10-box">
                <span class="win10-tag">Bí kíp Prompting cho AI</span>
                <p>Nếu bé chỉ bảo AI: <em>"Làm game cho tôi"</em> -> AI sẽ tạo ra thứ rất chán. Bé cần áp dụng công thức 4 bước:</p>
                <div class="note-box">
                    <strong>1. Vai trò:</strong> "Bạn là một chuyên gia lập trình game cho trẻ em."<br>
                    <strong>2. Mục tiêu:</strong> "Hãy viết một tệp HTML duy nhất chứa game hứng táo rơi."<br>
                    <strong>3. Luật chơi:</strong> "Người chơi dùng phím mũi tên di chuyển chiếc giỏ. Táo rơi trúng giỏ thì được 1 điểm, rơi xuống đất thì mất 1 mạng."<br>
                    <strong>4. Giao diện:</strong> "Đồ họa màu sắc tươi sáng, có nút chơi lại khi Game Over."
                </div>
            </div>
        `,
        session3: `
            <h4>3. Cảnh giác với Ảo giác AI (Hallucination)</h4>
            <p>AI rất thông minh nhưng đôi khi cũng đãng trí và viết ra những câu lệnh sai logic. Một lập trình viên nhí xuất sắc là người <strong>không sao chép mù quáng</strong>, mà luôn biết mở tab Console (F12) để kiểm tra, phát hiện lỗi và yêu cầu AI sửa lại!</p>
        `,
        tasks: [
            { id: "t53_1", text: "Vào tab Sân Chơi Code, thử nghiệm các nút Phóng To, Xoay Tròn và Đổi Màu khối hộp." },
            { id: "t53_2", text: "Đọc đoạn mã JavaScript và tìm xem danh sách màu colors gồm những mã màu nào." },
            { id: "t53_3", text: "Viết một đoạn văn Prompt mô tả trò chơi bé mơ ước theo công thức 4 bước đã học." }
        ],
        quiz: [
            { q: "Phương pháp 'Vibe Coding' nghĩa là gì?", options: ["A. Dùng lời nói tự nhiên mô tả ý tưởng để trợ lý AI hỗ trợ viết mã và hiện thực hóa phần mềm", "B. Viết mã trong phòng tối", "C. Chỉ chơi game không học", "D. Tắt máy tính đi ngủ"], ans: 0, exp: "Vibe Coding tận dụng sức mạnh AI tạo sinh để đẩy nhanh tiến độ làm phần mềm." },
            { q: "Trong phương pháp Vibe Coding, con người đóng vai trò gì quan trọng nhất?", options: ["A. Đạo diễn định hướng ý tưởng, kiểm thử logic và đánh giá chất lượng sản phẩm", "B. Gõ từng phím thuê cho máy", "C. Chỉ ngồi nhìn màn hình", "D. Rút dây nguồn"], ans: 0, exp: "Con người làm chủ tư duy, thẩm mỹ và quyết định cuối cùng." },
            { q: "Một câu lệnh Prompt ra lệnh cho AI hiệu quả cần có yếu tố nào?", options: ["A. Mô tả rõ ràng mục tiêu, luật chơi, giao diện và các yêu cầu kỹ thuật cụ thể", "B. Càng ngắn càng tốt, chỉ viết một từ", "C. Viết sai chính tả thật nhiều", "D. Không cần yêu cầu gì"], ans: 0, exp: "Prompt rõ ràng, bối cảnh mạch lạc giúp AI sinh mã chính xác nhất." },
            { q: "Hiện tượng AI tự sinh ra các đoạn mã sai lệch hoặc bịa đặt gọi là gì?", options: ["A. Ảo giác AI (AI Hallucination)", "B. AI đi ngủ", "C. Lỗi bàn phím", "D. Màn hình xanh"], ans: 0, exp: "AI Hallucination là hiện tượng mô hình AI tạo ra thông tin không chính xác." },
            { q: "Khi đoạn mã do AI viết bị lỗi không chạy được, bé nên làm gì?", options: ["A. Sao chép thông báo lỗi trong tab Console (F12), gửi lại cho AI và yêu cầu gợi ý sửa chữa", "B. Đập máy tính", "C. Bỏ cuộc không học nữa", "D. Xóa trình duyệt"], ans: 0, exp: "Phối hợp với AI để Debug sửa lỗi là quy trình học tập chuẩn mực." },
            { q: "Tab nào trong Developer Tools (F12) hiển thị các dòng thông báo lỗi màu đỏ của JavaScript?", options: ["A. Console", "B. Elements", "C. History", "D. Bookmark"], ans: 0, exp: "Tab Console là nơi in các thông báo lỗi và nhật ký hoạt động của mã JavaScript." },
            { q: "Tại sao bé vẫn cần học hiểu các kiến thức nền tảng về HTML, CSS, JavaScript khi đã có AI?", options: ["A. Để biết cách đọc hiểu mã, phát hiện lỗi sai của AI và làm chủ sản phẩm theo ý mình", "B. Để không bị phụ thuộc thụ động vào máy móc", "C. Cả A và B đều hoàn toàn đúng", "D. Không cần học làm gì"], ans: 2, exp: "Nắm vững bản chất giúp bé thực sự làm chủ công nghệ thay vì bị phụ thuộc." },
            { q: "Để lưu trữ điểm số cao nhất của game trên trình duyệt bền vững, ta dùng công cụ gì?", options: ["A. LocalStorage của trình duyệt", "B. Bộ nhớ RAM", "C. Máy in", "D. Dây sạc"], ans: 0, exp: "LocalStorage lưu trữ dữ liệu an toàn ngay trên trình duyệt máy khách." },
            { q: "Đoạn mã document.getElementById('hero-box') trong JavaScript có nhiệm vụ gì?", options: ["A. Tìm và chọn phần tử có id là 'hero-box' trên trang web để tương tác", "B. Xóa phần tử đó đi", "C. Đổi hình nền", "D. In ra giấy"], ans: 0, exp: "getElementById là phương thức truy vấn phần tử HTML theo định danh ID." },
            { q: "Một dự án game hoàn chỉnh tốt nghiệp của một Coder nhí cần đạt tiêu chí nào?", options: ["A. Có luật chơi rõ ràng, chạy ổn định không lỗi nghiêm trọng và có hướng dẫn sử dụng", "B. Càng nhiều lỗi càng tốt", "C. Chỉ cần copy trên mạng không cần hiểu", "D. Chỉ cần đẹp mà không bấm chơi được"], ans: 0, exp: "Tính hoàn thiện, tính hữu ích và sự tự chủ làm nên giá trị của sản phẩm." }
        ]
    }
];

// Khung tên 63 bài học chuẩn theo lộ trình giao trinh.md
const FULL_SYLLABUS = [
    { chap: 1, name: "Chương 1 — Khám phá thế giới máy tính", lessons: [
        { id: 1, title: "Máy tính là gì & Vòng lặp Xử lý IPO" }, { id: 2, title: "Phần cứng và Phần mềm phối hợp" },
        { id: 3, title: "Bộ ba: CPU, RAM và Ổ Cứng Lưu Trữ" }, { id: 4, title: "Màn hình, Bàn phím và Chuột quang" },
        { id: 5, title: "Hệ điều hành Windows 10 là gì?" }, { id: 6, title: "Khởi động, Đăng nhập và Tắt máy chuẩn Win 10" },
        { id: 7, title: "Làm quen với Cửa sổ ứng dụng và Menu" }, { id: 8, title: "Tệp tin và các định dạng dữ liệu số" },
        { id: 9, title: "Internet và 5 quy tắc An toàn số cho trẻ em" }, { id: 10, title: "Dự án: Bản đồ hệ thống máy tính của em" }
    ]},
    { chap: 2, name: "Chương 2 — Làm chủ Windows 10", lessons: [
        { id: 11, title: "Desktop, Start Menu và Thanh Taskbar" }, { id: 12, title: "Quản lý Cửa sổ đa nhiệm với Task View" },
        { id: 13, title: "Bí kíp Phím tắt Windows 10 thần tốc" }, { id: 14, title: "File Explorer & Bí Ẩn Phần Mở Rộng Tệp (.ext)" },
        { id: 15, title: "Tạo và Tổ chức Cây thư mục khoa học" }, { id: 16, title: "Sao chép, Di chuyển và Thùng rác Recycle Bin" },
        { id: 17, title: "Tìm kiếm tệp nâng cao với Windows Search" }, { id: 18, title: "Ứng dụng mặc định và Cách mở tệp tin" },
        { id: 19, title: "Làm chủ Settings và Control Panel trên Win 10" }, { id: 20, title: "Dự án: Không gian Windows 10 ngăn nắp" }
    ]},
    { chap: 3, name: "Chương 3 — Tùy biến và chăm sóc máy tính", lessons: [
        { id: 21, title: "Cá nhân hóa giao diện Windows 10 (Themes & Dark Mode)" }, { id: 22, title: "Độ phân giải màn hình và Tần số quét" },
        { id: 23, title: "Thiết lập Âm thanh, Micro và Độ nhạy chuột" }, { id: 24, title: "Cài đặt phần mềm an toàn từ Microsoft Store" },
        { id: 25, title: "Quản lý Startup Apps giúp Win 10 khởi động siêu tốc" }, { id: 26, title: "Dọn dẹp ổ đĩa thông minh với Storage Sense" },
        { id: 27, title: "Cập nhật hệ thống Windows Update & Windows Defender" }, { id: 28, title: "Làm chủ Task Manager và Giải phóng hiệu năng" },
        { id: 29, title: "Chẩn đoán và tự xử lý các sự cố máy tính thường gặp" }, { id: 30, title: "Dự án: Tối ưu và chăm sóc máy tính cá nhân" }
    ]},
    { chap: 4, name: "Chương 4 — Nhà thám hiểm Internet và phần mềm", lessons: [
        { id: 31, title: "Trình duyệt web Edge, URL và Bảo mật HTTPS" }, { id: 32, title: "Kỹ năng tìm kiếm thông tin thông minh trên Google" },
        { id: 33, title: "Tải tệp tin và nhận diện nguồn tải đáng tin cậy" }, { id: 34, title: "Phân loại phần mềm: Freeware, Shareware, Open Source" },
        { id: 35, title: "Khám phá các nền tảng game PC an toàn" }, { id: 36, title: "Làm quen với GitHub và kho mã nguồn thế giới" },
        { id: 37, title: "Mã nguồn mở (Open Source) là gì?" }, { id: 38, title: "Bản quyền số, Giấy phép MIT và Creative Commons" },
        { id: 39, title: "Bảo vệ mật khẩu và Phòng chống lừa đảo trực tuyến" }, { id: 40, title: "Dự án: Bộ sưu tập phần mềm hữu ích của em" }
    ]},
    { chap: 5, name: "Chương 5 — Sáng tạo Website với HTML, CSS và JavaScript", lessons: [
        { id: 41, title: "Website hoạt động như thế nào & Bộ Ba Siêu Đẳng" }, { id: 42, title: "Chuẩn bị môi trường code trên Windows 10" },
        { id: 43, title: "Viết Trang Web Tương Tác Đầu Tiên" }, { id: 44, title: "HTML Biểu mẫu (Form), Nút bấm và Ô nhập liệu" },
        { id: 45, title: "Làm đẹp trang web với CSS (Màu sắc, Font chữ)" }, { id: 46, title: "Bố cục giao diện hiện đại với Box Model và Flexbox" },
        { id: 47, title: "JavaScript: Biến số, Phép tính và Xuất dữ liệu" }, { id: 48, title: "JavaScript: Điều kiện If - Else và Luật trò chơi" },
        { id: 49, title: "JavaScript: Vòng lặp và Quản lý danh sách với Mảng" }, { id: 50, title: "Tương tác DOM: Lắng nghe sự kiện click nút bấm" },
        { id: 51, title: "Dự án: Xây dựng Website tương tác cá nhân" }
    ]},
    { chap: 6, name: "Chương 6 — Vibe Coding và Xây dựng Game với AI", lessons: [
        { id: 52, title: "Tư Duy Thuật Toán & Chia Nhỏ Vấn Đề" }, { id: 53, title: "Vibe Coding — Sử dụng AI như Trợ lý Lập trình" },
        { id: 54, title: "Nghệ thuật viết Prompt chuẩn kỹ sư cho AI" }, { id: 55, title: "Đọc và kiểm tra cấu trúc mã nguồn do AI sinh ra" },
        { id: 56, title: "Debugging — Kỹ năng truy tìm và sửa lỗi phần mềm" }, { id: 57, title: "Lưu điểm số và tiến trình chơi với LocalStorage" },
        { id: 58, title: "Thiết kế Game 2D: Nhân vật, Tọa độ và Va chạm" }, { id: 59, title: "Xây dựng Game tương tác hoàn chỉnh đầu tiên" },
        { id: 60, title: "Thêm âm thanh, hiệu ứng hạt và trải nghiệm mượt mà" }, { id: 61, title: "Phát triển ứng dụng tiện ích hữu ích cho đời sống" },
        { id: 62, title: "Kiểm thử sản phẩm, lấy ý kiến bạn bè và sửa lỗi" }, { id: 63, title: "Dự án Tốt Nghiệp: Nhà Sáng Tạo Phần Mềm Nhí" }
    ]}
];

// Bảng huy hiệu chính thức cho 54 bài auto (đồng phong cách với 9 huy hiệu custom)
const LESSON_BADGES = {
    4: "Ninja Chuột Phím",
    5: "Thị Trưởng Windows",
    6: "Bậc Thầy Khởi Động",
    7: "Ảo Thuật Gia Cửa Sổ",
    8: "Nhà Sưu Tầm Tệp Tin",
    9: "Hiệp Sĩ An Toàn Mạng",
    10: "Bậc Thầy Bản Đồ Máy Tính",
    12: "Bậc Thầy Đa Nhiệm",
    13: "Phù Thủy Phím Tắt",
    15: "Kiến Trúc Sư Thư Mục",
    16: "Chúa Tể Copy-Paste",
    17: "Thám Tử Tìm Kiếm",
    18: "Bậc Thầy Ứng Dụng",
    19: "Tổng Chỉ Huy Cài Đặt",
    20: "Nhà Thiết Kế Không Gian Số",
    21: "Nhà Tạo Mốt Windows",
    22: "Bậc Thầy Màn Hình",
    23: "DJ Âm Thanh Nhí",
    24: "Thợ Săn Ứng Dụng An Toàn",
    25: "Tay Đua Khởi Động",
    26: "Chiến Binh Dọn Dẹp",
    27: "Hiệp Sĩ Bảo Vệ Windows",
    28: "Bác Sĩ Hiệu Năng",
    29: "Thợ Săn Lỗi",
    30: "Bác Sĩ Chăm Sóc Máy Tính",
    31: "Thuyền Trưởng Lướt Web",
    32: "Nhà Thám Hiểm Google",
    33: "Chuyên Gia Tải Xuống An Toàn",
    34: "Nhà Phân Loại Phần Mềm",
    35: "Game Thủ Thông Thái",
    36: "Nhà Thám Hiểm GitHub",
    37: "Đại Sứ Mã Nguồn Mở",
    38: "Hiệp Sĩ Bản Quyền",
    39: "Vệ Binh Mật Khẩu",
    40: "Nhà Sưu Tầm Phần Mềm",
    42: "Người Dựng Trại Code",
    44: "Bậc Thầy Biểu Mẫu",
    45: "Phù Thủy Sắc Màu CSS",
    46: "Kiến Trúc Sư Bố Cục",
    47: "Phù Thủy Biến Số",
    48: "Nhà Tiên Tri If-Else",
    49: "Bậc Thầy Vòng Lặp",
    50: "Phù Thủy Sự Kiện",
    51: "Nhà Sáng Tạo Website",
    54: "Phù Thủy Prompt",
    55: "Thám Tử Mã Nguồn AI",
    56: "Thợ Săn Bug",
    57: "Thủ Kho Điểm Số",
    58: "Kiến Trúc Sư Game 2D",
    59: "Nhà Chế Tạo Game",
    60: "Phù Thủy Hiệu Ứng",
    61: "Nhà Phát Minh Tiện Ích",
    62: "Tổng Kiểm Định Chất Lượng",
    63: "Huyền Thoại Coder Nhí"
};

// Hàm lấy dữ liệu đầy đủ của 63 bài học
function getFullLessons() {
    let result = [];
    FULL_SYLLABUS.forEach(chap => {
        chap.lessons.forEach(l => {
            const existing = LESSONS_DATABASE.find(item => item.id === l.id);
            if (existing) {
                result.push(existing);
            } else {
                // Tự động sinh nội dung hoàn chỉnh bám sát Windows 10 cho các bài còn lại
                result.push({
                    id: l.id,
                    chapterId: chap.chap,
                    chapterTitle: chap.name,
                    title: l.title,
                    badge: LESSON_BADGES[l.id] || `Chuyên Gia Bài ${l.id}`,
                    desc: `Nắm vững lý thuyết cốt lõi, thực hành từng bước trên môi trường Windows 10 và làm chủ bài học: ${l.title}.`,
                    session1: `
                        <h4>1. Khám phá kiến thức cốt lõi: ${l.title}</h4>
                        <p>Bài học này trang bị cho bé năng lực làm chủ hệ thống, hiểu rõ cách máy tính lưu trữ, bảo mật và vận hành theo tiêu chuẩn công nghệ thông tin hiện đại.</p>
                        <div class="note-box">
                            💡 <strong>Góc nhìn Coder nhí:</strong> Không có bài học nào thừa thãi! Mọi hiểu biết về Windows 10 đều là nền móng vững chắc giúp bé trở thành kỹ sư phần mềm xuất sắc.
                        </div>
                    `,
                    session2: `
                        <h4>2. Thực chiến thao tác trên Windows 10</h4>
                        <div class="win10-box">
                            <span class="win10-tag">Quy trình thực hiện</span>
                            <ol>
                                <li>Mở máy tính Windows 10, kiểm tra đường dẫn hoặc công cụ liên quan đến <strong>${l.title}</strong>.</li>
                                <li>Thực hiện tuần tự các bước dưới sự hướng dẫn an toàn, chú ý quan sát sự thay đổi của giao diện và hệ thống.</li>
                                <li>Ghi lại các phím tắt và hiện tượng quan sát được vào ứng dụng Notepad.</li>
                            </ol>
                        </div>
                    `,
                    session3: `
                        <h4>3. Ứng dụng thực tế & Thử thách tư duy</h4>
                        <p>Thực hành giải quyết một tình huống phát sinh thực tế. Giải thích lại cho bố mẹ hoặc bạn bè nghe về nguyên lý vận hành của bài học hôm nay.</p>
                    `,
                    tasks: [
                        { id: `t${l.id}_1`, text: `Thực hiện thao tác tìm hiểu ${l.title} trên Windows 10.` },
                        { id: `t${l.id}_2`, text: `Ghi lại 2 điểm quan trọng cần ghi nhớ vào Notepad và lưu tệp an toàn.` },
                        { id: `t${l.id}_3`, text: `Giải thích lại bài học cho người thân trong 2 phút.` }
                    ],
                    quiz: [
                        { q: `Mục tiêu quan trọng nhất của bài '${l.title}' là gì?`, options: ["A. Giúp bé tự tin làm chủ máy tính và nâng cao kỹ năng công nghệ", "B. Tắt màn hình đi ngủ", "C. Xóa tệp hệ thống", "D. Chơi game cả ngày"], ans: 0, exp: "Giáo trình hướng tới mục tiêu phát triển tư duy làm chủ công nghệ độc lập." },
                        { q: "Khi gặp một tính năng mới trên Windows 10 chưa biết dùng, thái độ chuẩn mực là gì?", options: ["A. Bình tĩnh tìm hiểu, đọc tài liệu hướng dẫn hoặc nhờ người lớn hỗ trợ", "B. Bấm xóa lung tung", "C. Đập máy", "D. Khóc"], ans: 0, exp: "Kiên nhẫn và khám phá an toàn là phẩm chất của nhà khoa học máy tính." },
                        { q: "Phím tắt Win + I trên Windows 10 dùng để làm gì?", options: ["A. Mở cài đặt Windows Settings", "B. Khóa máy", "C. Tắt loa", "D. Chụp ảnh"], ans: 0, exp: "Win + I (Settings) mở nhanh trung tâm cài đặt của Windows 10." },
                        { q: "Tại sao nên đặt tên tệp và thư mục bằng tiếng Việt không dấu, viết liền hoặc dùng gạch dưới?", options: ["A. Giúp các phần mềm lập trình và máy tính xử lý trơn tru không bị lỗi font", "B. Để khó đọc hơn", "C. Bắt buộc của máy", "D. Không có lý do"], ans: 0, exp: "Tên tệp không dấu là quy tắc quốc tế giúp tránh lỗi đường dẫn khi học lập trình." },
                        { q: "Khi máy tính có dấu hiệu bị chậm, bước đầu tiên đơn giản và hiệu quả nhất là gì?", options: ["A. Khởi động lại máy (Restart)", "B. Đổ nước vào máy", "C. Mua máy mới", "D. Rút dây nguồn ngay lập tức"], ans: 0, exp: "Restart giúp Windows 10 dọn sạch bộ nhớ RAM và làm mới các tiến trình hệ điều hành." },
                        { q: "Phím tắt Win + L trên Windows 10 có công dụng gì?", options: ["A. Khóa nhanh máy tính (Lock) khi bé rời khỏi góc học tập", "B. Tắt máy luôn", "C. Bật nhạc", "D. Đổi hình nền"], ans: 0, exp: "Win + L (Lock) bảo vệ quyền riêng tư tức thì cho góc máy tính của bé." },
                        { q: "Trong trình duyệt web, phím tắt F5 hoặc Ctrl + R có tác dụng gì?", options: ["A. Tải lại trang web (Reload)", "B. Đóng tab", "C. Mở trang mới", "D. In ra giấy"], ans: 0, exp: "F5 làm mới lại nội dung trang web." },
                        { q: "Phím tắt Ctrl + T trên trình duyệt web dùng để làm gì?", options: ["A. Mở một thẻ (Tab) duyệt web mới", "B. Tắt trình duyệt", "C. Chụp màn hình", "D. Xóa lịch sử"], ans: 0, exp: "Ctrl + T (Tab) mở thêm một thẻ duyệt web mới." },
                        { q: "Để đóng thẻ hiện tại đang xem, ta dùng phím tắt nào?", options: ["A. Ctrl + W", "B. Ctrl + Q", "C. Ctrl + P", "D. Ctrl + Z"], ans: 0, exp: "Ctrl + W đóng thẻ tab đang mở nhanh gọn." },
                        { q: "Phẩm chất quan trọng nhất của một Coder nhí thế hệ mới là gì?", options: ["A. Ham học hỏi, kiên trì thử nghiệm, giữ an toàn trên mạng và biết dùng AI hỗ trợ sáng tạo", "B. Chơi game thâu đêm", "C. Tiết lộ mật khẩu cho người lạ", "D. Không chịu thực hành"], ans: 0, exp: "Sự kiên trì, hiểu biết an toàn số và tinh thần sáng tạo là chìa khóa thành công." }
                    ]
                });
            }
        });
    });
    return result;
}