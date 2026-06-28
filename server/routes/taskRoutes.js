const express = require('express');
const router = express.Router();
const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

// GET /api/tasks       — Get all tasks (with search, filter, sort)
// POST /api/tasks      — Create a new task
router.route('/').get(getTasks).post(createTask);

// GET /api/tasks/:id   — Get single task
// PUT /api/tasks/:id   — Update a task
// DELETE /api/tasks/:id — Delete a task
router.route('/:id').get(getTaskById).put(updateTask).delete(deleteTask);

module.exports = router;
