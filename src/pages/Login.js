import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../services/authService";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginRequest(email, password);
      setAuth(true);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro no login:", error);
      alert('Falha ao fazer login');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
          title="Por favor, insira um e-mail válido (ex: exemplo@dominio.com)"
        />
        <input
          type="password" 
          placeholder="Senha" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;