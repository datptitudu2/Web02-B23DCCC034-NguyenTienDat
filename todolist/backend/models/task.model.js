const db = require('../config/db.config');

class Task {
    static async findAll() {
        try {
            const [rows] = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
            return rows;
        } catch (error) {
            throw error;
        }
    }

    static async create(taskData) {
        try {
            const [result] = await db.query(
                'INSERT INTO tasks (title, status, due_date) VALUES (?, ?, ?)',
                [
                    taskData.title,
                    taskData.status ? 1 : 0,
                    taskData.due_date
                ]
            );

            return {
                id: result.insertId,
                ...taskData,
                created_at: new Date()
            };
        } catch (error) {
            throw error;
        }
    }

    static async findById(id) {
        try {
            const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async update(id, taskData) {
        try {
            const [result] = await db.query(
                'UPDATE tasks SET title = ?, status = ?, due_date = ? WHERE id = ?',
                [
                    taskData.title,
                    taskData.status ? 1 : 0,
                    taskData.due_date,
                    id
                ]
            );
            return result.affectedRows > 0;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const [result] = await db.query('DELETE FROM tasks WHERE id = ?', [id]);
            return result.affectedRows > 0;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Task;