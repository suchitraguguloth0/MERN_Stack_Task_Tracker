import { STATUS_COLORS, PRIORITY_COLORS } from '../utils/constants';
import { formatDate, isOverdue, truncateText, getRelativeTime } from '../utils/helpers';

const TaskCard = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const statusColor = STATUS_COLORS[task.status] || STATUS_COLORS['To Do'];
  const priorityColor = PRIORITY_COLORS[task.priority] || PRIORITY_COLORS['Medium'];
  const overdue = isOverdue(task.dueDate) && task.status !== 'Completed';
  const isCompleted = task.status === 'Completed';

  return (
    <div
      className={`glass-card p-5 transition-all duration-300 hover:translate-y-[-2px] group ${
        isCompleted ? 'opacity-75' : ''
      }`}
      id={`task-card-${task._id}`}
    >
      {/* Top Row: Priority Badge + Actions */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Priority Badge */}
          <span
            className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-lg border ${priorityColor.bg} ${priorityColor.text} ${priorityColor.border}`}
          >
            {task.priority === 'High' && '🔴 '}
            {task.priority === 'Medium' && '🟡 '}
            {task.priority === 'Low' && '🟢 '}
            {task.priority}
          </span>

          {/* Status Badge */}
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg border ${statusColor.bg} ${statusColor.text} ${statusColor.border}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${statusColor.dot}`}></span>
            {task.status}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {/* Complete Button */}
          <button
            id={`complete-btn-${task._id}`}
            onClick={() => onToggleComplete(task)}
            title={isCompleted ? 'Mark as To Do' : 'Mark as Completed'}
            className={`p-1.5 rounded-lg transition-all duration-200 ${
              isCompleted
                ? 'text-emerald-400 hover:bg-emerald-500/15'
                : 'text-surface-400 hover:text-emerald-400 hover:bg-emerald-500/15'
            }`}
          >
            <svg
              className="w-4 h-4"
              fill={isCompleted ? 'currentColor' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>

          {/* Edit Button */}
          <button
            id={`edit-btn-${task._id}`}
            onClick={() => onEdit(task)}
            title="Edit task"
            className="p-1.5 rounded-lg text-surface-400 hover:text-primary-400 hover:bg-primary-500/15 transition-all duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>

          {/* Delete Button */}
          <button
            id={`delete-btn-${task._id}`}
            onClick={() => onDelete(task)}
            title="Delete task"
            className="p-1.5 rounded-lg text-surface-400 hover:text-rose-400 hover:bg-rose-500/15 transition-all duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Title */}
      <h3
        className={`text-base font-semibold mb-2 ${
          isCompleted ? 'line-through text-surface-400' : 'text-white'
        }`}
      >
        {task.title}
      </h3>

      {/* Description */}
      {task.description && (
        <p className="text-sm text-surface-400 mb-4 leading-relaxed">
          {truncateText(task.description)}
        </p>
      )}

      {/* Footer: Due Date & Created */}
      <div className="flex items-center justify-between pt-3 border-t border-surface-700/50">
        {/* Due Date */}
        <div className="flex items-center gap-1.5">
          <svg
            className={`w-3.5 h-3.5 ${
              overdue ? 'text-rose-400' : 'text-surface-500'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span
            className={`text-xs font-medium ${
              overdue ? 'text-rose-400' : 'text-surface-500'
            }`}
          >
            {overdue ? `Overdue — ${formatDate(task.dueDate)}` : formatDate(task.dueDate)}
          </span>
        </div>

        {/* Created time */}
        <span className="text-xs text-surface-600">
          {getRelativeTime(task.createdAt)}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
