import React from 'react';
import { useTodos } from './hooks/useTodos';
import Stats from './components/Stats';
import TodoForm from './components/TodoForm';
import FilterButtons from './components/FilterButtons';
import TodoList from './components/TodoList';
import { Sparkles } from 'lucide-react';

function App() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    updatePriority,
    clearCompleted,
    stats
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f2c] via-[#0d1b3d] to-[#10214a] p-4 sm:p-8">

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Sparkles size={40} className="text-yellow-300 animate-pulse" />
            <h1 className="text-5xl sm:text-6xl font-bold text-[#0eff00] drop-shadow-2xl">
              My Tasks
            </h1>
            <Sparkles size={40} className="text-yellow-300 animate-pulse" />
          </div>
          <p className="text-[#089000] text-lg sm:text-xl font-medium">
            Stay organized, stay productive ✨
          </p>
        </div>

        {/* Stats Cards */}
        <Stats stats={stats} />

        {/* Main Card */}
        <div className="bg-[#05081c]/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/50 animate-slide-in">
          {/* Todo Form */}
          <TodoForm onAdd={addTodo} />

          {/* Filter Buttons */}
          <FilterButtons
            filter={filter}
            setFilter={setFilter}
            onClearCompleted={clearCompleted}
            completedCount={stats.completed}
          />

          {/* Todo List */}
          <TodoList
            todos={todos}
            filter={filter}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
            onUpdatePriority={updatePriority}
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white/70 text-sm animate-fade-in">
          <p>Made with ❤️ using React + Vite + Tailwind CSS</p>
          <p className="mt-2">© 2024 Modern Todo App</p>
        </div>
      </div>
    </div>
  );
}

export default App;