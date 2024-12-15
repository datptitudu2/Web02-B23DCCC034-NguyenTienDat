import React from 'react';
import './OpeningHours.css';

const OpeningHours = () => {
    return (
        <div className="opening-hours">
            <div className="page-title">
                <h1>GIỜ MỞ CỬA THƯ VIỆN</h1>
            </div>
            
            <div className="schedule-container">
                <div className="schedule-card">
                    <h2>Thời gian phục vụ</h2>
                    <div className="time-slot">
                        <h3>Mùa học</h3>
                        <ul>
                            <li>
                                <span className="day">Thứ 2 - Thứ 6:</span>
                                <span className="time">7:30 - 17:00</span>
                            </li>
                            <li>
                                <span className="day">Thứ 7:</span>
                                <span className="time">7:30 - 11:30</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="time-slot">
                        <h3>Mùa hè</h3>
                        <ul>
                            <li>
                                <span className="day">Thứ 2 - Thứ 6:</span>
                                <span className="time">7:30 - 16:30</span>
                            </li>
                            <li>
                                <span className="day">Thứ 7:</span>
                                <span className="time">7:30 - 11:00</span>
                            </li>
                        </ul>
                    </div>

                    <div className="note">
                        <h3>Lưu ý:</h3>
                        <ul>
                            <li>Nghỉ trưa: 11:30 - 13:30</li>
                            <li>Nghỉ Chủ nhật và các ngày lễ</li>
                            <li>Thời gian phục vụ có thể thay đổi trong các dịp đặc biệt</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpeningHours;