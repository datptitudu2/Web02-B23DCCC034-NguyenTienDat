import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Liên Hệ</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Thông Tin Liên Hệ</h3>
          <p><strong>Địa chỉ:</strong> 122 Hoàng Quốc Việt, Q.Cầu Giấy, Hà Nội</p>
          <p><strong>Điện thoại:</strong> (024) 3756 4321</p>
          <p><strong>Email:</strong> thuvien@ptit.edu.vn</p>
          <p><strong>Giờ làm việc:</strong> Thứ 2 - Thứ 6: 8:00 - 17:00</p>
        </div>
        
        <div className="contact-form">
          <h3>Gửi Thông Tin Liên Hệ</h3>
          <form>
            <div className="form-group">
              <label>Họ và tên:</label>
              <input type="text" required />
            </div>
            
            <div className="form-group">
              <label>Email:</label>
              <input type="email" required />
            </div>
            
            <div className="form-group">
              <label>Tiêu đề:</label>
              <input type="text" required />
            </div>
            
            <div className="form-group">
              <label>Nội dung:</label>
              <textarea rows="5" required></textarea>
            </div>
            
            <button type="submit">Gửi</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 