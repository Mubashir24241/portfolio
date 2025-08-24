import express from 'express';
import { pool } from '../config/db';
import { ResultSetHeader } from 'mysql2';

const router = express.Router();

// Get all experience entries
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM experience ORDER BY start_date DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching experience data' });
  }
});

// Add new experience entry
router.post('/', async (req, res) => {
  const { title, company, start_date, end_date, description } = req.body;
  try {
    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO experience (title, company, start_date, end_date, description) VALUES (?, ?, ?, ?, ?)',
      [title, company, start_date, end_date, description]
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error adding experience entry' });
  }
});

export default router;
