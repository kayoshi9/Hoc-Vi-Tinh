/* ============================================================
   SIM SCENARIOS — Kịch bản nhiệm vụ cho từng bài học
   Mỗi bước: text (yêu cầu), hint (gợi ý), match/when (điều kiện),
   focus (hành động hỗ trợ khi bấm Gợi ý — chỉ mở đúng chỗ, không tự hoàn thành)
   ============================================================ */
(function () {
    "use strict";
    const S = window.Sim;

    window.SIM_SCENARIOS = {
        4: {
            title: "Bài 04 — Chuột, bàn phím & màn hình",
            subtitle: "Luyện 6 thao tác chuột và mở ứng dụng trên Windows 10",
            finish: "Bé đã làm chủ chuột, bàn phím và biết mở ứng dụng từ Start Menu. Hãy thử mini game Chuột & Phím để nâng cao tốc độ!",
            steps: [
                {
                    id: "s1", text: "Bấm nút Start (⊞) ở góc trái dưới",
                    hint: "Nút Start nằm ở góc trái thanh Taskbar, có biểu tượng 4 ô vuông.",
                    match: { action: "start-open" }
                },
                {
                    id: "s2", text: "Mở ứng dụng Notepad từ Start Menu",
                    hint: "Trong Start Menu, bấm vào ô 📝 Notepad.",
                    match: { action: "app-open", app: "notepad" },
                    focus: () => S.toast("Notepad nằm trong Start Menu, ô màu xanh có biểu tượng 📝.")
                },
                {
                    id: "s3", text: "Gõ ít nhất 10 ký tự vào Notepad",
                    hint: "Bấm vào vùng trắng của Notepad rồi gõ vài chữ bằng bàn phím.",
                    when: (action, data) => action === "notepad-type" && data.length >= 10,
                    focus: () => { S.openApp("notepad"); S.toast("Bấm vào vùng trắng rồi gõ: Toi dang hoc Windows 10"); }
                },
                {
                    id: "s4", text: "Thu nhỏ cửa sổ Notepad bằng nút —",
                    hint: "Nút gạch ngang (—) ở góc phải trên cửa sổ Notepad.",
                    match: { action: "win-minimize", app: "notepad" },
                    focus: () => { S.openApp("notepad"); S.toast("Nút — nằm ở góc phải trên cửa sổ, cạnh nút □ và ✕."); }
                },
                {
                    id: "s5", text: "Mở File Explorer bằng biểu tượng trên Desktop",
                    hint: "Nháy ĐÚP vào biểu tượng 🖥️ This PC hoặc 📁 HocTap_Win10 trên Desktop.",
                    match: { action: "app-open", app: "explorer" },
                    focus: () => S.toast("Nháy ĐÚP vào biểu tượng This PC hoặc HocTap_Win10 trên Desktop.")
                },
                {
                    id: "s6", text: "Nháy phải vùng trống trên Desktop → Personalize",
                    hint: "Thu nhỏ các cửa sổ để nhìn thấy Desktop, nháy phải vùng trống rồi chọn Personalize.",
                    match: { action: "desktop-personalize" },
                    focus: () => S.toast("Thu nhỏ cửa sổ, nháy PHẢI vùng trống Desktop rồi chọn Personalize.")
                },
                {
                    id: "s7", text: "Đổi hình nền trong Settings → Background",
                    hint: "Bấm vào một trong 4 ô hình nền (Windows 10, Rừng xanh, Tím mộng, Hoàng hôn).",
                    match: { action: "theme-change" },
                    focus: () => {
                        S.openApp("settings");
                        S.state.settingsSection = "personalization";
                        S.state.settingsPage = "background";
                        S.refreshApp("settings");
                        S.toast("Bấm vào một trong 4 ô hình nền để đổi ngay.");
                    }
                }
            ]
        },

        5: {
            title: "Bài 05 — Hệ điều hành Windows 10",
            subtitle: "Tìm phiên bản Windows và phân biệt HĐH – ứng dụng – website",
            finish: "Bé đã biết Windows 10 là hệ điều hành, phân biệt được ứng dụng và website. Hãy thử mini game Phân Loại để kiểm tra trí nhớ!",
            steps: [
                {
                    id: "s1", text: "Mở Start Menu",
                    hint: "Bấm nút ⊞ ở góc trái thanh Taskbar.",
                    match: { action: "start-open" }
                },
                {
                    id: "s2", text: "Mở ứng dụng Settings (⚙️)",
                    hint: "Bấm ô Settings trong Start Menu hoặc biểu tượng ⚙️ trên Desktop.",
                    match: { action: "app-open", app: "settings" },
                    focus: () => S.toast("Settings là ô có biểu tượng bánh răng ⚙️ trong Start Menu.")
                },
                {
                    id: "s3", text: "Chọn mục System trong Settings",
                    hint: "Trong danh sách bên trái của Settings, bấm System.",
                    match: { action: "settings-open", section: "system" },
                    focus: () => {
                        S.openApp("settings");
                        S.state.settingsSection = "system";
                        S.refreshApp("settings");
                        S.toast("System là mục đầu tiên trong danh sách bên trái của Settings.");
                    }
                },
                {
                    id: "s4", text: "Mở trang About để xem phiên bản Windows",
                    hint: "Bấm nút About ở hàng nút phía trên nội dung System.",
                    match: { action: "settings-about" },
                    focus: () => {
                        S.openApp("settings");
                        S.state.settingsSection = "system";
                        S.state.settingsPage = "about";
                        S.refreshApp("settings");
                        S.toast("Trang About nằm ở hàng nút phía trên nội dung System.");
                    }
                },
                {
                    id: "s5", text: "Mở một ỨNG DỤNG: Calculator (🧮)",
                    hint: "Mở Start Menu → Calculator. Đây là ứng dụng, không phải hệ điều hành.",
                    match: { action: "app-open", app: "calculator" },
                    focus: () => S.toast("Calculator nằm trong Start Menu — đây là ỨNG DỤNG, không phải hệ điều hành.")
                },
                {
                    id: "s6", text: "Mở WEBSITE bằng Microsoft Edge",
                    hint: "Mở Edge rồi bấm vào một ô trang web như Wikipedia hoặc Trang học tập.",
                    match: { action: "app-open", app: "edge" },
                    focus: () => S.toast("Edge là trình duyệt — công cụ để mở WEBSITE.")
                },
                {
                    id: "s7", text: "Truy cập một trang web bất kỳ trong Edge",
                    hint: "Bấm ô Wikipedia, Trang học tập hoặc GitHub trên trang mới của Edge.",
                    when: (action) => action === "browser-visit",
                    focus: () => { S.openApp("edge"); S.toast("Bấm ô Wikipedia hoặc Trang học tập trên trang mới."); }
                }
            ]
        },

        6: {
            title: "Bài 06 — Khởi động, đăng nhập, tắt máy",
            subtitle: "Luyện Lock, Sleep, Restart và Shut down đúng chuẩn",
            finish: "Bé đã thực hiện đúng quy trình nguồn của Windows 10: Sleep, Lock, đăng nhập, Restart và Shut down. Tuyệt vời!",
            steps: [
                {
                    id: "s1", text: "Mở Start Menu",
                    hint: "Bấm nút ⊞ ở góc trái thanh Taskbar.",
                    match: { action: "start-open" }
                },
                {
                    id: "s2", text: "Mở menu nguồn (nút ⏻)",
                    hint: "Trong Start Menu, bấm biểu tượng ⏻ ở góc phải dưới.",
                    match: { action: "power-menu-open" },
                    focus: () => S.toast("Nút nguồn ⏻ nằm ở góc phải dưới của Start Menu.")
                },
                {
                    id: "s3", text: "Chọn Sleep (🌙) khi rời máy vài phút",
                    hint: "Trong menu nguồn, bấm 🌙 Sleep.",
                    match: { action: "power-sleep" },
                    focus: () => S.toast("Sleep có biểu tượng mặt trăng 🌙 trong menu nguồn.")
                },
                {
                    id: "s4", text: "Đánh thức máy bằng cách bấm vào màn hình",
                    hint: "Bấm vào màn hình đen đang hiện 'Máy đang ngủ'.",
                    match: { action: "wake" },
                    focus: () => S.toast("Bấm chuột vào màn hình đen 'Máy đang ngủ' để đánh thức.")
                },
                {
                    id: "s5", text: "Khóa máy bằng nút 🔒 trong Start Menu",
                    hint: "Mở Start Menu, bấm biểu tượng ổ khóa 🔒 cạnh nút nguồn.",
                    match: { action: "lock" },
                    focus: () => S.toast("Biểu tượng ổ khóa 🔒 nằm cạnh nút nguồn trong Start Menu.")
                },
                {
                    id: "s6", text: "Đăng nhập lại bằng PIN 1234",
                    hint: "Gõ 1234 vào ô PIN rồi bấm nút →.",
                    match: { action: "login" },
                    focus: () => S.toast("Gõ PIN 1234 — bàn phím số bên phải màn hình khóa cũng bấm được.")
                },
                {
                    id: "s7", text: "Restart máy từ menu nguồn",
                    hint: "Start → ⏻ → 🔄 Restart. Chờ Windows khởi động lại.",
                    match: { action: "power-restart" },
                    focus: () => S.toast("Start → ⏻ → 🔄 Restart.")
                },
                {
                    id: "s8", text: "Tắt máy đúng cách bằng Shut down",
                    hint: "Start → ⏻ → ⏻ Shut down. Chờ màn hình báo 'Máy đã tắt'.",
                    match: { action: "power-shutdown" },
                    focus: () => S.toast("Start → ⏻ → ⏻ Shut down.")
                },
                {
                    id: "s9", text: "Bật lại máy bằng nút ▶ Bật máy",
                    hint: "Khi màn hình đen hiện 'Máy đã tắt', bấm nút ▶ Bật máy.",
                    match: { action: "boot-done" }
                }
            ]
        },

        7: {
            title: "Bài 07 — Cửa sổ ứng dụng và Menu",
            subtitle: "Snap, thu nhỏ, phóng to, chuyển đổi và đóng cửa sổ",
            finish: "Bé đã điều khiển cửa sổ như một ảo thuật gia: snap trái/phải, phóng to, thu nhỏ, chuyển đổi và đóng gọn gàng!",
            steps: [
                {
                    id: "s1", text: "Mở Notepad",
                    hint: "Start Menu → 📝 Notepad.",
                    match: { action: "app-open", app: "notepad" },
                    focus: () => S.toast("Mở Notepad từ Start Menu.")
                },
                {
                    id: "s2", text: "Mở Calculator",
                    hint: "Start Menu → 🧮 Calculator.",
                    match: { action: "app-open", app: "calculator" },
                    focus: () => S.toast("Mở Calculator từ Start Menu.")
                },
                {
                    id: "s3", text: "Snap Notepad sang nửa TRÁI màn hình",
                    hint: "Kéo thanh tiêu đề Notepad vào sát mép trái màn hình.",
                    match: { action: "win-snap", app: "notepad", side: "left" },
                    focus: () => S.toast("Giữ thanh tiêu đề Notepad và kéo sang sát mép TRÁI màn hình.")
                },
                {
                    id: "s4", text: "Snap Calculator sang nửa PHẢI màn hình",
                    hint: "Kéo thanh tiêu đề Calculator vào sát mép phải màn hình.",
                    match: { action: "win-snap", app: "calculator", side: "right" },
                    focus: () => S.toast("Giữ thanh tiêu đề Calculator và kéo sang sát mép PHẢI màn hình.")
                },
                {
                    id: "s5", text: "Phóng to Calculator bằng nút □",
                    hint: "Bấm nút □ ở góc phải trên cửa sổ Calculator.",
                    match: { action: "win-maximize", app: "calculator" },
                    focus: () => { S.openApp("calculator"); S.toast("Nút □ nằm giữa — và ✕ ở góc phải trên cửa sổ."); }
                },
                {
                    id: "s6", text: "Thu nhỏ Calculator bằng nút —",
                    hint: "Bấm nút — ở góc phải trên cửa sổ Calculator.",
                    match: { action: "win-minimize", app: "calculator" },
                    focus: () => { S.openApp("calculator"); S.toast("Nút — nằm bên trái nút □."); }
                },
                {
                    id: "s7", text: "Chuyển về Notepad bằng cách bấm trên Taskbar",
                    hint: "Bấm vào nút Notepad trên thanh Taskbar dưới cùng.",
                    match: { action: "win-focus", app: "notepad" },
                    focus: () => S.toast("Bấm vào nút Notepad trên thanh Taskbar dưới cùng.")
                },
                {
                    id: "s8", text: "Đóng Notepad bằng nút ✕ (hoặc Alt+F4)",
                    hint: "Bấm nút ✕ đỏ ở góc phải trên cửa sổ Notepad.",
                    match: { action: "app-close", app: "notepad" }
                },
                {
                    id: "s9", text: "Đóng nốt cửa sổ Calculator",
                    hint: "Mở lại Calculator từ Taskbar nếu đang thu nhỏ, rồi bấm ✕.",
                    match: { action: "app-close", app: "calculator" }
                }
            ]
        },

        8: {
            title: "Bài 08 — Tệp tin và định dạng dữ liệu",
            subtitle: "File Explorer: xem đuôi tệp, tạo thư mục, xem thuộc tính, xóa và khôi phục",
            finish: "Bé đã biết quản lý tệp: bật đuôi tệp, tạo thư mục, xem Properties, xóa vào Recycle Bin và khôi phục. Nhà sưu tầm tệp tin thực thụ!",
            setup: {
                folders: ["Documents/HocTap_Win10"],
                files: [
                    { name: "BaiHoc.txt", folder: "Documents/HocTap_Win10", size: 1536, content: "Bài học đầu tiên về tệp tin." },
                    { name: "GhiChu.txt", folder: "Documents/HocTap_Win10", size: 900, content: "Ghi chú quan trọng." }
                ]
            },
            steps: [
                {
                    id: "s1", text: "Mở File Explorer",
                    hint: "Bấm biểu tượng 📁 trên Taskbar hoặc nháy đúp This PC trên Desktop.",
                    match: { action: "app-open", app: "explorer" },
                    focus: () => S.toast("Nháy đúp This PC trên Desktop, hoặc bấm biểu tượng 📁 trên Taskbar.")
                },
                {
                    id: "s2", text: "Mở thư mục Documents",
                    hint: "Trong File Explorer, bấm Documents ở cột bên trái.",
                    match: { action: "explorer-navigate", path: "Documents" },
                    focus: () => S.toast("Documents nằm ở cột bên trái của File Explorer.")
                },
                {
                    id: "s3", text: "Mở thư mục con HocTap_Win10",
                    hint: "Nháy đúp vào thư mục 📁 HocTap_Win10 trong khung bên phải.",
                    match: { action: "explorer-open-folder", name: "HocTap_Win10" },
                    focus: () => {
                        S.openApp("explorer");
                        S.state.explorerPath = "Documents";
                        S.refreshApp("explorer");
                        S.toast("Nháy đúp thư mục HocTap_Win10 trong khung bên phải.");
                    }
                },
                {
                    id: "s4", text: "BẬT hiển thị phần mở rộng tệp (.txt, .png…)",
                    hint: "Bấm nút 👁 Extensions: OFF trên thanh công cụ File Explorer.",
                    match: { action: "explorer-extension-toggle", value: true },
                    focus: () => S.toast("Nút 👁 Extensions: OFF nằm trên thanh công cụ File Explorer.")
                },
                {
                    id: "s5", text: "Tạo thư mục mới tên 'SaoLuu'",
                    hint: "Bấm 📁 New folder, nhập tên SaoLuu rồi bấm Create.",
                    match: { action: "explorer-new-folder", name: "SaoLuu" },
                    focus: () => S.toast("Bấm 📁 New folder trên thanh công cụ, nhập SaoLuu rồi Create.")
                },
                {
                    id: "s6", text: "Xem Properties của tệp BaiHoc.txt",
                    hint: "Chọn BaiHoc.txt rồi bấm ℹ Properties (hoặc nháy phải → Properties).",
                    match: { action: "explorer-properties", name: "BaiHoc.txt" },
                    focus: () => S.toast("Chọn BaiHoc.txt rồi bấm nút ℹ Properties trên thanh công cụ.")
                },
                {
                    id: "s7", text: "Xóa tệp GhiChu.txt vào Recycle Bin",
                    hint: "Chọn GhiChu.txt rồi bấm 🗑 Delete.",
                    match: { action: "explorer-delete", name: "GhiChu.txt" },
                    focus: () => S.toast("Chọn GhiChu.txt rồi bấm nút 🗑 Delete trên thanh công cụ.")
                },
                {
                    id: "s8", text: "Mở Recycle Bin",
                    hint: "Nháy đúp biểu tượng 🗑️ Recycle Bin trên Desktop hoặc mở từ Start Menu.",
                    match: { action: "app-open", app: "recycle" },
                    focus: () => S.toast("Biểu tượng 🗑️ Recycle Bin nằm trên Desktop.")
                },
                {
                    id: "s9", text: "Khôi phục GhiChu.txt từ Recycle Bin",
                    hint: "Trong Recycle Bin, bấm nút Restore cạnh tệp GhiChu.txt.",
                    match: { action: "explorer-restore", name: "GhiChu.txt" },
                    focus: () => { S.openApp("recycle"); S.toast("Bấm nút Restore bên cạnh tệp GhiChu.txt."); }
                }
            ]
        },

        9: {
            title: "Bài 09 — Internet và an toàn số",
            subtitle: "Luyện nhận diện website an toàn và trang lừa đảo trong Microsoft Edge",
            finish: "Bé đã nhận diện đúng trang an toàn, phát hiện trang lừa đảo và ghi lại quy tắc an toàn của mình. Hãy chơi mini game Tình Huống An Toàn để thử thách thêm!",
            steps: [
                {
                    id: "s1", text: "Mở Microsoft Edge",
                    hint: "Bấm biểu tượng 🌐 trên Taskbar hoặc trong Start Menu.",
                    match: { action: "app-open", app: "edge" },
                    focus: () => S.toast("Edge là trình duyệt web — biểu tượng chữ e màu xanh trên Taskbar.")
                },
                {
                    id: "s2", text: "Truy cập trang học tập an toàn edu.vn",
                    hint: "Bấm ô 🎓 Trang học tập trên trang mới của Edge.",
                    match: { action: "browser-visit", url: "edu.vn" },
                    focus: () => { S.openApp("edge"); S.toast("Bấm ô 🎓 Trang học tập trên trang mới."); }
                },
                {
                    id: "s3", text: "Mở trang lừa đảo free-iphone.win để quan sát",
                    hint: "Về trang mới rồi bấm ô 🎁 Quà tặng? để xem trang giả mạo.",
                    match: { action: "browser-visit", url: "free-iphone.win" },
                    focus: () => { S.openApp("edge"); S.toast("Bấm 🏠 để về trang mới, rồi chọn ô 🎁 Quà tặng?"); }
                },
                {
                    id: "s4", text: "Bấm 'Nhận thưởng ngay' để xem Windows cảnh báo",
                    hint: "Đây là mô phỏng an toàn: bấm nút đỏ để thấy hộp thoại cảnh báo lừa đảo.",
                    match: { action: "browser-scam-detect" }
                },
                {
                    id: "s5", text: "Đóng trang lừa đảo, quay về trang mới",
                    hint: "Bấm nút 🏠 trên thanh địa chỉ của Edge.",
                    match: { action: "browser-visit", url: "home" },
                    focus: () => S.toast("Bấm nút 🏠 ở góc trái thanh địa chỉ.")
                },
                {
                    id: "s6", text: "Mở Notepad để ghi quy tắc an toàn",
                    hint: "Start Menu → 📝 Notepad.",
                    match: { action: "app-open", app: "notepad" },
                    focus: () => S.toast("Mở Notepad từ Start Menu.")
                },
                {
                    id: "s7", text: "Gõ ít nhất 20 ký tự về quy tắc an toàn của em",
                    hint: "Ví dụ: Khong chia se mat khau va ma OTP cho bat ky ai.",
                    when: (action, data) => action === "notepad-type" && data.length >= 20,
                    focus: () => { S.openApp("notepad"); S.toast("Gõ quy tắc an toàn đầu tiên của em vào Notepad."); }
                }
            ]
        },

        10: {
            title: "Bài 10 — Bản đồ hệ thống máy tính",
            subtitle: "Khám phá thông số thật của máy: CPU, RAM, phiên bản Windows và ổ đĩa",
            finish: "Bé đã thu thập đủ dữ liệu để vẽ bản đồ hệ thống: tên máy, CPU, RAM, hiệu năng và ổ đĩa. Hãy chơi mini game Bản Đồ Máy Tính để ghép 4 lớp thật chuẩn!",
            steps: [
                {
                    id: "s1", text: "Mở Start Menu",
                    hint: "Bấm nút ⊞ ở góc trái thanh Taskbar.",
                    match: { action: "start-open" }
                },
                {
                    id: "s2", text: "Mở Settings để xem thông tin máy",
                    hint: "Bấm ô ⚙️ Settings trong Start Menu.",
                    match: { action: "app-open", app: "settings" },
                    focus: () => S.toast("Settings nằm trong Start Menu, biểu tượng bánh răng ⚙️.")
                },
                {
                    id: "s3", text: "Mở System → About để đọc tên máy, CPU, RAM",
                    hint: "Trong Settings chọn System, rồi bấm nút About ở hàng trên.",
                    match: { action: "settings-about" },
                    focus: () => {
                        S.openApp("settings");
                        S.state.settingsSection = "system";
                        S.state.settingsPage = "about";
                        S.refreshApp("settings");
                        S.toast("Bấm System ở cột trái, sau đó chọn About.");
                    }
                },
                {
                    id: "s4", text: "Mở Task Manager",
                    hint: "Bấm Ctrl + Shift + Esc, hoặc tìm Task Manager trong Start Menu.",
                    match: { action: "app-open", app: "taskmgr" },
                    focus: () => S.toast("Nhấn Ctrl + Shift + Esc để mở Task Manager.")
                },
                {
                    id: "s5", text: "Chuyển sang tab Performance",
                    hint: "Trong Task Manager, bấm tab Performance ở hàng trên.",
                    match: { action: "taskmanager-tab", tab: "performance" },
                    focus: () => { S.openApp("taskmgr"); S.toast("Bấm tab Performance trong Task Manager."); }
                },
                {
                    id: "s6", text: "Mở File Explorer xem ổ đĩa This PC",
                    hint: "Nháy đúp This PC trên Desktop hoặc bấm 📁 trên Taskbar.",
                    match: { action: "app-open", app: "explorer" },
                    focus: () => S.toast("Mở This PC để xem các ổ đĩa và dung lượng.")
                },
                {
                    id: "s7", text: "Xem dung lượng trong Settings → System → Storage",
                    hint: "Quay lại Settings, chọn System rồi bấm Storage.",
                    match: { action: "settings-open", page: "storage" },
                    focus: () => {
                        S.openApp("settings");
                        S.state.settingsSection = "system";
                        S.state.settingsPage = "storage";
                        S.refreshApp("settings");
                        S.toast("Trong Settings, chọn System → Storage.");
                    }
                },
                {
                    id: "s8", text: "Gõ 20+ ký tự tên 4 lớp hệ thống vào Notepad",
                    hint: "Ví dụ: Phan cung - He dieu hanh - Ung dung - Du lieu.",
                    when: (action, data) => action === "notepad-type" && data.length >= 20,
                    focus: () => { S.openApp("notepad"); S.toast("Gõ tên 4 lớp: Phần cứng, Hệ điều hành, Ứng dụng, Dữ liệu."); }
                }
            ]
        }
    };
})();
