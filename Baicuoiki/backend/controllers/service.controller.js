const db = require('../config/db.config');

exports.getAllServices = async (req, res) => {
    try {
        const [services] = await db.execute('SELECT * FROM services');
        res.json(services);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getServiceById = async (req, res) => {
    try {
        const [services] = await db.execute(
            'SELECT * FROM services WHERE id = ?',
            [req.params.id]
        );

        if (services.length === 0) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.json(services[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.addService = async (req, res) => {
    try {
        const { name, description, category } = req.body;
        
        const [result] = await db.execute(
            'INSERT INTO services (name, description, category) VALUES (?, ?, ?)',
            [name, description, category]
        );

        res.status(201).json({
            message: 'Service added successfully',
            serviceId: result.insertId
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateService = async (req, res) => {
    try {
        const { name, description, category, status } = req.body;

        const [result] = await db.execute(
            'UPDATE services SET name = ?, description = ?, category = ?, status = ? WHERE id = ?',
            [name, description, category, status, req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.json({ message: 'Service updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteService = async (req, res) => {
    try {
        const [result] = await db.execute(
            'DELETE FROM services WHERE id = ?',
            [req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.json({ message: 'Service deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};