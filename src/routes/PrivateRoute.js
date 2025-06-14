import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { auth, loading } = useContext(AuthContext);

  if (loading) return <div>Verificando autenticação...</div>;

  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;