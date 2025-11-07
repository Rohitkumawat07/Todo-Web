import React, { useState } from 'react';
import { Plus, Zap } from 'lucide-react';

/**
 * TodoForm component - Form for adding new todos with priority
 * @param {Object} props
 * @param {Function} props.onAdd - Function to add a new todo
 */
const TodoForm = ({ onAdd }) => {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('medium');

  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input, priority);
      setInput('');
      setPriority('medium');
    }
  };

  const priorities = [
    { id: 'low', label: 'Low', color: 'bg-green-500' },
    { id: 'medium', label: 'Medium', color: 'bg-yellow-500' },
    { id: 'high', label: 'High', color: 'bg-red-500' }
  ];

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      {/* Input and Add Button */}
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done today?"
          className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-gray-800 placeholder-gray-400 transition-all duration-300 shadow-sm focus:shadow-md"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-[#00BF00] to-[#00BF00] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#008000] hover:to-[#008000] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 transform hover:scale-105"

        >
          <Plus size={20} />
          Add
        </button>
      </div>

      {/* Priority Selector */}
      <div className="flex items-center gap-3">
        <Zap size={18} className="text-gray-500" />
        <span className="text-sm text-gray-600 font-medium">Priority:</span>
        <div className="flex gap-2">
          {priorities.map(p => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPriority(p.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 transform hover:scale-110 ${
                priority === p.id
                  ? 'bg-gray-800 text-white shadow-md scale-110'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              <span className={`inline-block w-2 h-2 rounded-full ${p.color} mr-1`}></span>
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </form>
  );
};

export default TodoForm;