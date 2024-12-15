import React, { useState } from 'react';
import './MuonTraSach.css';

function MuonTraSach() {
  const [borrowForm, setBorrowForm] = useState({
    readerName: '',
    bookTitle: '',
    borrowDate: '',
    returnDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic mượn sách
    console.log('Form submitted:', borrowForm);
  };

  return (
    <div className="borrow-return-container">
      <h1>Mượn - Trả Sách</h1>
      
      <form onSubmit={handleSubmit} className="borrow-form">
        <div className="form-group">
          <label>Tên người mượn:</label>
          <input
            type="text"
            value={borrowForm.readerName}
            onChange={(e) => setBorrowForm({...borrowForm, readerName: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Tên sách:</label>
          <input
            type="text"
            value={borrowForm.bookTitle}
            onChange={(e) => setBorrowForm({...borrowForm, bookTitle: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Ngày mượn:</label>
          <input
            type="date"
            value={borrowForm.borrowDate}
            onChange={(e) => setBorrowForm({...borrowForm, borrowDate: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Ngày trả:</label>
          <input
            type="date"
            value={borrowForm.returnDate}
            onChange={(e) => setBorrowForm({...borrowForm, returnDate: e.target.value})}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Xác nhận mượn sách</button>
      </form>
    </div>
  );
}

export default MuonTraSach; 