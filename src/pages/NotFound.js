import React from "react";
import "../style/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">
        <span className="glitch" data-text="404">404</span>
        <span className="glitch" data-text="Página Não Encontrada">Página Não Encontrada</span>
      </h1>
      <p className="not-found-message">Parece que você se perdeu no espaço digital.</p>
      <a href="/" className="not-found-link">Voltar para a Segurança</a>
    </div>
  );
};

export default NotFound;