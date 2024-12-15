import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (taskData) => {
    try {
      const response = await axios.post(`${API_URL}/tasks`, taskData);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleTask = async (id, status) => {
    try {
      await axios.put(`${API_URL}/tasks/${id}`, { status });
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, status } : task
      ));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const startEditing = (task) => {
    setEditingTask(task);
  };

  const editTask = async (taskData) => {
    try {
      const response = await axios.put(`${API_URL}/tasks/${taskData.id}`, taskData);
      setTasks(tasks.map(task =>
        task.id === taskData.id ? response.data : task
      ));
      setEditingTask(null);
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TaskForm 
        onAdd={addTask} 
        editingTask={editingTask}
        onEdit={editTask}
      />
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={startEditing}
      />
    </div>
  );
}

export default App;