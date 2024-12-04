import React from 'react';
import './WelcomePage.css'; // Fichier CSS pour les styles spécifiques

const WelcomePage = ({ onSkip }) => {
  return (
    <div className="welcome-page">
      <h1>Welcome!</h1>
      <button onClick={onSkip}>Skip</button>
    </div>
  );
};

export default WelcomePage;
