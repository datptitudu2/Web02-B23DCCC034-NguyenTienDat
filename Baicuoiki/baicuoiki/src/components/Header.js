import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="header-banner">
                <div className="banner-content">
                    <div className="logo-container">
                        <img src="https://ptit.edu.vn/wp-content/uploads/2024/05/circle-ptit-2.png" alt="PTIT Logo" />
                        <div className="institute-name">
                            <h1>HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG</h1>
                            <h2>TRUNG TÂM THÔNG TIN VÀ TRI THỨC SỐ</h2>
                        </div>
                    </div>
                    <div className="library-title">
                        <h1>THƯ VIỆN</h1>
                    </div>
                </div>
            </div>
            
            <nav className="main-navigation">
                <div className="nav-content">
                    <ul className="nav-links">
                        <li><Link to="/">TRANG CHỦ</Link></li>
                        <li><Link to="/search">TÌM KIẾM</Link></li>
                        <li><Link to="/news">TIN TỨC</Link></li>
                        <li><Link to="/services">DỊCH VỤ</Link></li>
                        <li><Link to="/contact">LIÊN HỆ</Link></li>
                        <li className="login-item"><Link to="/login">ĐĂNG NHẬP</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
