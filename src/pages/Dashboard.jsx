import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardStats from "../components/dashboard/DashboardStats";
import DashboardOverview from "../components/dashboard/DashboardOverview";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <DashboardStats />

      <DashboardOverview />
    </div>
  );
};

export default Dashboard;