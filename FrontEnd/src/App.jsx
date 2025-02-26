import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage/HomePage';
import About from './Pages/AboutPage/AboutPage';
import Login from './Pages/LoginPage/LoginPage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import ProfileUpdatePage from './Pages/ProfileUpdatePage/ProfileUpdatePage';
import ProfileView from './Components/Profile/ProfileView';
import Dashboard from './Components/UserDashboard/UserDashboard';
import SearchResults from './Components/SearchResult/SearchResults';
import AdminDashboard from './Components/admin-dashboard/AdminDashboard';
import MembershipPlans from './Components/Membership/MembershipPlans';

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
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/membership-plans" element={<MembershipPlans />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
