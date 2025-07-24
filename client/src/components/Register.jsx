// src/components/Register.jsx
import React, { useState } from 'react';
import API from '../api';

const Register = ({ setIsLogin }) => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    usertype: 'customer', // or 'admin'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/register', form);
      alert('Registered successfully!');
      setIsLogin(true); // Switch to login
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <select name="usertype" onChange={handleChange}>
        <option value="customer">Customer</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Register</button>
      <p onClick={() => setIsLogin(true)}>Already have an account? Login</p>
    </form>
  );
};

export default Register;
