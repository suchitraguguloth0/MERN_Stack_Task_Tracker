import { STATS_CONFIG } from '../utils/constants';
import { computeStats } from '../utils/helpers';

const StatsCards = ({ tasks }) => {
  const stats = computeStats(tasks);

  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      id="stats-cards"
    >
      {STATS_CONFIG.map((config, index) => (
        <div
          key={config.key}
          className={`glass-card p-4 sm:p-5 bg-gradient-to-br ${config.gradient} border ${config.border} transition-all duration-300 hover:scale-[1.02]`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl">{config.icon}</span>
            <span
              className={`text-2xl sm:text-3xl font-bold ${config.textColor}`}
            >
              {stats[config.key]}
            </span>
          </div>
          <p className="text-surface-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
            {config.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
