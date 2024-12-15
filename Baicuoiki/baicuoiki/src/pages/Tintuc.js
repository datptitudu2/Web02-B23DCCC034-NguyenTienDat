import React, { useState } from 'react';
import './Tintuc.css';

const Tintuc = () => {
  const [newsItems] = useState([
    {
      id: 1,
      title: "Chương Trình Đọc Sách Mùa Hè 2024",
      date: "15/03/2024",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80",
      category: "Sự Kiện",
      content: "Tham gia chương trình đọc sách mùa hè với nhiều phần thưởng hấp dẫn. Chương trình dành cho mọi lứa tuổi, bắt đầu từ ngày 01/06/2024.",
    },
    {
      id: 2,
      title: "Bổ Sung Sách Mới Tháng 3",
      date: "10/03/2024",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80",
      category: "Thông Báo",
      content: "Thư viện vừa nhập về bộ sưu tập sách mới với hơn 500 đầu sách thuộc nhiều thể loại: văn học, khoa học, thiếu nhi...",
    },
    {
      id: 3,
      title: "Gặp Gỡ Tác Giả - Nhà Văn Nguyễn Nhật Ánh",
      date: "05/03/2024",
      image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?q=80",
      category: "Sự Kiện",
      content: "Buổi giao lưu và ký tặng sách cùng nhà văn Nguyễn Nhật Ánh sẽ diễn ra vào ngày 15/04/2024. Đăng ký ngay!",
    },
    {
      id: 4,
      title: "Hướng Dẫn Sử Dụng Thư Viện Số",
      date: "01/03/2024",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80",
      category: "Hướng Dẫn",
      content: "Khám phá cách sử dụng hệ thống thư viện số mới. Truy cập 24/7 với thẻ thư viện của bạn.",
    }
  ]);

  return (
    <div className="tintuc-container">
      <header className="tintuc-header">
        <h1>Tin Tức & Sự Kiện</h1>
        <p>Cập nhật thông tin mới nhất từ thư viện</p>
      </header>

      <div className="tintuc-filter">
        <button className="filter-btn active">Tất Cả</button>
        <button className="filter-btn">Sự Kiện</button>
        <button className="filter-btn">Thông Báo</button>
        <button className="filter-btn">Hướng Dẫn</button>
      </div>

      <section className="tintuc-grid">
        {newsItems.map((item) => (
          <article key={item.id} className="tintuc-card">
            <div className="tintuc-image">
              <img src={item.image} alt={item.title} />
              <span className="tintuc-category">{item.category}</span>
            </div>
            <div className="tintuc-content">
              <h2>{item.title}</h2>
              <p className="tintuc-date">
                <i className="far fa-calendar-alt"></i> {item.date}
              </p>
              <p className="tintuc-excerpt">{item.content}</p>
              <button className="read-more-btn">Xem Thêm</button>
            </div>
          </article>
        ))}
      </section>

      <div className="tintuc-pagination">
        <button className="pagination-btn">&laquo;</button>
        <button className="pagination-btn active">1</button>
        <button className="pagination-btn">2</button>
        <button className="pagination-btn">3</button>
        <button className="pagination-btn">&raquo;</button>
      </div>
    </div>
  );
};

export default Tintuc;