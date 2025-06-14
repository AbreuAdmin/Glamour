import React, { createContext, useState, useEffect } from "react";
import { isAuthenticated } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedIn = isAuthenticated();
    setAuth(loggedIn);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, loading }}>
      {!loading ? children : <div>Carregando...</div>}
    </AuthContext.Provider>
  );
};