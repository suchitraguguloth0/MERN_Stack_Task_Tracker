import { useState, useEffect, useCallback } from 'react';
import * as taskService from '../services/taskService';
import toast from 'react-hot-toast';

/**
 * Custom hook for managing task state and CRUD operations.
 * Single source of truth for the Dashboard.
 */
const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter & search state
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  /**
   * Fetch all tasks from the API with current filters
   */
  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const params = {};
      if (search.trim()) params.search = search.trim();
      if (statusFilter !== 'All') params.status = statusFilter;
      if (priorityFilter !== 'All') params.priority = priorityFilter;
      if (sortBy) params.sort = sortBy;

      const data = await taskService.getAllTasks(params);
      setTasks(data.data);
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to fetch tasks';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }, [search, statusFilter, priorityFilter, sortBy]);

  // Fetch tasks on mount and when filters change
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchTasks();
    }, search ? 400 : 0); // Debounce search input

    return () => clearTimeout(debounceTimer);
  }, [fetchTasks, search]);

  /**
   * Create a new task
   */
  const addTask = async (taskData) => {
    try {
      const data = await taskService.createTask(taskData);
      toast.success('Task created successfully! 🎉');
      await fetchTasks(); // Refresh list
      return data.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to create task';
      toast.error(message);
      throw err;
    }
  };

  /**
   * Update an existing task
   */
  const editTask = async (id, taskData) => {
    try {
      const data = await taskService.updateTask(id, taskData);
      toast.success('Task updated successfully! ✏️');
      await fetchTasks(); // Refresh list
      return data.data;
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update task';
      toast.error(message);
      throw err;
    }
  };

  /**
   * Delete a task
   */
  const removeTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      toast.success('Task deleted successfully! 🗑️');
      await fetchTasks(); // Refresh list
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to delete task';
      toast.error(message);
      throw err;
    }
  };

  /**
   * Toggle task status to "Completed" or back to "To Do"
   */
  const toggleComplete = async (task) => {
    const newStatus = task.status === 'Completed' ? 'To Do' : 'Completed';
    try {
      await taskService.updateTask(task._id, { status: newStatus });
      toast.success(
        newStatus === 'Completed'
          ? 'Task marked as completed! ✅'
          : 'Task moved back to To Do 📝'
      );
      await fetchTasks();
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update status';
      toast.error(message);
    }
  };

  return {
    // State
    tasks,
    loading,
    error,
    search,
    statusFilter,
    priorityFilter,
    sortBy,

    // Setters
    setSearch,
    setStatusFilter,
    setPriorityFilter,
    setSortBy,

    // Actions
    addTask,
    editTask,
    removeTask,
    toggleComplete,
    refreshTasks: fetchTasks,
  };
};

export default useTasks;
