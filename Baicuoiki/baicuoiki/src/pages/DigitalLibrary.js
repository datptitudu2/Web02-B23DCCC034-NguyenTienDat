import React from 'react';
import './DigitalLibrary.css';

const DigitalLibrary = () => {
  const categories = [
    { id: 1, name: 'Giáo trình', icon: '📚', count: 150 },
    { id: 2, name: 'Luận văn', icon: '📝', count: 300 },
    { id: 3, name: 'Tạp chí', icon: '📰', count: 200 },
    { id: 4, name: 'Tài liệu tham khảo', icon: '📖', count: 250 }
  ];

  const recentBooks = [
    { id: 1, title: 'Lập trình Web nâng cao', author: 'Nguyễn Văn A', cover: 'book1.jpg' },
    { id: 2, title: 'Cơ sở dữ liệu', author: 'Trần Văn B', cover: 'book2.jpg' },
    { id: 3, title: 'An toàn mạng', author: 'Lê Văn C', cover: 'book3.jpg' },
    { id: 4, title: 'Trí tuệ nhân tạo', author: 'Phạm Văn D', cover: 'book4.jpg' }
  ];

  return (
    <div className="digital-library">
      {/* Search Section */}
      <section className="search-section">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Tìm kiếm tài liệu, sách, luận văn..." 
            className="search-input"
          />
          <button className="search-button">
            <i className="fas fa-search"></i> Tìm kiếm
          </button>
        </div>
        <div className="advanced-search">
          <a href="#">Tìm kiếm nâng cao</a>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Danh Mục Tài Liệu</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.name}</h3>
              <p>{category.count} tài liệu</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Books Section */}
      <section className="recent-books-section">
        <h2>Tài Liệu Mới Nhất</h2>
        <div className="books-grid">
          {recentBooks.map(book => (
            <div key={book.id} className="book-card">
              <div className="book-cover">
                {/* <img src={book.cover} alt={book.title} /> */}
              </div>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <button className="read-button">Đọc ngay</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="quick-access-section">
        <h2>Truy Cập Nhanh</h2>
        <div className="quick-access-grid">
          <div className="quick-access-card">
            <i className="fas fa-clock"></i>
            <h3>Lịch sử đọc</h3>
          </div>
          <div className="quick-access-card">
            <i className="fas fa-bookmark"></i>
            <h3>Đánh dấu</h3>
          </div>
          <div className="quick-access-card">
            <i className="fas fa-download"></i>
            <h3>Tải xuống</h3>
          </div>
          <div className="quick-access-card">
            <i className="fas fa-heart"></i>
            <h3>Yêu thích</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalLibrary;