// src/pages/Help.js
import React from 'react';
import './Help.css';

const Help = () => {
  const helpSections = [
    {
      id: 1,
      title: "Hướng dẫn tìm kiếm tài liệu",
      icon: "🔍",
      steps: [
        "Truy cập vào mục Tìm kiếm trên thanh công cụ",
        "Nhập từ khóa tìm kiếm (tên sách, tác giả, chủ đề...)",
        "Sử dụng bộ lọc để thu hẹp kết quả tìm kiếm",
        "Xem thông tin chi tiết tài liệu bằng cách nhấp vào kết quả"
      ]
    },
    {
      id: 2,
      title: "Quy trình mượn sách",
      icon: "📚",
      steps: [
        "Đăng nhập vào tài khoản thư viện",
        "Tìm và chọn sách muốn mượn",
        "Kiểm tra tình trạng sách (có sẵn hay đang được mượn)",
        "Thực hiện yêu cầu mượn sách",
        "Đến thư viện nhận sách trong vòng 24h sau khi đặt mượn"
      ]
    },
    {
      id: 3,
      title: "Hướng dẫn sử dụng thư viện số",
      icon: "💻",
      steps: [
        "Đăng nhập vào hệ thống",
        "Truy cập mục Thư viện số",
        "Tìm kiếm tài liệu số cần đọc",
        "Chọn định dạng phù hợp (PDF, EPUB...)",
        "Tải xuống hoặc đọc trực tuyến"
      ]
    },
    {
      id: 4,
      title: "Các câu hỏi thường gặp",
      icon: "❓",
      questions: [
        {
          q: "Làm thế nào để gia hạn sách?",
          a: "Bạn có thể gia hạn sách thông qua tài khoản online hoặc trực tiếp tại thư viện trước ngày hết hạn 2 ngày."
        },
        {
          q: "Tôi có thể mượn tối đa bao nhiêu cuốn sách?",
          a: "Mỗi độc giả có thể mượn tối đa 5 cuốn sách trong thời gian 14 ngày."
        },
        {
          q: "Làm thế nào để đăng ký làm thẻ thư viện?",
          a: "Bạn cần mang CMND/CCCD và một ảnh 3x4 đến quầy thủ thư để đăng ký làm thẻ."
        }
      ]
    }
  ];

  return (
    <div className="help-container">
      <h1>Trung tâm trợ giúp</h1>
      
      <div className="help-sections">
        {helpSections.map(section => (
          <div key={section.id} className="help-section">
            <div className="section-header">
              <span className="section-icon">{section.icon}</span>
              <h2>{section.title}</h2>
            </div>
            
            {section.steps && (
              <ol className="steps-list">
                {section.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            )}
            
            {section.questions && (
              <div className="faq-list">
                {section.questions.map((qa, index) => (
                  <div key={index} className="faq-item">
                    <h3>{qa.q}</h3>
                    <p>{qa.a}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="contact-support">
        <h2>Vẫn cần trợ giúp?</h2>
        <p>Liên hệ với chúng tôi:</p>
        <div className="contact-methods">
          <a href="tel:0123456789" className="contact-button">
            <i className="fas fa-phone"></i> Gọi điện
          </a>
          <a href="mailto:support@library.com" className="contact-button">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="#" className="contact-button">
            <i className="fas fa-comments"></i> Chat trực tuyến
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;