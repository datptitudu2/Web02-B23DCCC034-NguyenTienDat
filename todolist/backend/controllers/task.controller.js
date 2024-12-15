const Task = require('../models/task.model');

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving tasks" });
    }
};

exports.createTask = async (req, res) => {
    try {
        const newTask = await Task.create(req.body);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: "Error creating task" });
    }
};

exports.getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving task" });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const result = await Task.update(req.params.id, req.body);
        if (result) {
            const updatedTask = await Task.findById(req.params.id);
            res.json(updatedTask);
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating task" });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const result = await Task.delete(req.params.id);
        if (result) {
            res.json({ message: "Task deleted successfully" });
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting task" });
    }
};