import React from 'react';
import { Link } from 'react-router-dom';
import './PhongDoc.css';

const PhongDoc = () => {
  return (
    <div className="service-detail-container">
      <Link to="/dich-vu" className="back-button">
        <i className="fas fa-arrow-left"></i> Quay lại
      </Link>

      <h1>Phòng Đọc</h1>

      <section className="service-section">
        <h2>Giờ phục vụ</h2>
        <ul>
          <li>Thứ 2 - Thứ 6: 7:30 - 21:00</li>
          <li>Thứ 7: 7:30 - 17:00</li>
          <li>Chủ nhật: Nghỉ</li>
        </ul>
      </section>

      <section className="service-section">
        <h2>Khu vực phòng đọc</h2>
        <ul>
          <li>Khu vực đọc yên tĩnh (Tầng 2)</li>
          <li>Khu vực học nhóm (Tầng 1)</li>
          <li>Khu vực đọc báo, tạp chí</li>
          <li>Khu vực máy tính tra cứu</li>
          <li>Phòng đa phương tiện</li>
        </ul>
      </section>

      <section className="service-section">
        <h2>Tiện ích</h2>
        <ul className="features">
          <li>Wifi miễn phí</li>
          <li>Điều hòa nhiệt độ</li>
          <li>Ánh sáng tự nhiên</li>
          <li>Tủ để đồ cá nhân</li>
          <li>Máy lọc nước uống</li>
        </ul>
      </section>

      <section className="service-section">
        <h2>Nội quy phòng đọc</h2>
        <ul className="rules-list">
          <li>Giữ trật tự, không nói chuyện lớn tiếng</li>
          <li>Không mang đồ ăn, thức uống vào phòng đọc</li>
          <li>Tắt chuông điện thoại hoặc để chế độ rung</li>
          <li>Giữ gìn vệ sinh chung</li>
          <li>Không tự ý di chuyển bàn ghế</li>
          <li>Để đồ đúng nơi quy định</li>
        </ul>
      </section>
    </div>
  );
};

export default PhongDoc;