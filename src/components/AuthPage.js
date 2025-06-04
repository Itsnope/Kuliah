import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Mail, 
  Smartphone, 
  ArrowRight,
} from 'lucide-react';
import logo from './logo.png';


const AuthPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validasi Email
    if (!formData.email) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    // Validasi Password
    if (!formData.password) {
      newErrors.password = 'Kata sandi wajib diisi';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Kata sandi minimal 6 karakter';
    }

    // Validasi Nama (hanya untuk register)
    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Nama wajib diisi';
      }

      // Validasi Nomor Telepon
      if (!formData.phone) {
        newErrors.phone = 'Nomor telepon wajib diisi';
      } else if (!/^[0-9]{10,12}$/.test(formData.phone)) {
        newErrors.phone = 'Nomor telepon tidak valid';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Hapus error saat pengguna mulai mengetik
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulasi login/register
      if (isLogin) {
        // Proses Login
        if (formData.email === 'user@example.com' && formData.password === 'password') {
          onLogin({
            name: 'Pengguna SaladYuk',
            email: formData.email
          });
        } else {
          setErrors({
            login: 'Email atau kata sandi salah'
          });
        }
      } else {
        // Proses Register
        onLogin({
          name: formData.name,
          email: formData.email
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        <div className="text-center mb-6">
          <img 
            src={logo}
            alt="SaladYuk Logo" 
            className="mx-auto w-20 h-20 rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold text-green-600">SaladYuk</h1>
          <p className="text-gray-500 mt-2">
            {isLogin ? 'Selamat Datang Kembali' : 'Buat Akun Baru'}
          </p>
        </div>

        {errors.login && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errors.login}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="flex items-center bg-green-50 rounded-lg p-3">
                <User className="text-green-600 mr-3" />
                <input 
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-transparent w-full focus:outline-none ${
                    errors.name ? 'text-red-500' : ''
                  }`}
                />
              </label>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
          )}

          <div className="mb-4">
            <label className="flex items-center bg-green-50 rounded-lg p-3">
              <Mail className="text-green-600 mr-3" />
              <input 
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-transparent w-full focus:outline-none ${
                  errors.email ? 'text-red-500' : ''
                }`}
              />
            </label>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {!isLogin && (
            <div className="mb-4">
              <label className="flex items-center bg-green-50 rounded-lg p-3">
                <Smartphone className="text-green-600 mr-3" />
                <input 
                  type="tel"
                  name="phone"
                  placeholder="Nomor Telepon"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`bg-transparent w-full focus:outline-none ${
                    errors.phone ? 'text-red-500' : ''
                  }`}
                />
              </label>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          )}

          <div className="mb-4">
            <label className="flex items-center bg-green-50 rounded-lg p-3">
              <Lock className="text-green-600 mr-3" />
              <input 
                type="password"
                name="password"
                placeholder="Kata Sandi"
                value={formData.password}
                onChange={handleChange}
                className={`bg-transparent w-full focus:outline-none ${
                  errors.password ? 'text-red-500' : ''
                }`}
              />
            </label>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <button 
            type="submit" 
            className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center hover:bg-green-700 transition"
          >
            {isLogin ? 'Masuk' : 'Daftar'}
            <ArrowRight className="ml-2" />
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            {isLogin 
              ? 'Belum punya akun? ' 
              : 'Sudah punya akun? '}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-green-600 font-bold"
            >
              {isLogin ? 'Daftar Sekarang' : 'Masuk'}
            </button>
          </p>
        </div>
        </div>
      </div>
  );
};

export default AuthPage;