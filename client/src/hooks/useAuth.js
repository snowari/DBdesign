import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const { localStorage } = window;

const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const wasAuthenticated = localStorage.getItem("isAuthenticated");

  if (wasAuthenticated) {
    setIsAuthenticated(true);
  }

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  useEffect(() => {
    isAuthenticated ? navigate("/") : navigate("/login");
  }, [isAuthenticated]);

  return { handleLogin, handleLogout };
};

export default useAuth;
