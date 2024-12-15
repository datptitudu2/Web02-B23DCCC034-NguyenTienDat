import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <h2>Dịch Vụ Thư Viện</h2>
      <div className="services-container">
        <Link to="/muon-tra-sach" className="service-item">
          <h3>Mượn - Trả Sách</h3>
          <p>Dịch vụ mượn và trả sách tại thư viện với thời hạn linh hoạt.</p>
        </Link>

        <Link to="/phong-doc" className="service-item">
          <h3>Phòng Đọc</h3>
          <p>Không gian yên tĩnh, thoáng mát dành cho việc học tập và nghiên cứu.</p>
        </Link>

        <Link to="/tai-lieu-so" className="service-item">
          <h3>Tài Liệu Số</h3>
          <p>Truy cập và tải tài liệu số, sách điện tử từ cơ sở dữ liệu của thư viện.</p>
        </Link>

        <Link to="/in-an" className="service-item">
          <h3>In Ấn & Photo Copy</h3>
          <p>Dịch vụ in ấn, photo copy tài liệu với giá sinh viên.</p>
        </Link>

        <Link to="/ho-tro-tra-cuu" className="service-item">
          <h3>Hỗ Trợ Tra Cứu</h3>
          <p>Đội ngũ thủ thư hỗ trợ tìm kiếm và tra cứu tài liệu.</p>
        </Link>

        <Link to="/dao-tao" className="service-item">
          <h3>Đào Tạo Người Dùng</h3>
          <p>Hướng dẫn sử dụng thư viện và các nguồn tài nguyên.</p>
        </Link>
      </div>
    </div>
  );
};

export default Services;