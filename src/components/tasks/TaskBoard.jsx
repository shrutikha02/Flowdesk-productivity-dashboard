import TaskColumn from "./TaskColumn";

const TaskBoard = ({ tasks, onEdit, onDelete }) => {
  const todo = tasks.filter((task) => task.status === "todo");

  const inProgress = tasks.filter(
    (task) => task.status === "in-progress"
  );

  const completed = tasks.filter(
    (task) => task.status === "completed"
  );

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <TaskColumn
        id="todo"
        title="To Do"
        tasks={todo}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <TaskColumn
        id="in-progress"
        title="In Progress"
        tasks={inProgress}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <TaskColumn
        id="completed"
        title="Completed"
        tasks={completed}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default TaskBoard;
