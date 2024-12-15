import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [userInfo, setUserInfo] = useState({
    username: 'user123',
    fullName: 'Nguyễn Văn A',
    email: 'user@example.com',
    studentId: 'SV001',
    phoneNumber: '0123456789'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <span className="avatar-placeholder">NA</span>
          </div>
          <h2>{userInfo.fullName}</h2>
          <p>{userInfo.studentId}</p>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <h3>Thông Tin Cá Nhân</h3>
            <form onSubmit={handleSubmit} className="profile-form">
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  value={userInfo.username}
                  disabled
                  placeholder="Tên đăng nhập"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="fullName"
                  value={userInfo.fullName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="Họ và tên"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="studentId"
                  value={userInfo.studentId}
                  disabled
                  placeholder="Mã sinh viên"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={userInfo.phoneNumber}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="Số điện thoại"
                />
              </div>

              {isEditing ? (
                <div className="button-group">
                  <button type="submit" className="save-button">
                    Lưu thay đổi
                  </button>
                  <button 
                    type="button" 
                    className="cancel-button"
                    onClick={() => setIsEditing(false)}
                  >
                    Hủy
                  </button>
                </div>
              ) : (
                <button 
                  type="button" 
                  className="edit-button"
                  onClick={() => setIsEditing(true)}
                >
                  Chỉnh sửa thông tin
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;