import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL || ''}/api/tasks`,
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
  const response = await API.get('/', { params });
  return response.data;
};

/**
 * Get a single task by ID
 * @param {string} id - Task ID
 */
export const getTaskById = async (id) => {
  const response = await API.get(`/${id}`);
  return response.data;
};

/**
 * Create a new task
 * @param {Object} taskData - Task fields
 */
export const createTask = async (taskData) => {
  const response = await API.post('/', taskData);
  return response.data;
};

/**
 * Update an existing task
 * @param {string} id - Task ID
 * @param {Object} taskData - Updated fields
 */
export const updateTask = async (id, taskData) => {
  const response = await API.put(`/${id}`, taskData);
  return response.data;
};

/**
 * Delete a task
 * @param {string} id - Task ID
 */
export const deleteTask = async (id) => {
  const response = await API.delete(`/${id}`);
  return response.data;
};

/**
 * Toggle task completion
 * @param {string} id - Task ID
 */
export const toggleComplete = async (id) => {
  const response = await API.put(`/${id}/complete`);
  return response.data;
};

export default API;