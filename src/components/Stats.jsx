import React from 'react';
import { CheckCircle2, Circle, ListTodo } from 'lucide-react';

/**
 * Stats component - Displays todo statistics
 * @param {Object} props
 * @param {Object} props.stats - Statistics object containing total, active, and completed counts
 */
const Stats = ({ stats }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {/* Total Tasks */}
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 text-center border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
        <div className="flex items-center justify-center mb-2">
          <ListTodo size={24} className="text-white" />
        </div>
        <div className="text-3xl font-bold text-white">{stats.total}</div>
        <div className="text-white/80 text-sm font-medium">Total Tasks</div>
      </div>

      {/* Active Tasks */}
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 text-center border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
        <div className="flex items-center justify-center mb-2">
          <Circle size={24} className="text-white" />
        </div>
        <div className="text-3xl font-bold text-white">{stats.active}</div>
        <div className="text-white/80 text-sm font-medium">Active</div>
      </div>

      {/* Completed Tasks */}
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4 text-center border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
        <div className="flex items-center justify-center mb-2">
          <CheckCircle2 size={24} className="text-white" />
        </div>
        <div className="text-3xl font-bold text-white">{stats.completed}</div>
        <div className="text-white/80 text-sm font-medium">Completed</div>
      </div>
    </div>
  );
};

export default Stats;