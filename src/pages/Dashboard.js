import React, { useState, useEffect } from "react";
import axios from "axios";
import { logout } from "../services/authService";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersResponse = await axios.get("http://localhost:5000/api/v1/orders");
        const productsResponse = await axios.get("http://localhost:5000/api/v1/products");
        const usersResponse = await axios.get("http://localhost:5000/api/v1/users");
        setOrders(ordersResponse.data);
        setProducts(productsResponse.data);
        setUsers(usersResponse.data);
      } catch (error) {
        console.error("Erro ao carregar dados do dashboard", error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    logout(); // Realizar logout
    window.location.href = "/login";
  };

  return (
    <div>
      <h2>Dashboard Admin</h2>
      <button onClick={handleLogout}>Sair</button>

      <h3>Pedidos</h3>
      {orders.map(order => (
        <div key={order.id}>
          <p>{order.product_name}</p>
        </div>
      ))}

      <h3>Produtos</h3>
      {products.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
        </div>
      ))}

      <h3>Administradores</h3>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;