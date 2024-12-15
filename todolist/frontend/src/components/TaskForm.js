import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function TaskForm({ onAdd, editingTask, onEdit }) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDueDate(new Date(editingTask.due_date));
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const taskData = {
      title: title.trim(),
      due_date: dueDate.toISOString().split('T')[0],
      status: editingTask ? editingTask.status : false
    };

    if (editingTask) {
      onEdit({ ...taskData, id: editingTask.id });
    } else {
      onAdd(taskData);
    }

    setTitle('');
    setDueDate(new Date());
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        className="task-input"
        required
      />
      <DatePicker
        selected={dueDate}
        onChange={(date) => setDueDate(date)}
        dateFormat="dd/MM/yyyy"
        className="date-picker"
      />
      <button type="submit" className="add-button">
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
}

export default TaskForm;