import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

function Settings() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('fr');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [sortOption, setSortOption] = useState('date');
  const [email, setEmail] = useState('user@example.com');
  const [privacySetting, setPrivacySetting] = useState('public');
  const [fontSize, setFontSize] = useState('medium');
  const [backupStatus, setBackupStatus] = useState(null); // null initially, to show button

  // Handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // Toggle notifications
  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

 

  // Handle sorting option change
  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  // Handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle privacy setting change
  const handlePrivacyChange = (e) => {
    setPrivacySetting(e.target.value);
  };

  // Handle font size change
  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    document.body.style.fontSize = e.target.value === 'large' ? '18px' : e.target.value === 'small' ? '12px' : '16px';
  };

  // Handle backup
  const handleBackup = () => {
    setBackupStatus('in-progress');
    setTimeout(() => {
      setBackupStatus('completed');
    }, 2000); // Simulate backup process
  };

  // Navigate to the previous page or home (if needed)
  const goBack = () => {
    navigate(-1); // Or use navigate('/') to go home
  };

  return (
    <div className="settings-container">
      <h2>Paramètres</h2>
      
      {/* Section for Language Settings */}
      <div className="setting-item">
        <h3>Langue</h3>
        <select value={language} onChange={handleLanguageChange}>
          <option value="fr">Français</option>
          <option value="en">Anglais</option>
          <option value="es">Espagnol</option>
          <option value="de">Allemand</option>
        </select>
      </div>
      
      {/* Section for Notifications */}
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
      
      

      {/* Section for Sorting Tasks */}
      <div className="setting-item">
        <h3>Trier les tâches</h3>
        <select value={sortOption} onChange={handleSortOptionChange}>
          <option value="date">Date</option>
          <option value="priority">Priorité</option>
          <option value="category">Catégorie</option>
        </select>
      </div>

      {/* Section for Account Settings */}
      <div className="setting-item">
        <h3>Paramètres du compte</h3>
        <label>
          <span>Email: </span>
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
      </div>

      {/* Section for Privacy Settings */}
      <div className="setting-item">
        <h3>Paramètres de confidentialité</h3>
        <select value={privacySetting} onChange={handlePrivacyChange}>
          <option value="public">Public</option>
          <option value="private">Privé</option>
        </select>
      </div>

      {/* Section for Font Size */}
      <div className="setting-item">
        <h3>Taille de la police</h3>
        <select value={fontSize} onChange={handleFontSizeChange}>
          <option value="small">Petite</option>
          <option value="medium">Moyenne</option>
          <option value="large">Grande</option>
        </select>
      </div>

      {/* Section for Backup */}
      <div className="setting-item backup-section">
        <h3>Sauvegarde</h3>
        {/* Conditional rendering for button and backup status */}
        {backupStatus === null ? (
          <button onClick={handleBackup}>Sauvegarder les données</button>
        ) : backupStatus === 'in-progress' ? (
          <p>Sauvegarde en cours...</p>
        ) : (
          <p>Sauvegarde terminée</p>
        )}
      </div>

      {/* Button to go back to the previous page */}
      <div className="back-button">
        <button onClick={goBack}>Retour</button>
      </div>
    </div>
  );
}

export default Settings;
