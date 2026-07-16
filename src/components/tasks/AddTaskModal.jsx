import { X } from "lucide-react";
import { useState } from "react";

const emptyTask = {
  title: "",
  description: "",
  priority: "Medium",
  status: "todo",
  dueDate: "",
};

const AddTaskModal = ({ open, onClose, onAddTask, onUpdateTask, task }) => {
  const [formData, setFormData] = useState(() => ({
    ...emptyTask,
    ...task,
  }));

  const isEditing = Boolean(task);

  if (!open) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) return;

    if (isEditing) {
      onUpdateTask({
        ...task,
        ...formData,
      });
    } else {
      onAddTask({
        id: Date.now(),
        ...formData,
      });
    }

    setFormData({ ...emptyTask });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-semibold">
            {isEditing ? "Edit Task" : "Create New Task"}
          </h2>

          <button type="button" onClick={onClose} aria-label="Close modal">
            <X />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-5"
        >
          <div>
            <label className="mb-2 block font-medium">
              Task Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded-xl border p-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full resize-none rounded-xl border p-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Priority
            </label>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            >
              <option value="todo">To Do</option>
              <option value="in-progress">
                In Progress
              </option>
              <option value="completed">
                Completed
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Due Date
            </label>

            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full rounded-xl border p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 py-3 font-medium text-white hover:bg-indigo-700"
          >
            {isEditing ? "Save Changes" : "Create Task"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
