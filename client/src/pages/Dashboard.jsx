import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import StatsCards from '../components/StatsCards';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import SortDropdown from '../components/SortDropdown';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import ConfirmModal from '../components/ConfirmModal';
import EmptyState from '../components/EmptyState';
import Spinner from '../components/Spinner';
import useTasks from '../hooks/useTasks';

const Dashboard = () => {
  const {
    tasks,
    loading,
    error,
    search,
    statusFilter,
    priorityFilter,
    sortBy,
    setSearch,
    setStatusFilter,
    setPriorityFilter,
    setSortBy,
    addTask,
    editTask,
    removeTask,
    toggleComplete,
    refreshTasks,
  } = useTasks();

  // Local state for Modals
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Initial fetch
  useEffect(() => {
    refreshTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handlers for Form Modal
  const openAddForm = () => {
    setEditingTask(null);
    setIsFormOpen(true);
  };

  const openEditForm = (task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  };

  const handleFormSubmit = async (taskData) => {
    if (editingTask) {
      await editTask(editingTask._id, taskData);
    } else {
      await addTask(taskData);
    }
  };

  // Handlers for Confirm Delete Modal
  const openDeleteConfirm = (task) => {
    setTaskToDelete(task);
    setIsConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (taskToDelete) {
      await removeTask(taskToDelete._id);
      setIsConfirmOpen(false);
      setTaskToDelete(null);
    }
  };

  const clearFilters = () => {
    setSearch('');
    setStatusFilter('All');
    setPriorityFilter('All');
  };

  const hasActiveFilters =
    search.trim() !== '' || statusFilter !== 'All' || priorityFilter !== 'All';

  return (
    <div className="min-h-screen pb-12">
      <Navbar onAddTask={openAddForm} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Header Section */}
        <div className="mb-8 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Dashboard
          </h2>
          <p className="text-surface-400">
            Welcome back! Here's an overview of your tasks.
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="mb-8 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 animate-fadeIn">
            ⚠️ {error}
          </div>
        )}

        {/* Stats Row */}
        <div className="mb-8">
          <StatsCards tasks={tasks} />
        </div>

        {/* Filters Toolbar */}
        <div className="glass-card p-4 mb-8 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <div className="w-full md:max-w-md">
            <SearchBar value={search} onChange={setSearch} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center overflow-x-auto pb-2 sm:pb-0">
            <FilterDropdown
              statusFilter={statusFilter}
              priorityFilter={priorityFilter}
              onStatusChange={setStatusFilter}
              onPriorityChange={setPriorityFilter}
            />
            <div className="hidden sm:block w-px h-8 bg-surface-700"></div>
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="min-h-[400px]">
          {loading && tasks.length === 0 ? (
            <Spinner />
          ) : tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onEdit={openEditForm}
              onDelete={openDeleteConfirm}
              onToggleComplete={toggleComplete}
            />
          ) : (
            <EmptyState
              hasFilters={hasActiveFilters}
              onClearFilters={clearFilters}
              onAddTask={openAddForm}
            />
          )}
        </div>
      </main>

      {/* Modals */}
      <TaskForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
        editingTask={editingTask}
      />

      <ConfirmModal
        isOpen={isConfirmOpen}
        title="Delete Task?"
        message={`Are you sure you want to delete "${
          taskToDelete?.title || 'this task'
        }"?`}
        onConfirm={confirmDelete}
        onCancel={() => setIsConfirmOpen(false)}
      />
    </div>
  );
};

export default Dashboard;
