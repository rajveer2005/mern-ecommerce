// src/components/Login.jsx
import React, { useState } from 'react';
import API from '../api';

const Login = ({ setIsLogin }) => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/login', form);
      alert(`Welcome back, ${res.data.username}`);
      // Optional: store user data in localStorage or context
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
      <p onClick={() => setIsLogin(false)}>Don't have an account? Register</p>
    </form>
  );
};

export default Login;
