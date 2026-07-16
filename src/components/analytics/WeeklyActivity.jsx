import {
  CheckCircle2,
  CalendarDays,
  ClipboardList,
  StickyNote,
} from "lucide-react";

const WeeklyActivity = ({
  totalTasks,
  completedTasks,
  totalEvents,
  totalNotes,
}) => {
  const completionRate =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">
        Weekly Summary
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">

        <div className="flex items-center gap-3">
          <ClipboardList className="text-blue-500" />
          <div>
            <p className="text-sm text-slate-500">
              Total Tasks
            </p>
            <p className="text-lg font-bold">
              {totalTasks}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-green-500" />
          <div>
            <p className="text-sm text-slate-500">
              Completion Rate
            </p>
            <p className="text-lg font-bold">
              {completionRate}%
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CalendarDays className="text-orange-500" />
          <div>
            <p className="text-sm text-slate-500">
              Upcoming Events
            </p>
            <p className="text-lg font-bold">
              {totalEvents}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <StickyNote className="text-purple-500" />
          <div>
            <p className="text-sm text-slate-500">
              Notes
            </p>
            <p className="text-lg font-bold">
              {totalNotes}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WeeklyActivity;