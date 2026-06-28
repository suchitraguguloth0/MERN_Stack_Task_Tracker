import { useState, useEffect } from 'react';
import { validateTaskForm, formatDateForInput } from '../utils/helpers';
import { DEFAULT_TASK_FORM } from '../utils/constants';

const TaskForm = ({ isOpen, onClose, onSubmit, editingTask }) => {
  const [formData, setFormData] = useState(DEFAULT_TASK_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const isEditMode = Boolean(editingTask);

  // Populate form when editing
  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title || '',
        description: editingTask.description || '',
        status: editingTask.status || 'To Do',
        priority: editingTask.priority || 'Medium',
        dueDate: formatDateForInput(editingTask.dueDate),
      });
    } else {
      setFormData(DEFAULT_TASK_FORM);
    }
    setErrors({});
  }, [editingTask, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    const validation = validateTaskForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setSubmitting(true);
    try {
      await onSubmit(formData);
      setFormData(DEFAULT_TASK_FORM);
      setErrors({});
      onClose();
    } catch (err) {
      // Error is handled by the hook (toast)
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="task-form-modal">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative glass-card w-full max-w-lg p-6 sm:p-8 animate-fadeInUp max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">
            {isEditMode ? 'Edit Task' : 'Create New Task'}
          </h2>
          <button
            id="close-form-btn"
            onClick={onClose}
            className="text-surface-400 hover:text-white p-1 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label
              htmlFor="task-title"
              className="block text-sm font-medium text-surface-300 mb-1.5"
            >
              Title <span className="text-rose-400">*</span>
            </label>
            <input
              id="task-title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title..."
              className={`glass-input w-full px-4 py-2.5 text-sm ${
                errors.title ? 'border-rose-500/50 focus:border-rose-500' : ''
              }`}
            />
            {errors.title && (
              <p className="mt-1.5 text-xs text-rose-400">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="task-description"
              className="block text-sm font-medium text-surface-300 mb-1.5"
            >
              Description
            </label>
            <textarea
              id="task-description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter task description (optional)..."
              rows={3}
              className={`glass-input w-full px-4 py-2.5 text-sm resize-none ${
                errors.description
                  ? 'border-rose-500/50 focus:border-rose-500'
                  : ''
              }`}
            />
            <div className="flex justify-between mt-1">
              {errors.description && (
                <p className="text-xs text-rose-400">{errors.description}</p>
              )}
              <p className="text-xs text-surface-500 ml-auto">
                {formData.description.length}/500
              </p>
            </div>
          </div>

          {/* Status & Priority Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Status */}
            <div>
              <label
                htmlFor="task-status"
                className="block text-sm font-medium text-surface-300 mb-1.5"
              >
                Status
              </label>
              <select
                id="task-status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="glass-input w-full px-4 py-2.5 text-sm appearance-none cursor-pointer"
              >
                <option value="To Do" className="bg-surface-800">
                  To Do
                </option>
                <option value="In Progress" className="bg-surface-800">
                  In Progress
                </option>
                <option value="Completed" className="bg-surface-800">
                  Completed
                </option>
              </select>
            </div>

            {/* Priority */}
            <div>
              <label
                htmlFor="task-priority"
                className="block text-sm font-medium text-surface-300 mb-1.5"
              >
                Priority
              </label>
              <select
                id="task-priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="glass-input w-full px-4 py-2.5 text-sm appearance-none cursor-pointer"
              >
                <option value="Low" className="bg-surface-800">
                  Low
                </option>
                <option value="Medium" className="bg-surface-800">
                  Medium
                </option>
                <option value="High" className="bg-surface-800">
                  High
                </option>
              </select>
            </div>
          </div>

          {/* Due Date */}
          <div>
            <label
              htmlFor="task-dueDate"
              className="block text-sm font-medium text-surface-300 mb-1.5"
            >
              Due Date
            </label>
            <input
              id="task-dueDate"
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="glass-input w-full px-4 py-2.5 text-sm"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              id="cancel-task-btn"
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 text-sm font-medium text-surface-300 border border-surface-600 rounded-xl hover:bg-surface-700 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              id="submit-task-btn"
              type="submit"
              disabled={submitting}
              className="flex-1 btn-primary px-4 py-2.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  {isEditMode ? 'Updating...' : 'Creating...'}
                </>
              ) : isEditMode ? (
                'Update Task'
              ) : (
                'Create Task'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
