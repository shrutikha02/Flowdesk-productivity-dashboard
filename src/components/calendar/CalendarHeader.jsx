import { Plus } from "lucide-react";
import Button from "../ui/Button";

const CalendarHeader = ({ onAddEvent }) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Calendar
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your schedule and upcoming events.
        </p>
      </div>

      <Button
        onClick={onAddEvent}
        className="flex items-center gap-2"
      >
        <Plus size={18} />
        New Event
      </Button>
    </div>
  );
};

export default CalendarHeader;