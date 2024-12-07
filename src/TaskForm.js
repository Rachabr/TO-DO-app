import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('En attente');
  const [reminder, setReminder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ title, status, reminder });
      setTitle('');
      setStatus('En attente');
      setReminder('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre de la tâche"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="En attente">En attente</option>
        <option value="En cours">En cours</option>
        <option value="Terminé">Terminé</option>
      </select>
      <label>
        Rappel :
        <input
          type="datetime-local"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TaskForm;
