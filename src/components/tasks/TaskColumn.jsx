import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableTaskCard from "./SortableTaskCard";

const TaskColumn = ({
  id,
  title,
  tasks,
  onEdit,
  onDelete,
}) => {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`min-h-[520px] rounded-2xl p-4 transition-colors duration-200
      ${
        isOver
          ? "bg-blue-100 border-2 border-dashed border-blue-400"
          : "bg-slate-100"
      }`}
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-800">
          {title}
        </h2>

        <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold shadow-sm">
          {tasks.length}
        </span>
      </div>

      {/* Tasks */}
      <SortableContext
        items={tasks.map((task) => task.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-4">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <SortableTaskCard
                key={task.id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <div className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 text-sm text-slate-400">
              Drop tasks here
            </div>
          )}
        </div>
      </SortableContext>
    </div>
  );
};

export default TaskColumn;

