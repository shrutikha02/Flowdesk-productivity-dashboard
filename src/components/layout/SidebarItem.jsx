import { NavLink } from "react-router-dom";

const SidebarItem = ({ title, path, icon: Icon }) => {
  return (
    <NavLink
      to={path}
      end={path === "/"}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
          isActive
            ? "bg-indigo-100 text-indigo-600 font-semibold dark:bg-indigo-500/15 dark:text-indigo-300"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100"
        }`
      }
    >
      <Icon size={20} />
      <span>{title}</span>
    </NavLink>
  );
};

export default SidebarItem;
