import { SORT_OPTIONS } from '../utils/constants';

const SortDropdown = ({ value, onChange }) => {
  return (
    <div className="relative" id="sort-dropdown">
      <select
        id="sort-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="glass-input pl-3 pr-8 py-2.5 text-sm appearance-none cursor-pointer min-w-[140px]"
      >
        {SORT_OPTIONS.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-surface-800 text-surface-200"
          >
            {option.label}
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
  );
};

export default SortDropdown;
