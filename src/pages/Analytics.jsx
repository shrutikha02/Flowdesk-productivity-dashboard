import AnalyticsHeader from "../components/analytics/AnalyticsHeader";
import AnalyticsCards from "../components/analytics/AnalyticsCards";
import ProductivityChart from "../components/analytics/ProductivityChart";
import { productivityData } from "../data/analytics";
import WeeklyActivity from "../components/analytics/WeeklyActivity";
const Analytics = () => {
  const tasks =
    JSON.parse(localStorage.getItem("flowdesk-tasks")) || [];

  const events =
    JSON.parse(localStorage.getItem("flowdesk-events")) || [];

  const notes =
    JSON.parse(localStorage.getItem("flowdesk-notes")) || [];

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  return (
    <div className="space-y-8">

      <AnalyticsHeader />

      <AnalyticsCards
        totalTasks={tasks.length}
        completedTasks={completedTasks}
        totalEvents={events.length}
        totalNotes={notes.length}
      />
      <ProductivityChart
      data={productivityData}
      />
      <WeeklyActivity
  totalTasks={tasks.length}
  completedTasks={completedTasks}
  totalEvents={events.length}
  totalNotes={notes.length}
/>

    </div>
  );
};

export default Analytics;