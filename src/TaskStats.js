import React from 'react';
import './TaskStats.css';

const TaskStats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'Terminé').length;
  const pendingTasks = tasks.filter(task => task.status === 'En cours').length;

  // Calcul des hauteurs relatives pour chaque statut
  const completedHeight = (completedTasks / totalTasks) * 100 || 0;
  const pendingHeight = (pendingTasks / totalTasks) * 100 || 0;

  return (
    <div className="task-stats">
      <h2>Statistiques</h2>

      <div className="pipe-container">
        {/* Tuyau pour le total des tâches */}
        <div className="pipe total" style={{ height: `${completedHeight}%` }}>
          <span>{totalTasks}</span>
        </div>
        {/* Tuyau pour les tâches terminées */}
        <div className="pipe completed" style={{ height: `${completedHeight}%` }}>
          <span>{completedTasks}</span>
        </div>
        {/* Tuyau pour les tâches en attente */}
        <div className="pipe pending" style={{ height: `${pendingHeight}%` }}>
          <span>{pendingTasks}</span>
        </div>
      </div>

      <div className="stat-boxes">
        <div className="stat-box">
          <p>Total des tâches : {totalTasks}</p>
        </div>
        <div className="stat-box">
          <p>Tâches terminées : {completedTasks}</p>
        </div>
        <div className="stat-box">
          <p>Tâches en cours : {pendingTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
