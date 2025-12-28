import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Correct paths according to your folders
import HomeScreen from "../screens/Home/HomeScreen"; 
import AboutUs from "../screens/About/AboutUs"; 
import Auth from "../screens/Auth/Auth";
import SettingsScreen from "../screens/Settings/SettingsScreen";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/settings" element={<SettingsScreen />} />
      </Routes>
    </Router>
  );
}
