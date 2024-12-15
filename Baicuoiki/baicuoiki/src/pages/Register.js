import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    studentId: '',
    fullName: '',
    faculty: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <div className="register-header">
          <div className="school-name">
            <h1>HỌC VIỆN CÔNG NGHỆ</h1>
            <h1>BƯU CHÍNH VIỄN THÔNG</h1>
          </div>
          <h2>ĐĂNG KÝ TÀI KHOẢN THƯ VIỆN</h2>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label>Mã sinh viên</label>
            <div className="input-with-icon">
              <i className="fas fa-id-card"></i>
              <input
                type="text"
                name="studentId"
                placeholder="Nhập mã sinh viên"
                value={formData.studentId}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Họ và tên</label>
            <div className="input-with-icon">
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="fullName"
                placeholder="Nhập họ và tên"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Khoa</label>
            <div className="input-with-icon">
              <i className="fas fa-graduation-cap"></i>
              <select
                name="faculty"
                value={formData.faculty}
                onChange={handleChange}
                required
              >
                <option value="">Chọn khoa</option>
                <option value="CNTT">Công nghệ thông tin</option>
                <option value="DTVT">Điện tử viễn thông</option>
                <option value="MM">Đa phương tiện</option>
                <option value="QTKD">Quản trị kinh doanh</option>
                <option value="MKT">Marketing</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <div className="input-with-icon">
              <i className="fas fa-lock"></i>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Nhập mật khẩu"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <i
                className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"} password-toggle`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
          </div>

          <div className="form-group">
            <label>Xác nhận mật khẩu</label>
            <div className="input-with-icon">
              <i className="fas fa-lock"></i>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <i
                className={`fas ${showConfirmPassword ? "fa-eye" : "fa-eye-slash"} password-toggle`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              ></i>
            </div>
          </div>

          <button type="submit" className="register-button">Đăng ký</button>

          <div className="auth-links">
            <Link to="/login" className="login-link">Đã có tài khoản? Đăng nhập</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;