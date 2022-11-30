import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import useAuth from "./hooks/useAuth";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  const { handleLogin, handleLogout } = useAuth();

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
