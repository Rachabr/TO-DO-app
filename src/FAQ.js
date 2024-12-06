// src/components/FAQ.js
import React, { useState } from 'react';
import'./FAQ.css';
import logo from './assets/FAQ.jpg';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  

  const faqs = [
    {
      question: 'Comment ajouter une nouvelle tâche ?',
      answer: 'Cliquez sur le bouton "Ajouter une tâche", entrez la description de la tâche et appuyez sur "Ajouter".'
    },
    {
      question: 'Puis-je marquer une tâche comme terminée ?',
      answer: 'Oui, vous pouvez cliquer sur la case à cocher à côté de la tâche pour la marquer comme terminée.'
    },
    {
      question: 'Comment supprimer une tâche ?',
      answer: 'Cliquez sur l\'icône de poubelle à côté de la tâche pour la supprimer.'
    },
    {
      question: 'Est-ce que mes tâches sont sauvegardées ?',
      answer: 'Oui, toutes les tâches sont sauvegardées dans votre navigateur localement ou sur votre serveur si vous utilisez une base de données.'
    },
    {
        question: 'Qu\'est-ce que le mode sombre et comment l\'activer ?',
        answer: 'Le mode sombre est une fonctionnalité qui modifie l\'interface en utilisant des couleurs sombres pour le fond. Vous pouvez l\'activer en cliquant sur le bouton "Mode sombre" dans les paramètres ou en basculant dans l\'interface.'
      }
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  

  return (
    <div className="faq-container">
      <h2>
        <img src={logo} alt="Logo" className="faq-logo" />
        FAQ - Questions Fréquentes
      </h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;