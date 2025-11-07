import React, { useState } from 'react';
import { CheckCircle2, Circle, Edit2, Trash2, Save, X } from 'lucide-react';

/**
 * TodoItem component - Individual todo item with edit, delete, and toggle functionality
 * @param {Object} props
 * @param {Object} props.todo - Todo object
 * @param {Function} props.onToggle - Function to toggle todo completion
 * @param {Function} props.onDelete - Function to delete todo
 * @param {Function} props.onEdit - Function to edit todo text
 * @param {Function} props.onUpdatePriority - Function to update todo priority
 */
const TodoItem = ({ todo, onToggle, onDelete, onEdit, onUpdatePriority }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const priorityColors = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500'
  };

  /**
   * Handle save edit
   */
  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  /**
   * Handle cancel edit
   */
  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  /**
   * Format date for display
   */
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div
      className={`group p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-md animate-fade-in ${
        todo.completed
          ? 'bg-gray-50 border-gray-200 opacity-75'
          : 'bg-white border-gray-200 hover:border-purple-300 hover:scale-[1.02]'
      }`}
    >
      <div className="flex items-center gap-3">
        {/* Priority Indicator */}
        <div 
          className={`w-1 h-12 rounded-full ${priorityColors[todo.priority]} transition-all duration-300`}
          title={`${todo.priority} priority`}
        />

        {/* Checkbox */}
        <button
          onClick={() => onToggle(todo.id)}
          className="flex-shrink-0 transition-transform duration-200 hover:scale-110"
        >
          {todo.completed ? (
            <CheckCircle2 size={24} className="text-green-500 animate-fade-in" />
          ) : (
            <Circle size={24} className="text-gray-400 hover:text-purple-500 transition-colors" />
          )}
        </button>

        {/* Text or Input */}
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSave()}
              className="w-full px-3 py-1.5 border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
              autoFocus
            />
          ) : (
            <div>
              <span
                className={`text-gray-800 transition-all duration-300 ${
                  todo.completed ? 'line-through text-gray-400' : ''
                }`}
              >
                {todo.text}
              </span>
              <div className="text-xs text-gray-400 mt-1">
                {formatDate(todo.createdAt)}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className={`flex gap-2 transition-all duration-300 ${
          isEditing ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}>
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="p-2 hover:bg-green-100 rounded-lg transition-all duration-200 transform hover:scale-110"
                title="Save"
              >
                <Save size={18} className="text-green-600" />
              </button>
              <button
                onClick={handleCancel}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 transform hover:scale-110"
                title="Cancel"
              >
                <X size={18} className="text-gray-600" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 hover:bg-blue-100 rounded-lg transition-all duration-200 transform hover:scale-110"
                title="Edit"
              >
                <Edit2 size={18} className="text-blue-600" />
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="p-2 hover:bg-red-100 rounded-lg transition-all duration-200 transform hover:scale-110"
                title="Delete"
              >
                <Trash2 size={18} className="text-red-600" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;