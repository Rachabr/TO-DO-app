import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importation de useNavigate
import './LoginPage.css'; // Import LoginPage CSS

const LoginPage = ({ onLogin }) => {
    const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic login validation (you can improve this)
        if (username === 'user' && password === 'password') {
            onLogin(); // Appel de la fonction onLogin passée de App.js
            navigate('/'); // Redirection vers la page d'accueil après connexion réussie
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <button type="submit">Login</button> {/* Le bouton de connexion */}
            </form>
        </div>
    );
};

export default LoginPage;
