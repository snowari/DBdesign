import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  useEffect(() => {
    isAuthenticated ? navigate("/") : navigate("/login");
  }, [isAuthenticated]);

  return { handleLogin, handleLogout };
};

export default useAuth;
