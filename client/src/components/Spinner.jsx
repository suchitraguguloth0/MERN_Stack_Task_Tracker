const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="loading-spinner">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 rounded-full border-4 border-surface-700"></div>
        {/* Spinning ring */}
        <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-transparent border-t-primary-500 animate-spin"></div>
        {/* Inner glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary-500/20 animate-pulse"></div>
      </div>
      <p className="mt-6 text-surface-400 text-sm font-medium tracking-wide">
        Loading tasks...
      </p>
    </div>
  );
};

export default Spinner;
