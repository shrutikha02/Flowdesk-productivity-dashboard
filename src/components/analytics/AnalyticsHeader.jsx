import { CalendarDays } from "lucide-react";

const AnalyticsHeader = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Analytics
        </h1>

        <p className="mt-2 text-slate-500">
          Track your productivity and performance.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
        <CalendarDays
          size={18}
          className="text-indigo-600"
        />

        <span className="font-medium">
          This Week
        </span>
      </div>
    </div>
  );
};

export default AnalyticsHeader;