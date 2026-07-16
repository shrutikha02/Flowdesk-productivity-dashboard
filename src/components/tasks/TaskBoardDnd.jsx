import { useMemo, useState } from "react";
import {
  DndContext,
  closestCenter,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import TaskBoard from "./TaskBoard";
import TaskCard from "./TaskCard";
import useTasks from "../../hooks/useTasks";

const TaskBoardDnd = ({ tasks, onEdit, onDelete }) => {
  const { moveTask } = useTasks();

  const [activeTask, setActiveTask] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const tasksMap = useMemo(() => {
    return Object.fromEntries(tasks.map((task) => [task.id, task]));
  }, [tasks]);

  const handleDragStart = ({ active }) => {
    setActiveTask(tasksMap[active.id]);
  };

  const handleDragEnd = ({ active, over }) => {
    setActiveTask(null);

    if (!over) return;

    if (active.id === over.id) return;

    const overTask = tasksMap[over.id];
    const newStatus = overTask?.status ?? over.id;
    const statuses = ["todo", "in-progress", "completed"];

    if (!statuses.includes(newStatus)) return;

    moveTask(active.id, newStatus, overTask?.id);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveTask(null)}
    >
      <TaskBoard
        tasks={tasks}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <DragOverlay>
        {activeTask ? (
          <div className="rotate-2 opacity-90">
            <TaskCard
              task={activeTask}
              onEdit={() => {}}
              onDelete={() => {}}
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default TaskBoardDnd;
