import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogoPage.css';
import logo from './assets/logocute.png'; // Ajuste le chemin en fonction de l'emplacement de ton logo

const LogoPage = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login'); // Naviguer vers la page de connexion
    };

    return (
        <div className="logo-page">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
                <h1>Bienvenue !</h1>
                <p>Bienvenue sur notre application de gestion de tâches</p>
                <button className="proceed-button" onClick={goToLogin}>
                    Continuer vers la connexion
                </button>
            </div>
        </div>
    );
};

export default LogoPage;
