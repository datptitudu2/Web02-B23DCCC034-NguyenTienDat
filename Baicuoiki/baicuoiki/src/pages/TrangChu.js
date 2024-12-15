import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TrangChu.css';

const TrangChu = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://scontent.fhan15-2.fna.fbcdn.net/v/t1.6435-9/37368350_246126982667520_4388152053210284032_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=t4nv1nrck88Q7kNvgFTnbwV&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=ALv6XjyoXoiYQGj-phgnG6g&oh=00_AYD7QiR4QuwQwBt-YwIAniDfo1ef5Km4plzOspTgZ-Rqtw&oe=67861AB7",
            title: "Thư Viện PTIT",
            description: "Không gian học tập hiện đại"
        },
        {
            image: "https://thanhcongcorp.com.vn/wp-content/uploads/2019/07/thuvien-gt.jpg",
            title: "Thư Viện Điện Tử",
            description: "Kho tài liệu số đa dạng"
        },
        {
            image: "https://scontent.fhan15-2.fna.fbcdn.net/v/t1.6435-9/79373637_508257739787775_6440862123928059904_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bBwWJTMdDskQ7kNvgEt0BvC&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=ACMLZ91QFleh5JgjQHnvLNr&oh=00_AYAniYexpqq25pBBb8ywduhef1y4R87WDON-9FR59qkDig&oe=6785F5F2",
            title: "Môi Trường Học Tập",
            description: "Không gian yên tĩnh, thoải mái"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => 
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero-section">
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="slide-content">
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <span 
                            key={index} 
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
            </section>

            {/* Thống kê */}
            <section className="stats-section">
                <div className="stat-item">
                    <i className="fas fa-book"></i>
                    <div className="stat-info">
                        <h3>30,000+</h3>
                        <p>Đầu sách</p>
                    </div>
                </div>
                <div className="stat-item">
                    <i className="fas fa-users"></i>
                    <div className="stat-info">
                        <h3>10,000+</h3>
                        <p>Độc giả</p>
                    </div>
                </div>
                <div className="stat-item">
                    <i className="fas fa-desktop"></i>
                    <div className="stat-info">
                        <h3>5,000+</h3>
                        <p>Tài liệu số</p>
                    </div>
                </div>
            </section>

            {/* Dịch vụ nổi bật */}
            <section className="featured-services">
                <h2>Dịch Vụ Thư Viện</h2>
                <div className="services-grid">
                    <Link to="/search" className="service-card">
                        <i className="fas fa-search"></i>
                        <h3>Tìm Kiếm Tài Liệu</h3>
                        <p>Tra cứu sách, tài liệu nhanh chóng</p>
                    </Link>
                    <Link to="/borrow-return" className="service-card">
                        <i className="fas fa-book-reader"></i>
                        <h3>Mượn - Trả Sách</h3>
                        <p>Quy trình mượn trả đơn giản</p>
                    </Link>
                    <Link to="/digital-library" className="service-card">
                        <i className="fas fa-laptop"></i>
                        <h3>Thư Viện Số</h3>
                        <p>Truy cập tài liệu mọi lúc, mọi nơi</p>
                    </Link>
                </div>
            </section>

            {/* Tin tức mới */}
            <section className="latest-news">
                <h2>Tin Tức & Thông Báo</h2>
                <div className="news-grid">
                    <div className="news-card">
                        <div className="news-date">
                            <span className="day">15</span>
                            <span className="month">Th3</span>
                        </div>
                        <div className="news-content">
                            <h3>Thông báo nghỉ lễ 30/4 - 1/5</h3>
                            <p>Thư viện thông báo lịch nghỉ lễ và hoạt động trở lại...</p>
                            <Link to="/news" className="read-more">Xem thêm</Link>
                        </div>
                    </div>
                    <div className="news-card">
                        <div className="news-date">
                            <span className="day">10</span>
                            <span className="month">Th3</span>
                        </div>
                        <div className="news-content">
                            <h3>Triển lãm sách mới Quý I/2024</h3>
                            <p>Trưng bày và giới thiệu bộ sách mới về CNTT...</p>
                            <Link to="/news" className="read-more">Xem thêm</Link>
                        </div>
                    </div>
                </div>
                <Link to="/news" className="view-all-btn">Xem tất cả tin tức</Link>
            </section>

            {/* Hướng dẫn sử dụng */}
            <section className="guide-section">
                <h2>Hướng Dẫn Sử Dụng</h2>
                <div className="guide-grid">
                    <div className="guide-item">
                        <i className="fas fa-clock"></i>
                        <h3>Giờ Mở Cửa</h3>
                        <p>Thứ 2 - Thứ 6: 7:30 - 17:00</p>
                        <p>Thứ 7: 7:30 - 11:30</p>
                    </div>
                    <div className="guide-item">
                        <i className="fas fa-book"></i>
                        <h3>Nội Quy</h3>
                        <p>Quy định về việc sử dụng thư viện</p>
                        <Link to="/rules" className="guide-link">Chi tiết</Link>
                    </div>
                    <div className="guide-item">
                        <i className="fas fa-question-circle"></i>
                        <h3>Trợ Giúp</h3>
                        <p>Hướng dẫn sử dụng dịch vụ</p>
                        <Link to="/help" className="guide-link">Xem hướng dẫn</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrangChu;

