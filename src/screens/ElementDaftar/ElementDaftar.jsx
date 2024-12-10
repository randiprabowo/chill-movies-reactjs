import React, { useState } from "react";
import { Logo } from "../../components/Logo";
import "./ElementDaftar.css";
import { useNavigate } from 'react-router-dom';

export const ElementDaftar = () => {
  // State untuk form input
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });

  // State untuk menyimpan semua data user
  const [users, setUsers] = useState([]);
  
  // State untuk mengontrol visibility password
  const [showPassword, setShowPassword] = useState(false);
  
  // Handle perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Tambah user baru
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Kata sandi tidak cocok!");
      return;
    }
    
    const newUser = {
      id: Date.now(),
      username: formData.username,
      password: formData.password
    };
    
    setUsers(prevUsers => [...prevUsers, newUser]);
    setFormData({ username: "", password: "", confirmPassword: "" });
  };

  // Hapus user
  const deleteUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };

  // Update user
  const updateUser = (userId, updatedData) => {
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === userId ? { ...user, ...updatedData } : user
      )
    );
  };

  const navigate = useNavigate();
  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <div className="element-daftar">
      <div className="frame-wrapper">
        <div className="frame">
          <Logo movieOpen="https://c.animaapp.com/lH1OqOzp/img/movie-open-1.svg" />
          <div className="div">
            <div className="text-wrapper-2">Daftar</div>
            <div className="text-wrapper-3">Selamat datang!</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="frame-2">
              <div className="div-wrapper">
                <div className="text-wrapper-4">Username</div>
              </div>
              <div className="frame-3">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="text-wrapper-5"
                  placeholder="Masukkan username"
                />
              </div>
            </div>

            <div className="password">
              <div className="frame-4">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">Kata Sandi</div>
                </div>
                <div className="frame-5">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="text-wrapper-6"
                    placeholder="Masukkan kata sandi"
                  />
                  <img
                    className="eye-off"
                    alt="Eye off"
                    src="https://c.animaapp.com/lH1OqOzp/img/eye-off-1.svg"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>
            </div>

            <div className="password-2">
              <div className="frame-2">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">Konfirmasi Kata Sandi</div>
                </div>
                <div className="frame-5">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="text-wrapper-6"
                    placeholder="Masukkan kata sandi"
                  />
                </div>
              </div>
            </div>
            <div className="frame-6">
              <div className="sudah-punya-akun-wrapper">
                <p className="sudah-punya-akun">
                  <span className="span">Sudah punya akun?</span>

                  <span className="text-wrapper-7">&nbsp;</span>

                  <span className="text-wrapper-8" onClick={() => goToPage('/')} style={{ cursor: 'pointer' }}>Masuk</span>
                </p>
              </div>
            </div>
          
            <div className="button">
              <button type="submit" className="button-sign-in">
                <div className="text-wrapper-9">Daftar</div>
              </button>
            </div>
            
            <div className="text-wrapper-10">Atau</div>

            <div className="button-sign-in-2">
              <img
                className="element"
                alt="Element"
                src="https://c.animaapp.com/lH1OqOzp/img/2991148-1@2x.png"
              />

              <div className="text-wrapper-11">Daftar dengan Google</div>

            </div>
          </form>
          </div>
        </div>
        </div>

  );
};