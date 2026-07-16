import {
  LayoutDashboard,
  SquareCheckBig,
  CalendarDays,
  NotebookPen,
  BarChart3,
  User,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Tasks",
    path: "/tasks",
    icon: SquareCheckBig,
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: CalendarDays,
  },
  {
    title: "Notes",
    path: "/notes",
    icon: NotebookPen,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
];

export const bottomNavigation = [
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];