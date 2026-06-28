const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      id="confirm-modal"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={onCancel}
      ></div>

      {/* Modal Content */}
      <div className="relative glass-card p-6 w-full max-w-sm animate-fadeInUp">
        {/* Warning Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-500/15 mx-auto mb-4">
          <svg
            className="w-6 h-6 text-rose-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>

        <h3 className="text-lg font-semibold text-white text-center mb-2">
          {title || 'Are you sure?'}
        </h3>
        <p className="text-surface-400 text-sm text-center mb-6">
          {message || 'This action cannot be undone.'}
        </p>

        <div className="flex gap-3">
          <button
            id="confirm-cancel-btn"
            onClick={onCancel}
            className="flex-1 px-4 py-2.5 text-sm font-medium text-surface-300 border border-surface-600 rounded-xl hover:bg-surface-700 transition-all duration-200"
          >
            Cancel
          </button>
          <button
            id="confirm-delete-btn"
            onClick={onConfirm}
            className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-rose-600 rounded-xl hover:bg-rose-700 transition-all duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
