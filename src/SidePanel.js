
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { Link } from 'react-router-dom';
import './SidePanel.css';

const SidePanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const toggleSidePanel = () => {
    setIsVisible(!isVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Example of clearing token
    sessionStorage.clear(); // Clear sessionStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <div>
      <div className={`side-panel ${isVisible ? 'show' : 'hide'}`}>
        <button className="toggle-btn" onClick={toggleSidePanel}>
          {isVisible ? '❌' : '☰'}
        </button>
        {isVisible && (
          <div className="menu-content">
            <h2>Menu</h2>
            <button onClick={() => navigate('/')}>Acceuil</button>
            <button onClick={() => navigate('/settings')}>Paramètres</button>
            <button onClick={() => navigate('/FAQ')}>FAQ</button>
            <button onClick={handleLogout}>Déconnexion</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidePanel;