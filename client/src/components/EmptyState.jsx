const EmptyState = ({ hasFilters, onClearFilters, onAddTask }) => {
  return (
    <div
      className="flex flex-col items-center justify-center py-16 px-4 animate-fadeIn"
      id="empty-state"
    >
      {/* Illustration */}
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-full bg-surface-800/50 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-surface-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary-500/20 animate-pulse"></div>
        <div className="absolute -bottom-1 -left-3 w-4 h-4 rounded-full bg-amber-500/20 animate-pulse delay-300"></div>
      </div>

      {hasFilters ? (
        <>
          <h3 className="text-xl font-semibold text-surface-200 mb-2">
            No matching tasks
          </h3>
          <p className="text-surface-400 text-center max-w-sm mb-6">
            No tasks match your current search or filter criteria. Try adjusting
            your filters.
          </p>
          <button
            id="clear-filters-btn"
            onClick={onClearFilters}
            className="px-5 py-2.5 text-sm font-medium text-primary-400 border border-primary-500/30 rounded-xl hover:bg-primary-500/10 transition-all duration-200"
          >
            Clear All Filters
          </button>
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold text-surface-200 mb-2">
            No tasks yet
          </h3>
          <p className="text-surface-400 text-center max-w-sm mb-6">
            Get started by creating your first task. Stay organized and track
            your progress effortlessly.
          </p>
          <button
            id="add-first-task-btn"
            onClick={onAddTask}
            className="btn-primary flex items-center gap-2 px-6 py-2.5 text-sm"
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create Your First Task
          </button>
        </>
      )}
    </div>
  );
};

export default EmptyState;
