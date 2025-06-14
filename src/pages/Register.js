import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { register as registerService } from "../services/authService";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerService(username, email, password);
      setAuth(true);
      alert('Cadastro realizado com sucesso!');
      navigate("/login");
    } catch (error) {
      alert('Erro ao registrar');
    }
  };

  return (
    <div>
      <h2>Registrar</h2>
      <form onSubmit={handleRegister}>
        <input 
          type="text" 
          placeholder="Nome de Usuário" 
          value={username}
          onChange={(e) => setName(e.target.value)} 
          required 
        />
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
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;