// src/pages/Search.js
import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('title'); // title, author, category
  const [results, setResults] = useState([]);

  // Mock data cho kết quả tìm kiếm
  const books = [
    {
      id: 1,
      title: 'Cơ Sở Lập Trình C++',
      author: 'Nguyễn Văn A',
      category: 'Công nghệ thông tin',
      publisher: 'NXB Giáo Dục',
      year: 2023,
      available: true,
      location: 'Kệ A2-15',
      description: 'Sách giới thiệu về ngôn ngữ lập trình C++ từ cơ bản đến nâng cao'
    },
    {
      id: 2,
      title: 'Nhập Môn Triết Học',
      author: 'Trần Thị B',
      category: 'Khoa học xã hội',
      publisher: 'NXB Đại học Quốc gia',
      year: 2022,
      available: false,
      location: 'Kệ B3-22',
      description: 'Giáo trình dành cho sinh viên năm nhất các ngành khoa học xã hội'
    },
    {
      id: 3,
      title: 'Kỹ Năng Thuyết Trình',
      author: 'Lê Văn C',
      category: 'Kỹ năng mềm',
      publisher: 'NXB Trẻ',
      year: 2024,
      available: true,
      location: 'Kệ C1-05',
      description: 'Hướng dẫn các kỹ năng thuyết trình chuyên nghiệp'
    },
  ];

  const handleSearch = () => {
    let filteredBooks = [];
    
    switch(searchType) {
      case 'title':
        filteredBooks = books.filter(book =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      case 'author':
        filteredBooks = books.filter(book =>
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      case 'category':
        filteredBooks = books.filter(book =>
          book.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      default:
        filteredBooks = books;
    }
    
    setResults(filteredBooks);
  };

  return (
    <div className="search-page">
      <h2>Tìm Kiếm Sách</h2>
      <div className="search-container">
        <div className="search-options">
          <select 
            value={searchType} 
            onChange={(e) => setSearchType(e.target.value)}
            className="search-type"
          >
            <option value="title">Tên sách</option>
            <option value="author">Tác giả</option>
            <option value="category">Thể loại</option>
          </select>
          
          <div className="search-bar">
            <input
              type="text"
              placeholder="Nhập từ khóa tìm kiếm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Tìm Kiếm</button>
          </div>
        </div>

        <div className="search-results">
          {results.length > 0 ? (
            results.map(book => (
              <div key={book.id} className="result-item">
                <div className="book-header">
                  <h3>{book.title}</h3>
                  <span className={`status ${book.available ? 'available' : 'borrowed'}`}>
                    {book.available ? 'Còn sách' : 'Đã mượn'}
                  </span>
                </div>
                <div className="book-info">
                  <p><strong>Tác giả:</strong> {book.author}</p>
                  <p><strong>Thể loại:</strong> {book.category}</p>
                  <p><strong>Nhà xuất bản:</strong> {book.publisher}</p>
                  <p><strong>Năm xuất bản:</strong> {book.year}</p>
                  <p><strong>Vị trí:</strong> {book.location}</p>
                  <p><strong>Mô tả:</strong> {book.description}</p>
                </div>
                {book.available && (
                  <button className="borrow-btn">Mượn sách</button>
                )}
              </div>
            ))
          ) : (
            <p className="no-results">Không tìm thấy kết quả phù hợp.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
