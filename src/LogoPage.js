import React, { useEffect, useState } from "react";
import "./LogoPage.css"; // Pour les styles

const features = [
  {
    icon: "🗂️",
    title: "Créer des tâches facilement",
    description: "Créez des tâches en un seul clic, planifiez votre emploi du temps efficacement.",
  },
  {
    icon: "⏰",
    title: "Rappels ponctuels",
    description: "Définissez des rappels, ne manquez jamais une échéance.",
  },
 
  {
    icon: "🎨",
    title: "Beaux thèmes",
    description: "Choisissez le thème élégant que vous aimez et commencez une merveilleuse journée.",
  },
];

const LogoPage = () => {
  const [visibleFeatures, setVisibleFeatures] = useState([]);

  useEffect(() => {
    features.forEach((_, index) => {
      setTimeout(() => {
        setVisibleFeatures((prev) => [...prev, index]);
      }, index * 300); // Décalage de 300ms entre chaque ligne
    });
  }, []);

  return (
    <div className="container">
      <h1 className="title">
        Bienvenue dans la <span className="highlight">To-do List</span>
      </h1>
      <div className="features">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-item ${visibleFeatures.includes(index) ? "visible" : ""}`}
          >
            <div className="icon">{feature.icon}</div>
            <div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="button">Continuer</button>

    </div>
  );
};

export default LogoPage;
