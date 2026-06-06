// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Map from "./pages/Map";
import SpaceDetail from "./pages/SpaceDetail";
import AdminLogin from "./pages/AdminLogin";
import AdminSpaces from "./pages/AdminSpaces";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<Search />} />
          <Route path="/mapa" element={<Map />} />
          <Route path="/espacio/:id" element={<SpaceDetail />} />

          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path="/admin/espacios"
            element={
              <ProtectedRoute>
                <AdminSpaces />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <BottomNav />
    </BrowserRouter>
  );
}

export default App;