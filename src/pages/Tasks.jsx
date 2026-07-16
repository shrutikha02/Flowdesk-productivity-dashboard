import { useState } from "react";
import { Search, Plus } from "lucide-react";
import Button from "../components/ui/Button";
import TaskBoardDnd from "../components/tasks/TaskBoardDnd";
import useTasks from "../hooks/useTasks";
import AddTaskModal from "../components/tasks/AddTaskModal";
import DeleteTaskModal from "../components/tasks/DeleteTaskModal";

const Tasks = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [deleteTaskItem, setDeleteTaskItem] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  const {
    tasks,
    addTask,
    deleteTask,
    updateTask,
  } = useTasks();

  const handleDeleteClick = (task) => {
  setDeleteTaskItem(task);
  setIsDeleteModalOpen(true);
};
  const filteredTasks = tasks.filter((task) => {
  const query = search.trim().toLowerCase();

  const matchesSearch =
    (task.title ?? "").toLowerCase().includes(query) ||
    (task.description ?? "").toLowerCase().includes(query) ||
    (task.priority ?? "").toLowerCase().includes(query);

  const matchesStatus =
    statusFilter === "all" ||
    task.status === statusFilter;

  const matchesPriority =
    priorityFilter === "all" ||
    task.priority === priorityFilter;

  return (
    matchesSearch &&
    matchesStatus &&
    matchesPriority
  );
});
const sortedTasks = [...filteredTasks].sort((a, b) => {
  switch (sortBy) {
    case "priority": {
      const priorityOrder = {
        High: 3,
        Medium: 2,
        Low: 1,
      };

      return (
        (priorityOrder[b.priority] || 0) -
        (priorityOrder[a.priority] || 0)
      );
    }

    case "dueDate":
      return new Date(a.dueDate) - new Date(b.dueDate);

    case "title-asc":
      return a.title.localeCompare(b.title);

    case "title-desc":
      return b.title.localeCompare(a.title);

    default:
      return 0;
  }
});

  const openCreateModal = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingTask(null);
    setIsModalOpen(false);
  };

  return (
  <div className="space-y-8">
    {/* Header */}
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold">Task Management</h1>
        <p className="mt-2 text-slate-500">
          Organize and track your work.
        </p>
      </div>

      <Button
        className="flex items-center gap-2"
        onClick={openCreateModal}
      >
        <Plus size={18} />
        New Task
      </Button>
    </div>

    {/* Search */}
    <div className="relative max-w-md">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
      

      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 outline-none focus:border-indigo-500"
      />
    </div>
    {/* Filters */}
<div className="flex flex-wrap gap-4">
  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
  >
    <option value="all">All Status</option>
    <option value="todo">To Do</option>
    <option value="in-progress">In Progress</option>
    <option value="completed">Completed</option>
  </select>

  <select
    value={priorityFilter}
    onChange={(e) => setPriorityFilter(e.target.value)}
    className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
  >
    <option value="all">All Priority</option>
    <option value="High">High</option>
    <option value="Medium">Medium</option>
    <option value="Low">Low</option>
  </select>
  <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
  className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500"
>
  <option value="default">Sort By</option>
  <option value="priority">Priority</option>
  <option value="dueDate">Due Date</option>
  <option value="title-asc">Title (A-Z)</option>
  <option value="title-desc">Title (Z-A)</option>
</select>
</div>

    {/* Task Board */}
    {filteredTasks.length > 0 ? (
  <TaskBoardDnd
    tasks={sortedTasks}
    onEdit={openEditModal}
    onDelete={handleDeleteClick}
  />
) : (
  <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white">
    <div className="text-center">
      <h3 className="text-lg font-semibold text-slate-700">
        No tasks found
      </h3>

      <p className="mt-2 text-slate-500">
        Try a different search term.
      </p>
    </div>
  </div>
)}

    {/* Add Task Modal */}
    <AddTaskModal
      key={editingTask?.id ?? "new-task"}
      open={isModalOpen}
      onClose={closeModal}
      onAddTask={addTask}
      onUpdateTask={updateTask}
      task={editingTask}
    />
    <DeleteTaskModal
    open={isDeleteModalOpen}
    task={deleteTaskItem}
    onClose={() => setIsDeleteModalOpen(false)}
    onConfirm={deleteTask}
    />
  </div>
);
};

export default Tasks;
