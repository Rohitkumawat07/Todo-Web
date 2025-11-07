import { useState, useEffect } from 'react';
import { storage } from '../utils/storage';

/**
 * Custom hook for managing todos with persistence
 * @returns {Object} Todo state and functions
 */
export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load todos from localStorage on mount
  useEffect(() => {
    const loadedTodos = storage.getTodos();
    setTodos(loadedTodos);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (todos.length >= 0) {
      storage.saveTodos(todos);
    }
  }, [todos]);

  /**
   * Add a new todo
   * @param {string} text - The todo text
   * @param {string} priority - Priority level (low, medium, high)
   */
  const addTodo = (text, priority = 'medium') => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      priority,
      createdAt: new Date().toISOString()
    };

    setTodos([newTodo, ...todos]);
  };

  /**
   * Toggle todo completion status
   * @param {number} id - Todo ID
   */
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  /**
   * Delete a todo
   * @param {number} id - Todo ID
   */
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  /**
   * Edit todo text
   * @param {number} id - Todo ID
   * @param {string} newText - New text for the todo
   */
  const editTodo = (id, newText) => {
    if (!newText.trim()) return;

    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText.trim() } : todo
    ));
  };

  /**
   * Update todo priority
   * @param {number} id - Todo ID
   * @param {string} priority - New priority level
   */
  const updatePriority = (id, priority) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, priority } : todo
    ));
  };

  /**
   * Clear all completed todos
   */
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  /**
   * Clear all todos
   */
  const clearAll = () => {
    setTodos([]);
  };

  // Get filtered todos based on current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Calculate statistics
  const stats = {
    total: todos.length,
    active: todos.filter(t => !t.completed).length,
    completed: todos.filter(t => t.completed).length
  };

  return {
    todos: filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    updatePriority,
    clearCompleted,
    clearAll,
    stats
  };
};