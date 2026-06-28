import axios from 'axios';

// Create axios instance with base URL
// In development, Vite proxy forwards /api to http://localhost:5000
// In production, use the environment variable or default
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Get all tasks with optional query params
 * @param {Object} params - { search, status, priority, sort }
 * @returns {Promise} Axios response
 */
export const getAllTasks = async (params = {}) => {
  const response = await API.get('/tasks', { params });
  return response.data;
};

/**
 * Get a single task by ID
 * @param {string} id - Task ID
 * @returns {Promise} Axios response
 */
export const getTask = async (id) => {
  const response = await API.get(`/tasks/${id}`);
  return response.data;
};

/**
 * Create a new task
 * @param {Object} taskData - Task data to create
 * @returns {Promise} Axios response
 */
export const createTask = async (taskData) => {
  const response = await API.post('/tasks', taskData);
  return response.data;
};

/**
 * Update an existing task
 * @param {string} id - Task ID
 * @param {Object} taskData - Updated task data
 * @returns {Promise} Axios response
 */
export const updateTask = async (id, taskData) => {
  const response = await API.put(`/tasks/${id}`, taskData);
  return response.data;
};

/**
 * Delete a task
 * @param {string} id - Task ID
 * @returns {Promise} Axios response
 */
export const deleteTask = async (id) => {
  const response = await API.delete(`/tasks/${id}`);
  return response.data;
};
