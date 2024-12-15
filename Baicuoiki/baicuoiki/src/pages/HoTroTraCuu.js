import React from 'react';
import { Link } from 'react-router-dom';
import './HoTroTraCuu.css';

const HoTroTraCuu = () => {
  return (
    <div className="service-detail-container">
      <Link to="/dich-vu" className="back-button">
        <i className="fas fa-arrow-left"></i> Quay lại
      </Link>

      <h1>Hỗ Trợ Tra Cứu</h1>

      <section className="service-section">
        <h2>Dịch vụ hỗ trợ</h2>
        <ul>
          <li>Hướng dẫn tìm kiếm tài liệu</li>
          <li>Tra cứu thông tin chuyên ngành</li>
          <li>Tư vấn nguồn tài liệu tham khảo</li>
          <li>Hỗ trợ sử dụng cơ sở dữ liệu</li>
          <li>Giải đáp thắc mắc về tài liệu</li>
        </ul>
      </section>

      <section className="service-section">
        <h2>Hình thức hỗ trợ</h2>
        <ul>
          <li>Trực tiếp tại quầy thông tin</li>
          <li>Qua email: support@thuvien.ptit.edu.vn</li>
          <li>Qua điện thoại: 0123.456.789</li>
          <li>Qua chat trực tuyến</li>
        </ul>
      </section>

      <section className="service-section">
        <h2>Thời gian hỗ trợ</h2>
        <ul>
          <li>Thứ 2 - Thứ 6: 8:00 - 17:00</li>
          <li>Thứ 7: 8:00 - 12:00</li>
          <li>Chủ nhật và ngày lễ: Nghỉ</li>
        </ul>
      </section>
    </div>
  );
};

export default HoTroTraCuu;