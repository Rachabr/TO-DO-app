import React, { useState } from 'react';
import './Dashboard.css';
// Composant Task (pour chaque tâche)
const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="task">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleComplete(task.id)} 
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </div>
  );
};

// Composant Dashboard
const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Faire les courses', completed: false },
    { id: 2, text: 'Répondre aux emails', completed: false },
    { id: 3, text: 'Aller à la salle de sport', completed: false }
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask, completed: false }
      ]);
      setNewTask('');
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="dashboard">
      <h1>Mon Dashboard de To-Do</h1>
      
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ajouter une nouvelle tâche"
        />
        <button onClick={addTask}>Ajouter</button>
      </div>

      <div className="task-list">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
