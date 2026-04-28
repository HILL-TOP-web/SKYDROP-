import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Feed from './pages/Feed';
import Wallet from './pages/Wallet';
import Mining from './pages/Mining';
import AI from './pages/AI';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/mining" element={<Mining />} />
      <Route path="/ai" element={<AI />} />
    </Routes>
  );
      }
