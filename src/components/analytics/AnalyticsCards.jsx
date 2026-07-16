import {
  CheckCircle2,
  CalendarDays,
  ClipboardList,
  StickyNote,
} from "lucide-react";

import AnalyticsCard from "./AnalyticsCard";

const AnalyticsCards = ({
  totalTasks,
  completedTasks,
  totalEvents,
  totalNotes,
}) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <AnalyticsCard
        title="Total Tasks"
        value={totalTasks}
        icon={<ClipboardList size={28} />}
        color="bg-blue-500"
      />

      <AnalyticsCard
        title="Completed"
        value={completedTasks}
        icon={<CheckCircle2 size={28} />}
        color="bg-green-500"
      />

      <AnalyticsCard
        title="Events"
        value={totalEvents}
        icon={<CalendarDays size={28} />}
        color="bg-orange-500"
      />

      <AnalyticsCard
        title="Notes"
        value={totalNotes}
        icon={<StickyNote size={28} />}
        color="bg-purple-500"
      />

    </div>
  );
};

export default AnalyticsCards;