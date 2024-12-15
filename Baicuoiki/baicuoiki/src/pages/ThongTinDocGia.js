import React, { useState } from 'react';
import './ThongTinDocGia.css';

function ThongTinDocGia() {
  const [readers] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      cardNumber: "DG001",
      joinDate: "2024-01-15",
      borrowedBooks: 2
    },
    // Thêm độc giả khác
  ]);

  return (
    <div className="readers-container">
      <h1>Thông Tin Độc Giả</h1>

      <div className="readers-list">
        <table>
          <thead>
            <tr>
              <th>Mã độc giả</th>
              <th>Họ tên</th>
              <th>Ngày đăng ký</th>
              <th>Số sách đang mượn</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {readers.map(reader => (
              <tr key={reader.id}>
                <td>{reader.cardNumber}</td>
                <td>{reader.name}</td>
                <td>{reader.joinDate}</td>
                <td>{reader.borrowedBooks}</td>
                <td>
                  <button className="edit-btn">Sửa</button>
                  <button className="delete-btn">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ThongTinDocGia; 