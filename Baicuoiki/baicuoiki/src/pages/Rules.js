import React from 'react';
import './Rules.css';

const Rules = () => {
    return (
        <div className="rules-page">
            <div className="page-title">
                <h1>NỘI QUY THƯ VIỆN</h1>
            </div>

            <div className="rules-container">
                <div className="rules-section">
                    <h2>I. Quy định chung</h2>
                    <ul>
                        <li>Xuất trình thẻ sinh viên/thẻ thư viện khi vào thư viện</li>
                        <li>Giữ gìn trật tự, vệ sinh chung</li>
                        <li>Không mang đồ ăn, thức uống vào thư viện</li>
                        <li>Tắt chuông điện thoại, không nghe nhạc, nói chuyện lớn tiếng</li>
                        <li>Giữ gìn sách, báo, tài liệu và trang thiết bị của thư viện</li>
                    </ul>
                </div>

                <div className="rules-section">
                    <h2>II. Quy định mượn - trả tài liệu</h2>
                    <ul>
                        <li>Mỗi sinh viên được mượn tối đa 3 cuốn sách</li>
                        <li>Thời hạn mượn: 14 ngày và có thể gia hạn 1 lần</li>
                        <li>Trả sách đúng hạn, sách còn nguyên vẹn</li>
                        <li>Nộp phạt khi trả sách trễ hạn: 5.000đ/ngày/cuốn</li>
                        <li>Đền bù khi làm mất hoặc hư hỏng sách</li>
                    </ul>
                </div>

                <div className="rules-section">
                    <h2>III. Xử lý vi phạm</h2>
                    <ul>
                        <li>Nhắc nhở khi vi phạm lần đầu</li>
                        <li>Tạm ngừng quyền mượn sách khi tái phạm</li>
                        <li>Thu hồi thẻ thư viện khi vi phạm nghiêm trọng</li>
                        <li>Bồi thường thiệt hại theo quy định</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Rules;