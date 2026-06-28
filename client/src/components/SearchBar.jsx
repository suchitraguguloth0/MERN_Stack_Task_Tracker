const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative flex-1 min-w-0" id="search-bar">
      {/* Search Icon */}
      <svg
        className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <input
        id="search-input"
        type="text"
        placeholder="Search tasks by title or description..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="glass-input w-full pl-10 pr-4 py-2.5 text-sm"
      />

      {/* Clear button */}
      {value && (
        <button
          id="clear-search-btn"
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-200 transition-colors"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
