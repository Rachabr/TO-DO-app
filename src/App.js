import React, { useState, useEffect } from 'react';
import './App.css';
import SidePanel from './SidePanel'; // Import du SidePanel
import WelcomePage from './WelcomePage';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Settings from './Settings';  // Assurez-vous que le chemin est correct
import LoginPage from './LoginPage'; // Import du composant LoginPage
import LogoPage from './LogoPage';  // Import de LogoPage
import SearchBar from './SearchBar'; // Import de SearchBar
import FAQ from './FAQ';
import Dashboard from './Dashboard';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour savoir si l'utilisateur est connecté
  const [showWelcome, setShowWelcome] = useState(true);
  const [showLogoPage, setShowLogoPage] = useState(false); // État pour afficher la LogoPage après WelcomePage
  const [showLoginPage, setShowLoginPage] = useState(false); // État pour afficher la LoginPage après LogoPage
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state


  
  const App = () => {
    const [tasks, setTasks] = useState([
      { id: 1, title: 'Créer le frontend', status: 'En cours' },
      { id: 2, title: 'Tester les fonctionnalités', status: 'Terminé' },
      { id: 3, title: 'Corriger les bugs', status: 'En attente' },
    ]);
  
    // Ajouter une tâche
    const addTask = (title, status) => {
      const newTask = { id: tasks.length + 1, title, status };
      setTasks([...tasks, newTask]);
    };
  }
 
  
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
      }, 4000); // Affiche la LogoPage pendant 2 secondes

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

  const changeStatus = (index) => {
    const updatedTasks = [...tasks];
    const currentStatus = updatedTasks[index].status;
  
    // Toggle status between "En cours", "Terminé", and "En attente"
    let newStatus;
    if (currentStatus === 'En cours') {
      newStatus = 'En attente';
    } else if (currentStatus === '  En attente') {
      newStatus = 'En cours';
    } else {
      newStatus = 'En cours';
    }
  
    updatedTasks[index].status = newStatus;
    setTasks(updatedTasks);
  };
  
  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    const task = updatedTasks[index];
  
    // Toggle the isComplete state
    task.isComplete = !task.isComplete;
  
    // Update status based on isComplete
    if (task.isComplete) {
      task.status = 'Terminé';
    } else {
      task.status = 'En attente';
    }
  
    setTasks(updatedTasks);
  };
  

  return (
    <Router>
      <div className="App">
        { /* Dark Mode Button */ } 
        <button onClick={toggleDarkMode} style={{ position: 'absolute', top: '20px', right: '20px' }}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
           

        

        {showWelcome ? (
          <WelcomePage onSkip={handleSkip} />
        ) : showLogoPage ? (
          <LogoPage />
        ) : showLoginPage ? (
          <LoginPage onLogin={() => { handleLogin(); setShowLoginPage(false); }} />
        ) : (
          <>
            {isLoggedIn ? (
              <>
                <SidePanel />
                <Routes>
                  <Route path="/" element={
                    <>
                      <h1>Ma Liste de Tâches</h1>
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
                        <option value="">priorité</option>
                        <option value="faible">Faible</option>
                        <option value="moyenne">Moyenne</option>
                        <option value="elevee">Élevée</option>
                      </select>
                      <button onClick={editIndex !== null ? saveTask : addTask}>
                        {editIndex !== null ? 'Modifier' : 'Ajouter'}
                      </button>
                      <ul>
  {filteredTasks.map((task, index) => (
    <li key={task.id} className={task.isComplete ? 'completed' : ''}>
      <span onClick={() => toggleComplete(index)} style={{ cursor: 'pointer' }}>
        {task.text} <small>({task.category})</small>
        <small> - {task.status}</small> {/* Display the task status */}
      </span>

      {/* Display priority */}
      <div className={`priority-circle ${task.priority}`} />

      {/* Change status button */}
      <button onClick={() => changeStatus(index)}>
        statut
      </button>

      {/* Edit and delete buttons */}
      <button onClick={() => editTask(index)}>✏️</button>
      <button onClick={() => deleteTask(index)}>🗑️</button>

      {/* Complete/Incomplete toggle button */}
      <button onClick={() => toggleComplete(index)}>
        {task.isComplete ? '❌' : '✅'}
      </button> 
    </li>
  ))}
</ul>

                    </>
                  } />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/FAQ" element={<FAQ />} />
                   {/* Dashboard */}
                <Route
                  path="/Dashboard"
                  element={<Dashboard tasks={tasks} addTask={addTask} />}
                />
                </Routes>
              </>
            ) : (
              <Navigate to="/login" />
            )}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
