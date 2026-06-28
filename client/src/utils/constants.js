// Status options
export const STATUS_OPTIONS = ['All', 'To Do', 'In Progress', 'Completed'];

// Priority options
export const PRIORITY_OPTIONS = ['All', 'Low', 'Medium', 'High'];

// Sort options
export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'dueDate', label: 'Due Date' },
];

// Status color mapping for badges
export const STATUS_COLORS = {
  'To Do': {
    bg: 'bg-amber-500/15',
    text: 'text-amber-400',
    border: 'border-amber-500/30',
    dot: 'bg-amber-400',
  },
  'In Progress': {
    bg: 'bg-blue-500/15',
    text: 'text-blue-400',
    border: 'border-blue-500/30',
    dot: 'bg-blue-400',
  },
  Completed: {
    bg: 'bg-emerald-500/15',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
    dot: 'bg-emerald-400',
  },
};

// Priority color mapping for badges
export const PRIORITY_COLORS = {
  Low: {
    bg: 'bg-slate-500/15',
    text: 'text-slate-400',
    border: 'border-slate-500/30',
  },
  Medium: {
    bg: 'bg-orange-500/15',
    text: 'text-orange-400',
    border: 'border-orange-500/30',
  },
  High: {
    bg: 'bg-rose-500/15',
    text: 'text-rose-400',
    border: 'border-rose-500/30',
  },
};

// Stats card config
export const STATS_CONFIG = [
  {
    key: 'total',
    label: 'Total Tasks',
    icon: '📋',
    gradient: 'from-primary-600/20 to-primary-800/20',
    border: 'border-primary-500/30',
    textColor: 'text-primary-400',
  },
  {
    key: 'todo',
    label: 'To Do',
    icon: '📝',
    gradient: 'from-amber-600/20 to-amber-800/20',
    border: 'border-amber-500/30',
    textColor: 'text-amber-400',
  },
  {
    key: 'inProgress',
    label: 'In Progress',
    icon: '⚡',
    gradient: 'from-blue-600/20 to-blue-800/20',
    border: 'border-blue-500/30',
    textColor: 'text-blue-400',
  },
  {
    key: 'completed',
    label: 'Completed',
    icon: '✅',
    gradient: 'from-emerald-600/20 to-emerald-800/20',
    border: 'border-emerald-500/30',
    textColor: 'text-emerald-400',
  },
];

// Default form values for creating a new task
export const DEFAULT_TASK_FORM = {
  title: '',
  description: '',
  status: 'To Do',
  priority: 'Medium',
  dueDate: '',
};
