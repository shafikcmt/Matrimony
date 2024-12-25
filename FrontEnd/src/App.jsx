import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/HomePage';
import About from './Pages/AboutPage/AboutPage';
import Login from './Pages/LoginPage/LoginPage';
import Navbar from './Components/Navbar/Navbar';
import RegisterPage from './Pages/RegisterPage/RegisterPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default App;
