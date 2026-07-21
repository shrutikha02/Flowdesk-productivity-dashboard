import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/sidebar";
import Navbar from "../components/layout/Navbar";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6 dark:bg-slate-950">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
