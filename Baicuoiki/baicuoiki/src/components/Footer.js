import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Thông Tin Liên Hệ</h3>
          <p><i className="fas fa-map-marker-alt"></i> 122 Đường Hoàng Quốc Việt, Quận Cầu Giấy, TP Hà Nội</p>
          <p><i className="fas fa-phone"></i> (84) 123-456-789</p>
          <p><i className="fas fa-envelope"></i> thuvienptit@ptit.edu.vn</p>
          <p><i className="fas fa-clock"></i> Giờ mở cửa: 8:00 - 19:00</p>
        </div>

        <div className="footer-section">
          <h3>Liên Kết Nhanh</h3>
          <ul>
            <li><Link to="/">Trang Chủ</Link></li>
            <li><Link to="/search">Tìm Kiếm Sách</Link></li>
            <li><Link to="/news">Tin Tức</Link></li>
            <li><Link to="/login">Đăng Nhập</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Dịch Vụ</h3>
          <ul>
            <li>Mượn sách online</li>
            <li>Đọc sách điện tử</li>
            <li>Tra cứu tài liệu</li>
            <li>Hướng dẫn học tập</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Kết Nối Với Chúng Tôi</h3>
          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
          </div>
          <div className="newsletter">
            <h4>Đăng ký nhận tin</h4>
            <div className="newsletter-form">
              <input type="email" placeholder="Email của bạn" />
              <button>Đăng ký</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Thư Viện. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  );
};

export default Footer;
