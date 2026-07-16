import ProductivityChart from "./ProductivityChart";
import TodayTasks from "./TodayTasks";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";

const DashboardOverview = () => {
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProductivityChart />
        </div>

        <TodayTasks />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>

        <QuickActions />
      </div>
    </>
  );
};

export default DashboardOverview;