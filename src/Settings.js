import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

function Settings() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('fr');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [sortOption, setSortOption] = useState('date');

  // Navigation
  const goHome = () => {
    navigate('/'); // Redirige vers la page d'accueil
  };

  // Gestion de la langue
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // Gestion des notifications
  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  // Gestion du mode sombre
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.style.backgroundColor = darkMode ? '#fff' : '#333';
    document.body.style.color = darkMode ? '#000' : '#fff';
  };

  // Gestion du tri des tâches
  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="settings-container">
      <h2>Paramètres</h2>
      
      {/* Section Langues */}
      <div className="setting-item">
        <h3>Langues</h3>
        <select value={language} onChange={handleLanguageChange}>
          <option value="fr">Français</option>
          <option value="en">Anglais</option>
          <option value="es">Espagnol</option>
          <option value="de">Allemand</option>
        </select>
      </div>
      
      {/* Section Notifications */}
      <div className="setting-item">
        <h3>Notifications</h3>
        <label>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={toggleNotifications}
          />
          Activer les notifications
        </label>
      </div>
      
      {/* Section Mode sombre */}
      <div className="setting-item">
        <h3>Mode Sombre</h3>
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          Activer le mode sombre
        </label>
      </div>

      {/* Section Tri des tâches */}
      <div className="setting-item">
        <h3>Trier les tâches</h3>
        <select value={sortOption} onChange={handleSortOptionChange}>
          <option value="date">Date</option>
          <option value="priority">Priorité</option>
          <option value="category">Catégorie</option>
        </select>
      </div>
      
      {/* Bouton pour revenir à la page d'accueil */}
      <button onClick={goHome} className="home-button">
        Retour à l'accueil
      </button>
    </div>
  );
}

export default Settings;
