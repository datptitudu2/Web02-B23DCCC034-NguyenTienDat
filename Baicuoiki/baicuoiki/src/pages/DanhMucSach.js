import React, { useState } from 'react';
import './DanhMucSach.css';

function DanhMucSach() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const books = [
    {
      id: 1,
      title: "Đắc Nhân Tâm",
      author: "Dale Carnegie",
      category: "Tâm lý - Kỹ năng sống",
      available: true
    },
    {
      id: 2,
      title: "Nhà Giả Kim",
      author: "Paulo Coelho",
      category: "Tiểu thuyết",
      available: true
    },
    // Thêm sách khác ở đây
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="catalog-container">
      <h1>Danh Mục Sách</h1>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Tìm kiếm sách..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="books-grid">
        {filteredBooks.map(book => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>Tác giả: {book.author}</p>
            <p>Thể loại: {book.category}</p>
            <span className={`status ${book.available ? 'available' : 'borrowed'}`}>
              {book.available ? 'Còn sách' : 'Đã mượn'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DanhMucSach; 