import { CalendarDays, GripVertical, Pencil, Trash2 } from "lucide-react";
import PriorityBadge from "./PriorityBadge";

const TaskCard = ({
  task,
  onEdit = () => {},
  onDelete = () => {},
  dragHandleProps = {},
  isDragging = false,
}) => {
  if (!task) return null;

  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm p-4 transition-all duration-200
      ${
        isDragging
          ? "opacity-50 scale-105 shadow-xl rotate-1 z-50"
          : "hover:shadow-md"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 break-words">
            {task.title}
          </h3>

          {task.description && (
            <p className="text-sm text-gray-500 mt-1 line-clamp-3">
              {task.description}
            </p>
          )}
        </div>

        {/* Drag Handle */}
        <button
          {...dragHandleProps}
          type="button"
          className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-700"
          aria-label="Drag task"
        >
          <GripVertical size={18} />
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        <PriorityBadge priority={task.priority} />

        {task.dueDate && (
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <CalendarDays size={14} />
            <span>{task.dueDate}</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 mt-4">
        <button
          type="button"
          onClick={() => onEdit(task)}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
          aria-label={`Edit ${task.title}`}
        >
          <Pencil size={16} />
        </button>

        <button
          type="button"
          onClick={() => onDelete(task)}
          className="p-2 rounded-lg hover:bg-red-100 text-red-500 transition"
          aria-label={`Delete ${task.title}`}
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
