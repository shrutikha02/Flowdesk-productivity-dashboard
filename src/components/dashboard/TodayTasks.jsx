import SectionHeader from "./SectionHeader";

const TodayTasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Design Dashboard UI",
      completed: true,
    },
    {
      id: 2,
      title: "Review React Code",
      completed: false,
    },
    {
      id: 3,
      title: "Update Documentation",
      completed: false,
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <SectionHeader
        title="Today's Tasks"
        subtitle="Your schedule for today"
      />

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"
          >
            <input
              type="checkbox"
              checked={task.completed}
              readOnly
              className="h-5 w-5 accent-indigo-600"
            />

            <span
              className={
                task.completed
                  ? "line-through text-slate-400"
                  : "text-slate-700"
              }
            >
              {task.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayTasks;