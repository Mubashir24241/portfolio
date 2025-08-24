import express from 'express';
import { pool } from '../config/db';
import { ResultSetHeader } from 'mysql2';

const router = express.Router();

// Get all education entries
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM education ORDER BY start_date DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching education data' });
  }
});

// Add new education entry
router.post('/', async (req, res) => {
  const { degree, institution, start_date, end_date, description } = req.body;
  try {
    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO education (degree, institution, start_date, end_date, description) VALUES (?, ?, ?, ?, ?)',
      [degree, institution, start_date, end_date, description]
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error adding education entry' });
  }
});

export default router;
