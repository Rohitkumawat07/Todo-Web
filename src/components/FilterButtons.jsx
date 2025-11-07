import React from 'react';
import { Filter } from 'lucide-react';

/**
 * FilterButtons component - Displays filter buttons and clear completed button
 * @param {Object} props
 * @param {string} props.filter - Current active filter
 * @param {Function} props.setFilter - Function to change filter
 * @param {Function} props.onClearCompleted - Function to clear completed todos
 * @param {number} props.completedCount - Number of completed todos
 */
const FilterButtons = ({ filter, setFilter, onClearCompleted, completedCount }) => {
  const filters = [
    { id: 'all', label: 'All Tasks' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' }
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-gray-200">
      {/* Filter Buttons */}
      <div className="flex items-center gap-2">
        <Filter size={18} className="text-gray-400" />
        <div className="flex gap-2">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className="bg-gradient-to-r from-[#00BF00] to-[#00BF00] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#008000] hover:to-[#008000] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 transform hover:scale-105"

            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Completed Button */}
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 rounded-lg font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-all duration-300 hover:scale-105"
        >
          Clear Completed ({completedCount})
        </button>
      )}
    </div>
  );
};

export default FilterButtons;