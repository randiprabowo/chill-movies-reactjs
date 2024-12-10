import React, { useState } from "react";
import { Logo } from "../../components/Logo";
import "./ElementMasuk.css";
import { useNavigate } from 'react-router-dom';


export const ElementMasuk = () => {
  // State untuk form input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  // State untuk menyimpan data users
  const [users, setUsers] = useState([
    // Data awal sebagai contoh
    { id: 1, username: "user1", password: "pass123" }
  ]);

  // Fungsi untuk menambah user baru
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      username: username,
      password: password
    };
    setUsers([...users, newUser]);
    setUsername("");
    setPassword("");
  };

  // Fungsi untuk update user
  const handleUpdate = (id, updatedData) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, ...updatedData } : user
    ));
  };

  // eslint-disable-next-line no-unused-vars
  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

    const navigate = useNavigate();
    const goToPage = (path) => {
      navigate(path);
    };

  return (
    <div className="element-masuk">
      <div className="frame-wrapper">
        <div className="frame">
          <Logo movieOpen="https://c.animaapp.com/e4S1qI2e/img/movie-open-1.svg" />
          <div className="div">
            <div className="text-wrapper-2">Masuk</div>
            <div className="text-wrapper-3">Selamat datang kembali!</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="frame-2">
              <div className="div-wrapper">
                <div className="text-wrapper-4">Username</div>
              </div>
              <div className="frame-3">
                <input
                  type="text"
                  className="text-wrapper-5"
                  placeholder="Masukkan username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="password">
              <div className="frame-2">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">Kata Sandi</div>
                </div>
                <div className="frame-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="text-wrapper-6"
                    placeholder="Masukkan kata sandi"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <img
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
              

            <div className="frame-5">
              <div className="belum-punya-akun-wrapper">
                <p className="belum-punya-akun">
                  <span className="span">Belum punya akun?</span>

                  <span className="text-wrapper-7">&nbsp;</span>

                  <span className="text-wrapper-8" onClick={() => goToPage('/ElementDaftar')} style={{ cursor: 'pointer' }}>Daftar</span>
                </p>
              </div>

              <div className="text-wrapper-9">Lupa kata sandi?</div>
            </div>
          </div>

          <div className="button">
            <div className="button-sign-in">
              <div className="text-wrapper-10" onClick={() => goToPage('/ElementBerandaHover')} style={{ cursor: 'pointer' }}>Masuk</div>
            </div>

            <div className="text-wrapper-11">Atau</div>

            <div className="button-sign-in-2">
              <img
                className="element"
                alt="Element"
                src="https://c.animaapp.com/e4S1qI2e/img/2991148-1@2x.png"
              />

              <div className="text-wrapper-12" onClick={() => window.location.href = "https://accounts.google.com/o/oauth2/v2/auth"}>Masuk dengan Google</div>
            
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};
