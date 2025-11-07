// Storage utility functions for managing todos in localStorage
const STORAGE_KEY = 'todos-app-data';

export const storage = {
  /**
   * Get todos from localStorage
   * @returns {Array} Array of todo objects
   */
  getTodos: () => {
    try {
      const todos = localStorage.getItem(STORAGE_KEY);
      return todos ? JSON.parse(todos) : [];
    } catch (error) {
      console.error('Error loading todos:', error);
      return [];
    }
  },

  /**
   * Save todos to localStorage
   * @param {Array} todos - Array of todo objects to save
   * @returns {boolean} True if successful, false otherwise
   */
  saveTodos: (todos) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      return true;
    } catch (error) {
      console.error('Error saving todos:', error);
      return false;
    }
  },

  /**
   * Clear all todos from localStorage
   * @returns {boolean} True if successful, false otherwise
   */
  clearTodos: () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing todos:', error);
      return false;
    }
  }
};