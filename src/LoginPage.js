import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate(); // Hook pour rediriger
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      onLogin(); // Appel de la fonction onLogin
      setMessage('Login successful!');
      navigate('/'); // Redirection vers la page d'accueil
    } else {
      setMessage('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
