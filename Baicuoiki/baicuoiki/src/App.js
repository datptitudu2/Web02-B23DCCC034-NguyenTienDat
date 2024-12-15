import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TrangChu from './pages/TrangChu';
import Login from './pages/Login';
import OpeningHours from './pages/OpeningHours';
import Rules from './pages/Rules';
import Tintuc from './pages/Tintuc';
import Search from './pages/Search';
import DanhMucSach from './pages/DanhMucSach';
import MuonTraSach from './pages/MuonTraSach';
import ThongTinDocGia from './pages/ThongTinDocGia';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Register from './pages/Register';
import Profile from './pages/Profile';
import DigitalLibrary from './pages/DigitalLibrary';
import Help from './pages/Help';
import PhongDoc from './pages/PhongDoc';
import TaiLieuSo from './pages/TaiLieuSo';
import InAn from './pages/InAn';
import HoTroTraCuu from './pages/HoTroTraCuu';
import DaoTao from './pages/DaoTao';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<TrangChu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/opening-hours" element={<OpeningHours />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/news" element={<Tintuc />} />
            <Route path="/search" element={<Search />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalog" element={<DanhMucSach />} />
            <Route path="/muon-tra-sach" element={<MuonTraSach />} />
            <Route path="/readers" element={<ThongTinDocGia />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/digital-library" element={<DigitalLibrary />} />
            <Route path="/help" element={<Help />} />
            <Route path="/muon-tra-sach" element={<MuonTraSach />} />
          <Route path="/phong-doc" element={<PhongDoc />} />
          <Route path="/tai-lieu-so" element={<TaiLieuSo />} />
          <Route path="/in-an" element={<InAn />} />
          <Route path="/ho-tro-tra-cuu" element={<HoTroTraCuu />} />
          <Route path="/dao-tao" element={<DaoTao />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;