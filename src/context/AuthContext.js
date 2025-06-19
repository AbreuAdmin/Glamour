import React, { createContext, useState, useEffect } from "react";
import { isAuthenticated } from "../services/authService";
import Loading from "../pages/Loading";

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
      {!loading ? children : <Loading />}
    </AuthContext.Provider>
  );
};