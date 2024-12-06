
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { Link } from 'react-router-dom';
import './SidePanel.css';

const SidePanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const toggleSidePanel = () => {
    setIsVisible(!isVisible);
  };

  const handleLogout = () => {
    // Optional: Clear session data or authentication token
    localStorage.removeItem('authToken'); // Example of clearing token from localStorage
    sessionStorage.clear(); // Clear sessionStorage (if used)

    // Navigate to the login page after logging out
    navigate('/login');
  };

  return (
    <div>
      <div className={`side-panel ${isVisible ? 'show' : 'hide'}`}>
        <button className="toggle-btn" onClick={toggleSidePanel}>
          {isVisible ? "❌" : "☰"}
        </button>
        {isVisible && (
          <div className="menu-content">
            <h2>Menu</h2>
            <button>
              <Link to="/">Acceuil</Link>
            </button>
            <button>
              <Link to="/Settings">Paramètres</Link>
            </button>
            <button onClick={() => alert('Ajouter une tâche')}>Ajouter une tâche</button>
            <button onClick={() => alert('Voir les tâches')}>Voir les tâches</button>
            <button>
              <Link to="/Dashboard">Dashboard</Link>
            </button>
            <button onClick={() => alert('Notifications')}>Notifications</button>
            <button>
              <Link to="/FAQ">FAQ</Link>
            </button>
          
            <button>
              <Link to="/Login">Deconnexion</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidePanel;
