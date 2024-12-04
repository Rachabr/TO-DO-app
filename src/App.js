import React, { useState, useEffect } from 'react';
import './App.css';
import SidePanel from './SidePanel'; // Import du SidePanel
import WelcomePage from './WelcomePage';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Settings from './Settings';  // Assurez-vous que le chemin est correct
import LoginPage from './LoginPage'; // Import du composant LoginPage
import LogoPage from './LogoPage';  // Import de LogoPage
import SearchBar from './SearchBar'; // Import de SearchBar

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour savoir si l'utilisateur est connecté
  const [showWelcome, setShowWelcome] = useState(true);
  const [showLogoPage, setShowLogoPage] = useState(false); // État pour afficher la LogoPage après WelcomePage
  const [showLoginPage, setShowLoginPage] = useState(false); // État pour afficher la LoginPage après LogoPage
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state





  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false); // Cache la WelcomePage après 10 secondes
        setShowLogoPage(true);  // Affiche la LogoPage après 10 secondes
      }, 3000); // Affiche la WelcomePage pendant 3 secondes

      return () => clearTimeout(timer); // Nettoyage du timer si le composant est démonté
    }
  }, [showWelcome]);

  useEffect(() => {
    if (showLogoPage) {
      const timer = setTimeout(() => {
        setShowLogoPage(false); // Cache la LogoPage
        setShowLoginPage(true);  // Affiche la LoginPage après la LogoPage
      }, 2000); // Affiche la LogoPage pendant 2 secondes

      return () => clearTimeout(timer); // Nettoyage du timer
    }
  }, [showLogoPage]);

  const handleSkip = () => {
    setShowWelcome(false); // Permet de passer la WelcomePage
    setShowLogoPage(true);  // Affiche la LogoPage immédiatement après
  };

  const handleLogin = () => setIsLoggedIn(true); // Fonction pour changer l'état de connexion

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // Ajout du state pour le terme de recherche

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task !== '' && !tasks.some(t => t.text === task)) {
      setTasks([...tasks, { text: task, category: category || 'Aucune catégorie', priority, isComplete: false }]);
      setTask('');
      setCategory('');
      setPriority('');
    } else if (tasks.some(t => t.text === task)) {
      alert('Cette tâche existe déjà !');
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setTask(tasks[index].text);
    setCategory(tasks[index].category);
    setPriority(tasks[index].priority);
    setEditIndex(index);
  };

  const saveTask = () => {
    if (task !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = { text: task, category: category || 'Aucune catégorie', priority, isComplete: tasks[editIndex].isComplete };
      setTasks(updatedTasks);
      setTask('');
      setCategory('');
      setPriority('');
      setEditIndex(null);
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isComplete = !updatedTasks[index].isComplete;
    setTasks(updatedTasks);
  };

  // Filtrage des tâches en fonction du terme de recherche
  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );


    // Toggle dark mode
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
      if (isDarkMode) {
          document.body.classList.add('dark-mode');
      } else {
          document.body.classList.remove('dark-mode');
      }
  }, [isDarkMode]);





  return (
    <Router>
     
      <div className="App">
      
       { /* Dark Mode Button */ } 
       
        <button onClick = { toggleDarkMode }
        style = {
            { position: 'absolute', top: '20px', right: '20px' }
        } > { isDarkMode ? 'Light Mode' : 'Dark Mode' } 
        </button>
        
        {showWelcome ? (
          <WelcomePage onSkip={handleSkip} /> // Affiche la WelcomePage d'abord
        ) : showLogoPage ? (
          <LogoPage /> // Affiche la LogoPage après la WelcomePage
        ) : showLoginPage ? (
          <LoginPage onLogin={() => { handleLogin(); setShowLoginPage(false); }} /> // Affiche la LoginPage après la LogoPage
        ) : (
          <>
            {isLoggedIn ? (
              <>
                <SidePanel /> {/* Affiche le panneau latéral */}
                <Routes>
                  <Route path="/" element={
                    <>
                      <h1>Ma Liste de Tâches</h1>
                      {/* Ajout du SearchBar ici */}
                      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                      <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Ajouter ou modifier une tâche" />
                      <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Aucune catégorie</option>
                        <option value="Travail">Travail</option>
                        <option value="Personnel">Personnel</option>
                        <option value="Liste de souhaits">Liste de souhaits</option>
                        <option value="Anniversaire">Anniversaire</option>
                      </select>

                      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="">Choisir une priorité</option>
                        <option value="faible">Faible </option>
                        <option value="moyenne">Moyenne </option>
                        <option value="elevee">Élevée </option>
                      </select>

                      <button onClick={editIndex !== null ? saveTask : addTask}>
                        {editIndex !== null ? 'Modifier' : 'Ajouter'}
                      </button>

                      {/* Liste des tâches filtrées */}
                      <ul>
                        {filteredTasks.map((task, index) => (
                          <li key={index} className={task.isComplete ? 'completed' : ''}>
                            <span onClick={() => toggleComplete(index)} style={{ cursor: 'pointer' }}>
                              {task.text} <small>({task.category})</small>
                            </span>
                            <div className={`priority-circle ${task.priority}`} />
                            <button onClick={() => editTask(index)}>Modifier</button>
                            <button onClick={() => deleteTask(index)}>Supprimer</button>
                            <button onClick={() => toggleComplete(index)}>
                              {task.isComplete ? 'Marquer Incomplète' : 'Marquer Complète'}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </>
                  } />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </>
            ) : (
              <Navigate to="/login" /> // Redirige vers la LoginPage si non connecté
            )}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
