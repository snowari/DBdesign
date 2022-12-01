import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const { localStorage } = window;

const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    if (isAuthenticated) navigate("/project");
  }, [isAuthenticated]);

  return { handleLogin, handleLogout };
};

export default useAuth;
