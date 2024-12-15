// Task.js
import React from 'react';

function Task({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.status}
        onChange={() => onToggle(task.id, !task.status)}
      />
      <div className="task-content">
        <span className="task-title">
          {task.title}
        </span>
        <div className="task-actions">
          <span className="due-date">
            {new Date(task.due_date).toLocaleDateString()}
          </span>
          <div className="task-buttons">
            <button onClick={() => onEdit(task)} className="edit-button">
              Edit
            </button>
            <button onClick={() => onDelete(task.id)} className="delete-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;