import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-header">
                    <div className="school-name">
                        <h1>HỌC VIỆN CÔNG NGHỆ</h1>
                        <h1>BƯU CHÍNH VIỄN THÔNG</h1>
                    </div>
                    <h2>HỆ THỐNG THƯ VIỆN TRỰC TUYẾN</h2>
                </div>
                
                <div className="login-form">
                    <div className="form-group">
                        <label>Tên đăng nhập</label>
                        <div className="input-with-icon">
                            <i className="fas fa-user"></i>
                            <input 
                                type="text" 
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                placeholder="00000000" 
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Mật khẩu</label>
                        <div className="input-with-icon">
                            <i className="fas fa-lock"></i>
                            <input 
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="••••••••" 
                            />
                            <i 
                                className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"} password-toggle`}
                                onClick={togglePasswordVisibility}
                            ></i>
                        </div>
                    </div>

                    <button className="login-button">Đăng nhập</button>

                    <div className="auth-links">
                        <a href="#" className="forgot-password">Quên mật khẩu?</a>
                        <span className="divider">|</span>
                        <Link to="/register" className="register-link">Đăng ký tài khoản</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;