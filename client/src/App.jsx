import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import useAuth from "./hooks/useAuth";
import ProjectPage from "./routes/ProjectPage";
import "./App.css";
import { Toaster } from "react-hot-toast";
import EmpPage from "./routes/EmpPage";
import ProjectFocusPage from "./routes/ProjectFocusPage";

function App() {
  const { handleLogin, handleLogout } = useAuth();

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/empinfo/:id" element={<EmpPage />} />
        <Route path="/project/:id" element={<ProjectFocusPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
