import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SidePanel.css';

const SidePanel = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidePanel = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className={`side-panel ${isVisible ? 'show' : 'hide'}`}>
        {/* Bouton pour ouvrir/fermer placé à l'intérieur du sidepanel */}
        <button className="toggle-btn" onClick={toggleSidePanel}>
          {isVisible ? "Fermer" : "Menu"}
        </button>
        {isVisible && (
          <div className="menu-content">
            <h2>Menu</h2>
            {/* Use Link for "Acceuil" to navigate to home */}
            <button>
              <Link to="/">Acceuil</Link>
            </button>

            <button>
              <Link to="/Settings">Paramètres</Link>
            </button>

            <button onClick={() => alert('Ajouter une tâche')}>Ajouter une tâche</button>
            <button onClick={() => alert('Voir les tâches')}>Voir les tâches</button>
            <button onClick={() => alert('Dashboard')}>Dashboard</button>
            <button onClick={() => alert('Notifications')}>Notifications</button>
            <button>
              <Link to="/FAQ">FAQ</Link>
            </button>
            <button onClick={() => alert('Deconnexion')}>Deconnexion</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidePanel;
