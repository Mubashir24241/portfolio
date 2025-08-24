import express from 'express';
import { pool } from '../config/db';

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projects ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects data' });
  }
});

// Add new project
router.post('/', async (req, res) => {
  const { title, description, technologies, image_url, project_url, github_url } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO projects (title, description, technologies, image_url, project_url, github_url) VALUES (?, ?, ?, ?, ?, ?)',
      [title, description, JSON.stringify(technologies), image_url, project_url, github_url]
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error adding project' });
  }
});

export default router;
