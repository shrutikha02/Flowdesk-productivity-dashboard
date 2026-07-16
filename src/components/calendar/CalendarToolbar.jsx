import { ChevronLeft, ChevronRight } from "lucide-react";

const CalendarToolbar = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
}) => {
  const monthYear = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Month Navigation */}
        <div className="flex items-center gap-4">
          <button
            onClick={onPrevMonth}
            className="rounded-lg border border-slate-200 p-2 hover:bg-slate-100 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <h2 className="text-2xl font-bold">
            {monthYear}
          </h2>

          <button
            onClick={onNextMonth}
            className="rounded-lg border border-slate-200 p-2 hover:bg-slate-100 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* View Buttons */}
        <div className="flex overflow-hidden rounded-xl border border-slate-200">
          <button className="bg-indigo-600 px-5 py-2 text-white">
            Month
          </button>

          <button className="px-5 py-2 hover:bg-slate-100">
            Week
          </button>

          <button className="px-5 py-2 hover:bg-slate-100">
            Day
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarToolbar;