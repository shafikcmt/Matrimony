import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/HomePage';
import About from './Pages/AboutPage/AboutPage';
import Login from './Pages/LoginPage/LoginPage';
import Register from './Pages/RegisterPage/RegisterPage';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
