import SidebarItem from "./SidebarItem";
import { navigation, bottomNavigation } from "../../data/navigation";

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="border-b border-slate-200 p-6">
        <h1 className="text-2xl font-bold text-indigo-600">
           FlowDesk
        </h1>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {navigation.map((item) => (
          <SidebarItem key={item.title} {...item} />
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-slate-200 p-4 space-y-2">
        {bottomNavigation.map((item) => (
          <SidebarItem key={item.title} {...item} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;