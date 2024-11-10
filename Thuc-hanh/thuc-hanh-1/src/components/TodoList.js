import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Circle,
  Trash2,
  Calendar,
  Search,
  Edit2,
} from "lucide-react";
import "./style.css";

const DanhSachCongViec = () => {
  const [congViec, setCongViec] = useState(() => {
    const luuCongViec = localStorage.getItem("congViec");
    return luuCongViec
      ? JSON.parse(luuCongViec)
      : [
          {
            id: 1,
            text: "Học lập trình web với React",
            status: "Todo",
            dueDate: "2024-10-03",
            priority: "High",
          },
          {
            id: 2,
            text: "Gửi email nộp bài tập về nhà",
            status: "Done",
            dueDate: "2024-10-05",
            priority: "Medium",
          },
          {
            id: 3,
            text: "Học từ vựng tiếng anh mỗi ngày",
            status: "Todo",
            dueDate: "2024-10-07",
            priority: "Low",
          },
          {
            id: 4,
            text: "Viết tiểu luận môn Triết học",
            status: "Todo",
            dueDate: "2024-10-02",
            priority: "High",
          },
        ];
  });

  const [congViecMoi, setCongViecMoi] = useState("");
  const [ngayHetHanMoi, setNgayHetHanMoi] = useState("");
  const [uuTienMoi, setUuTienMoi] = useState("Medium");
  const [trangThaiLoc, setTrangThaiLoc] = useState("All");
  const [tuKhoaTimKiem, setTuKhoaTimKiem] = useState("");
  const [congViecChinhSua, setCongViecChinhSua] = useState(null);

  useEffect(() => {
    localStorage.setItem("congViec", JSON.stringify(congViec));
  }, [congViec]);

  const themCongViec = () => {
    if (congViecMoi.trim() !== "" && ngayHetHanMoi !== "") {
      const congViecMoiObj = {
        id: Date.now(),
        text: congViecMoi,
        status: "Todo",
        dueDate: ngayHetHanMoi,
        priority: uuTienMoi,
      };
      setCongViec([...congViec, congViecMoiObj]);
      setCongViecMoi("");
      setNgayHetHanMoi("");
      setUuTienMoi("Medium");
    }
  };

  const xoaCongViec = (id) => {
    setCongViec(congViec.filter((task) => task.id !== id));
  };

  const doiTrangThai = (id) => {
    setCongViec(
      congViec.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "Todo" ? "Done" : "Todo" }
          : task
      )
    );
  };

  const batDauChinhSua = (task) => {
    setCongViecChinhSua({ ...task });
  };

  const luuChinhSua = () => {
    if (congViecChinhSua) {
      setCongViec(
        congViec.map((task) => (task.id === congViecChinhSua.id ? congViecChinhSua : task))
      );
      setCongViecChinhSua(null);
    }
  };

  const huyChinhSua = () => {
    setCongViecChinhSua(null);
  };

  const dinhDangNgay = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const congViecLoc = congViec
    .filter((task) => trangThaiLoc === "All" || task.status === trangThaiLoc)
    .filter((task) =>
      task.text.toLowerCase().includes(tuKhoaTimKiem.toLowerCase())
    );

  return (
    <div className="container-cong-viec">
      <h1 className="tieu-de-cong-viec">
        DANH SÁCH CÔNG VIỆC <span className="icon-tieu-de-cong-viec">🎯</span>
      </h1>
      <div className="bo-loc-cong-viec">
        <div className="container-tim-kiem">
          <Search className="icon-tim-kiem" />
          <input
            type="text"
            placeholder="Tìm kiếm công việc..."
            value={tuKhoaTimKiem}
            onChange={(e) => setTuKhoaTimKiem(e.target.value)}
            className="input-tim-kiem"
          />
        </div>
        <select
          value={trangThaiLoc}
          onChange={(e) => setTrangThaiLoc(e.target.value)}
          className="select-loc"
        >
          <option value="All">Tất cả</option>
          <option value="Todo">Chưa hoàn thành</option>
          <option value="Done">Đã hoàn thành</option>
        </select>
      </div>
      <ul className="danh-sach-cong-viec">
        {congViecLoc.map((task) => (
          <li key={task.id} className="item-cong-viec">
            {congViecChinhSua && congViecChinhSua.id === task.id ? (
              <>
                <input
                  type="text"
                  value={congViecChinhSua.text}
                  onChange={(e) =>
                    setCongViecChinhSua({ ...congViecChinhSua, text: e.target.value })
                  }
                  className="input-chinh-sua"
                />
                <input
                  type="date"
                  value={congViecChinhSua.dueDate}
                  onChange={(e) =>
                    setCongViecChinhSua({ ...congViecChinhSua, dueDate: e.target.value })
                  }
                  className="input-ngay-han-chinh-sua"
                />
                <select
                  value={congViecChinhSua.priority}
                  onChange={(e) =>
                    setCongViecChinhSua({ ...congViecChinhSua, priority: e.target.value })
                  }
                  className="select-uu-tien-chinh-sua"
                >
                  <option value="Low">Thấp</option>
                  <option value="Medium">Trung bình</option>
                  <option value="High">Cao</option>
                </select>
                <button onClick={luuChinhSua} className="nut-luu-chinh-sua">
                  Lưu
                </button>
                <button onClick={huyChinhSua} className="nut-huy-chinh-sua">
                  Hủy
                </button>
              </>
            ) : (
              <>
                <button onClick={() => doiTrangThai(task.id)}>
                  {task.status === "Done" ? (
                    <CheckCircle2 className="text-green-500" />
                  ) : (
                    <Circle className="text-gray-300" />
                  )}
                </button>
                <span
                  className={`text-item-cong-viec ${
                    task.status === "Done" ? "hoan-thanh" : ""
                  }`}
                >
                  {task.text}
                </span>
                <span
                  className={`uu-tien-item-cong-viec ${task.priority.toLowerCase()}`}
                >
                  {task.priority}
                </span>
                <span className="ngay-han-item-cong-viec">
                  <Calendar className="icon-lich" />
                  {dinhDangNgay(task.dueDate)}
                </span>
                <button onClick={() => batDauChinhSua(task)}>
                  <Edit2 className="icon-chinh-sua-item-cong-viec" />
                </button>
                <button onClick={() => xoaCongViec(task.id)}>
                  <Trash2 className="icon-xoa-item-cong-viec" />
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="container-input-cong-viec">
        <input
          type="text"
          value={congViecMoi}
          onChange={(e) => setCongViecMoi(e.target.value)}
          placeholder="Thêm công việc"
          className="input-cong-viec"
        />
        <input
          type="date"
          value={ngayHetHanMoi}
          onChange={(e) => setNgayHetHanMoi(e.target.value)}
          className="input-ngay-han"
        />
        <select
          value={uuTienMoi}
          onChange={(e) => setUuTienMoi(e.target.value)}
          className="select-uu-tien"
        >
          <option value="Low">Thấp</option>
          <option value="Medium">Trung bình</option>
          <option value="High">Cao</option>
        </select>
        <button onClick={themCongViec} className="nut-them-cong-viec">
          Thêm công việc
        </button>
      </div>
    </div>
  );
};

export default DanhSachCongViec;
