import {
  Plus,
  NotebookPen,
  CalendarPlus,
  BarChart3,
} from "lucide-react";

const actions = [
  {
    title: "New Task",
    icon: Plus,
  },
  {
    title: "New Note",
    icon: NotebookPen,
  },
  {
    title: "Schedule",
    icon: CalendarPlus,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
];

const QuickActions = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="flex flex-col items-center justify-center rounded-xl border border-slate-200 p-5 transition hover:border-indigo-500 hover:bg-indigo-50"
            >
              <Icon
                size={24}
                className="mb-3 text-indigo-600"
              />

              <span className="text-sm font-medium">
                {action.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;