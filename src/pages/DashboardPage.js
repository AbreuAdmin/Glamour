import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <h2>Bem-vindo ao Dashboard do Administrador!</h2>
      <p>Aqui você pode gerenciar o conteúdo da sua landing page.</p>
      {/* Exemplo de botão de logout */}
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default DashboardPage;