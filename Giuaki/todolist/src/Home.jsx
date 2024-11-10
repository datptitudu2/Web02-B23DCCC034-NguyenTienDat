import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './Create';
import { BsFillCheckCircleFill, BsCircleFill, BsFillTrashFill } from 'react-icons/bs';

function Home() {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editingTask, setEditingTask] = useState(null);
    const [editingText, setEditingText] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleAdd = () => {
        if (!newTask.trim()) return;
        axios.post('http://localhost:3001/add', { task: newTask })
            .then(result => setTodos([...todos, result.data]))
            .catch(err => console.log(err));
        setNewTask('');
    };

    const handleEdit = (id) => {
        const todoToEdit = todos.find(todo => todo._id === id);
        setEditingTask(id);
        setEditingText(todoToEdit.task);
    };

    const handleUpdate = (id) => {
        axios.put(`http://localhost:3001/update/${id}`, { task: editingText })
            .then(() => {
                setTodos(todos.map(todo => todo._id === id ? { ...todo, task: editingText } : todo));
                setEditingTask(null);
                setEditingText('');
            })
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/delete/${id}`)
            .then(() => setTodos(todos.filter(todo => todo._id !== id)))
            .catch(err => console.log(err));
    };

    const handleToggleDone = (id, done) => {
        axios.put(`http://localhost:3001/update/${id}`, { done: !done })
            .then(() => {
                setTodos(todos.map(todo => todo._id === id ? { ...todo, done: !done } : todo));
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <h2>Todo List</h2>
            <div className="add-task">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter new task"
                />
                <button onClick={handleAdd}>Add Task</button>
            </div>
            {
                todos.length === 0
                    ? <div className="no-record"><h2>No record</h2></div>
                    : todos.map(todo => (
                        <div className="task" key={todo._id}>
                            <div className="checkbox" onClick={() => handleToggleDone(todo._id, todo.done)}>
                                {todo.done
                                    ? <BsFillCheckCircleFill className="icon" />
                                    : <BsCircleFill className="icon" />
                                }
                                {
                                    editingTask === todo._id
                                    ? (
                                        <input
                                            type="text"
                                            value={editingText}
                                            onChange={(e) => setEditingText(e.target.value)}
                                        />
                                    )
                                    : <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                            }
                        </div>
                        <div>
                            {
                                editingTask === todo._id
                                    ? <button onClick={() => handleUpdate(todo._id)}>Save</button>
                                    : <button onClick={() => handleEdit(todo._id)}>Edit</button>
                            }
                            <span>
                                <BsFillTrashFill
                                    className="icon"
                                    onClick={() => handleDelete(todo._id)}
                                />
                            </span>
                        </div>
                    </div>
                ))
        }
    </div>
);
}

export default Home;