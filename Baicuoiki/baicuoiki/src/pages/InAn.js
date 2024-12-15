import React from 'react';
import { Link } from 'react-router-dom';
import './InAn.css';

const InAn = () => {
  return (
    <div className="service-detail-container">
      <Link to="/dich-vu" className="back-button">
        <i className="fas fa-arrow-left"></i> Quay lại
      </Link>

      <h1>In Ấn & Photo Copy</h1>

      <section className="service-section">
        <h2>Dịch vụ cung cấp</h2>
        <ul>
          <li>In tài liệu đen trắng và màu</li>
          <li>Photo copy tài liệu</li>
          <li>Scan tài liệu</li>
          <li>In ấn khổ lớn</li>
          <li>Đóng spiral, bìa cứng</li>
        </ul>
      </section>

      <section className="service-section">
        <h2>Bảng giá dịch vụ</h2>
        <ul>
          <li>In đen trắng: 500đ/trang</li>
          <li>In màu: 2.000đ/trang</li>
          <li>Photo: 300đ/trang</li>
          <li>Scan: 1.000đ/trang</li>
          <li>Đóng spiral: 15.000đ/quyển</li>
        </ul>
      </section>

      <section className="service-section">
        <h2>Thời gian phục vụ</h2>
        <ul>
          <li>Thứ 2 - Thứ 6: 7:30 - 17:00</li>
          <li>Thứ 7: 8:00 - 12:00</li>
          <li>Chủ nhật: Nghỉ</li>
        </ul>
      </section>
    </div>
  );
};

export default InAn;