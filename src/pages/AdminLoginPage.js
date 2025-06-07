import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await axios.post(`${API_URL}/register`, {
        username,
        email,
        password,
      });

      // --- AQUI É ONDE O TOKEN É ARMAZENADO! ---
      const token = response.data.token;
      localStorage.setItem('adminToken', token);
      // --- FIM DO ARMAZENAMENTO ---

      setMessage(`Registro bem-sucedido! Token armazenado.`);
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao registrar:', error.response ? error.response.data : error.message);
      setMessage(`Erro no registro: ${error.response?.data?.msg || 'Algo deu errado'}`);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      // --- AQUI É ONDE O TOKEN É ARMAZENADO! ---
      const token = response.data.token;
      localStorage.setItem('adminToken', token);
      setMessage(`Login bem-sucedido! Token armazenado.`);
      // Redirecionar após o login bem-sucedido
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao logar:', error.response ? error.response.data : error.message);
      setMessage(`Erro no login: ${error.response?.data?.msg || 'Algo deu errado'}`);
    }
  };

  return (
    <div>
      <h2>Registro do Administrador</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>


      <h2>Login do Administrador</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AdminLoginPage;