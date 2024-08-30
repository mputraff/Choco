import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Artikel from "./pages/Artikel";
import Profile from "./pages/Profile";
import DataAntropometri from "./pages/DataAntropometri";
import DataKehamilan from "./pages/DataKehamilan";
import DataBayi from "./pages/DataBayi";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/data-antropometri" element={<DataAntropometri />} />
        <Route path="/data-kehamilan" element={<DataKehamilan />} />
        <Route path="/data-bayi" element={<DataBayi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
