import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

/* ===== Components ===== */
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import VideoPage from "./components/VideoPage";

/* ===== Global & Premium Styles ===== */
import "./styles/Global.css";
import "./styles/EliteUI.css";
import "./styles/AutoScroll.css";
import "./styles/HoverPreview.css";
import "./styles/SoundWave.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>

          {/* 🔐 Login Route */}
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          {/* 🏠 Home Page (Protected) */}
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <MainPage />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* 🎬 Videos Page (Protected) */}
          <Route
            path="/videos"
            element={
              isLoggedIn ? (
                <VideoPage />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* ❌ Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
