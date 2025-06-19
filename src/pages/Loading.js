import React from "react";
import "../style/Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <div className="loading-text">Carregando...</div>
    </div>
  );
};

export default Loading;