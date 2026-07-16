import {
  CheckCircle,
  ClipboardList,
  NotebookPen,
  Timer,
} from "lucide-react";

import StatCard from "./StatCard";

const DashboardStats = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Tasks"
        value="128"
        icon={ClipboardList}
      />

      <StatCard
        title="Completed"
        value="85"
        icon={CheckCircle}
        color="bg-green-500"
      />

      <StatCard
        title="Notes"
        value="24"
        icon={NotebookPen}
        color="bg-orange-500"
      />

      <StatCard
        title="Focus Hours"
        value="92%"
        icon={Timer}
        color="bg-purple-500"
      />
    </div>
  );
};

export default DashboardStats;