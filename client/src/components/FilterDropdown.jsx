import { STATUS_OPTIONS, PRIORITY_OPTIONS } from '../utils/constants';

const FilterDropdown = ({
  statusFilter,
  priorityFilter,
  onStatusChange,
  onPriorityChange,
}) => {
  return (
    <div className="flex gap-3" id="filter-dropdowns">
      {/* Status Filter */}
      <div className="relative">
        <select
          id="status-filter"
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          className="glass-input pl-3 pr-8 py-2.5 text-sm appearance-none cursor-pointer min-w-[130px]"
        >
          {STATUS_OPTIONS.map((status) => (
            <option
              key={status}
              value={status}
              className="bg-surface-800 text-surface-200"
            >
              {status === 'All' ? 'All Status' : status}
            </option>
          ))}
        </select>
        {/* Dropdown Arrow */}
        <svg
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Priority Filter */}
      <div className="relative">
        <select
          id="priority-filter"
          value={priorityFilter}
          onChange={(e) => onPriorityChange(e.target.value)}
          className="glass-input pl-3 pr-8 py-2.5 text-sm appearance-none cursor-pointer min-w-[130px]"
        >
          {PRIORITY_OPTIONS.map((priority) => (
            <option
              key={priority}
              value={priority}
              className="bg-surface-800 text-surface-200"
            >
              {priority === 'All' ? 'All Priority' : priority}
            </option>
          ))}
        </select>
        {/* Dropdown Arrow */}
        <svg
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default FilterDropdown;
