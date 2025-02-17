import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/HomePage';
import About from './Pages/AboutPage/AboutPage';
import Login from './Pages/LoginPage/LoginPage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import ProfileUpdatePage from './Pages/ProfileUpdatePage/ProfileUpdatePage';
import ProfileView from './Components/Profile/ProfileView';
import Dashboard from './Components/UserDashboard/UserDashboard';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile-update" element={<ProfileUpdatePage />} />
        <Route path="/profile-view" element={<ProfileView />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
