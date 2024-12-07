import React from 'react';
import './TaskList.css';


const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <h2>Liste des tâches</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.status ? task.status.toLowerCase() : ''}`}
          >
            {task.title || 'Tâche sans titre'} -{' '}
            <span>{task.status || 'Statut inconnu'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

