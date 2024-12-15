import React from 'react';
import { Link } from 'react-router-dom';
import './TaiLieuSo.css';

const TaiLieuSo = () => {
  return (
    <div className="service-detail-container">
      <Link to="/dich-vu" className="back-button">
        <i className="fas fa-arrow-left"></i> Quay lại
      </Link>

      <h1>Tài Liệu Số</h1>

      <section className="service-section">
        <h2>Hướng dẫn truy cập</h2>
        <ol>
          <li>Đăng nhập vào hệ thống thư viện số</li>
          <li>Truy cập mục "Tài liệu số"</li>
          <li>Tìm kiếm tài liệu theo từ khóa</li>
          <li>Chọn tài liệu cần đọc/tải</li>
          <li>Đọc trực tuyến hoặc tải về máy</li>
        </ol>
      </section>

      <section className="service-section">
        <h2>Cơ sở dữ liệu</h2>
        <ul>
          <li>Sách điện tử chuyên ngành</li>
          <li>Giáo trình điện tử</li>
          <li>Luận văn, luận án</li>
          <li>Bài báo khoa học</li>
          <li>Tạp chí chuyên ngành</li>
          <li>Tài liệu tham khảo</li>
        </ul>
      </section>

      <section className="service-section">
        <h2>Quy định sử dụng</h2>
        <ul className="rules-list">
          <li>Chỉ sử dụng cho mục đích học tập, nghiên cứu</li>
          <li>Không chia sẻ tài khoản cho người khác</li>
          <li>Không phát tán tài liệu số trái phép</li>
          <li>Tôn trọng quyền sở hữu trí tuệ</li>
          <li>Trích dẫn nguồn khi sử dụng tài liệu</li>
        </ul>
      </section>

      <section className="service-section">
        <h2>Hỗ trợ kỹ thuật</h2>
        <ul>
          <li>Email: support@thuvien.ptit.edu.vn</li>
          <li>Hotline: 0123.456.789</li>
          <li>Thời gian hỗ trợ: 8:00 - 17:00 các ngày làm việc</li>
        </ul>
      </section>
    </div>
  );
};

export default TaiLieuSo;