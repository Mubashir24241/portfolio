import express from 'express';
import { pool } from '../config/db';
import { ResultSetHeader } from 'mysql2';

const router = express.Router();

// Get all messages
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM messages ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching messages' });
  }
});

// Submit a new message
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting message' });
  }
});

export default router;
