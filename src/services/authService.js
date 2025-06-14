import axios from "axios";

const API_URL = process.env.REACT_APP_API_AUTH || 'http://localhost:5000';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/v1/auth/login`, { email, password });
    localStorage.setItem("token", response.data.token);  // Armazena o token no localStorage
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login", error);
    throw error;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar", error);
    throw error;
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("token"); // Verificar se o usuário está autenticado
  return !!token;
};

export const logout = () => {
  localStorage.removeItem("token");
};