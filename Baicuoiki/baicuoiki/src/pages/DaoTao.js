import React from 'react';
import { Link } from 'react-router-dom';
import './DaoTao.css';

const DaoTao = () => {
  return (
    <div className="service-detail-container">
      <Link to="/dich-vu" className="back-button">
        <i className="fas fa-arrow-left"></i> Quay lại
      </Link>

      <h1>Đào Tạo Người Dùng</h1>

      <section className="service-section">
        <h2>Nội dung đào tạo</h2>
        <ul>
          <li>Hướng dẫn sử dụng thư viện</li>
          <li>Kỹ năng tìm kiếm thông tin</li>
          <li>Sử dụng cơ sở dữ liệu trực tuyến</li>
          <li>Kỹ năng trích dẫn tài liệu</li>
          <li>Phương pháp nghiên cứu tài liệu</li>
        </ul>
      </section>

      <section className="service-section">
        <h2>Lịch đào tạo</h2>
        <ul>
          <li>Đầu mỗi học kỳ</li>
          <li>Theo yêu cầu của khoa/ngành</li>
          <li>Đăng ký theo nhóm (tối thiểu 5 người)</li>
        </ul>
      </section>

      <section className="service-section">
        <h2>Đăng ký đào tạo</h2>
        <ul>
          <li>Email: daotao@thuvien.ptit.edu.vn</li>
          <li>Điện thoại: 0123.456.789</li>
          <li>Trực tiếp tại quầy thông tin thư viện</li>
        </ul>
      </section>
    </div>
  );
};

export default DaoTao;