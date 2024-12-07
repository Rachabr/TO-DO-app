import React from 'react';
import TaskList from './TaskList';
import TaskStats from './TaskStats';
import TaskForm from './TaskForm';
import './Dashboard.css';

const Dashboard = ({ tasks, addTask }) => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Tableau de Bord</h1>
      <TaskStats tasks={tasks} />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Dashboard;
