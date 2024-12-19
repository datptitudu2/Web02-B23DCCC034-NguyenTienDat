const db = require('../config/db.config');
const bcrypt = require('bcryptjs');

exports.getProfile = async (req, res) => {
    try {
        const [users] = await db.execute(
            'SELECT id, username, fullName, email, studentId, phoneNumber, role FROM users WHERE id = ?',
            [req.userId]
        );

        if (users.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(users[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const { fullName, email, phoneNumber } = req.body;

        const [result] = await db.execute(
            'UPDATE users SET fullName = ?, email = ?, phoneNumber = ? WHERE id = ?',
            [fullName, email, phoneNumber, req.userId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'Profile updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        // Get current user
        const [users] = await db.execute(
            'SELECT * FROM users WHERE id = ?',
            [req.userId]
        );

        if (users.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verify current password
        const isValidPassword = await bcrypt.compare(currentPassword, users[0].password);
        if (!isValidPassword) {
            return res.status(400).json({ message: 'Current password is incorrect' });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update password
        await db.execute(
            'UPDATE users SET password = ? WHERE id = ?',
            [hashedPassword, req.userId]
        );

        res.json({ message: 'Password changed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        // Check if user is admin
        const [users] = await db.execute(
            'SELECT role FROM users WHERE id = ?',
            [req.userId]
        );

        if (users[0].role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        // Get all users
        const [allUsers] = await db.execute(
            'SELECT id, username, fullName, email, studentId, phoneNumber, role, createdAt FROM users'
        );

        res.json(allUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        // Check if user is admin
        const [users] = await db.execute(
            'SELECT role FROM users WHERE id = ?',
            [req.userId]
        );

        if (users[0].role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        // Delete user
        const [result] = await db.execute(
            'DELETE FROM users WHERE id = ?',
            [req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};