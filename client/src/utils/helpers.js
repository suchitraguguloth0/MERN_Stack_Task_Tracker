/**
 * Format a date string into a readable format
 * @param {string|Date} dateStr - Date string or Date object
 * @returns {string} Formatted date string
 */
export const formatDate = (dateStr) => {
  if (!dateStr) return 'No due date';
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

/**
 * Format a date for the input[type="date"] value
 * @param {string|Date} dateStr - Date string or Date object
 * @returns {string} YYYY-MM-DD formatted string
 */
export const formatDateForInput = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toISOString().split('T')[0];
};

/**
 * Check if a date is overdue (past today)
 * @param {string|Date} dateStr - Date string or Date object
 * @returns {boolean} True if the date is in the past
 */
export const isOverdue = (dateStr) => {
  if (!dateStr) return false;
  const dueDate = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return dueDate < today;
};

/**
 * Get relative time string (e.g., "2 days ago", "in 3 hours")
 * @param {string|Date} dateStr - Date string or Date object
 * @returns {string} Relative time string
 */
export const getRelativeTime = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = date - now;
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHr = Math.round(diffMin / 60);
  const diffDays = Math.round(diffHr / 24);

  if (Math.abs(diffDays) >= 1) {
    return diffDays > 0 ? `in ${diffDays}d` : `${Math.abs(diffDays)}d ago`;
  }
  if (Math.abs(diffHr) >= 1) {
    return diffHr > 0 ? `in ${diffHr}h` : `${Math.abs(diffHr)}h ago`;
  }
  if (Math.abs(diffMin) >= 1) {
    return diffMin > 0 ? `in ${diffMin}m` : `${Math.abs(diffMin)}m ago`;
  }
  return 'just now';
};

/**
 * Validate the task form data
 * @param {Object} formData - The form data to validate
 * @returns {Object} { isValid: boolean, errors: { field: message } }
 */
export const validateTaskForm = (formData) => {
  const errors = {};

  if (!formData.title || !formData.title.trim()) {
    errors.title = 'Title is required';
  } else if (formData.title.trim().length < 3) {
    errors.title = 'Title must be at least 3 characters';
  } else if (formData.title.trim().length > 100) {
    errors.title = 'Title cannot exceed 100 characters';
  }

  if (formData.description && formData.description.length > 500) {
    errors.description = 'Description cannot exceed 500 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Truncate text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 120) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Compute task statistics from an array of tasks
 * @param {Array} tasks - Array of task objects
 * @returns {Object} { total, todo, inProgress, completed }
 */
export const computeStats = (tasks) => {
  return {
    total: tasks.length,
    todo: tasks.filter((t) => t.status === 'To Do').length,
    inProgress: tasks.filter((t) => t.status === 'In Progress').length,
    completed: tasks.filter((t) => t.status === 'Completed').length,
  };
};
