import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Bell, Moon, Search, Sun } from "lucide-react";
import {
  applyTheme,
  getStoredSettings,
  saveSettings,
  SETTINGS_CHANGE_EVENT,
} from "../../utils/settings";

const searchableRoutes = [
  { keywords: ["dashboard", "home"], path: "/" },
  { keywords: ["tasks", "task", "todo"], path: "/tasks" },
  { keywords: ["calendar", "events", "event"], path: "/calendar" },
  { keywords: ["notes", "note"], path: "/notes" },
  { keywords: ["analytics", "stats", "chart"], path: "/analytics" },
  { keywords: ["profile", "account"], path: "/profile" },
  { keywords: ["settings", "preferences", "appearance"], path: "/settings" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState(getStoredSettings);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleSettingsChange = (event) => {
      setSettings(event.detail ?? getStoredSettings());
    };

    window.addEventListener(SETTINGS_CHANGE_EVENT, handleSettingsChange);

    return () => {
      window.removeEventListener(SETTINGS_CHANGE_EVENT, handleSettingsChange);
    };
  }, []);

  const isDark = document.documentElement.classList.contains("dark");

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    const nextSettings = { ...settings, theme: nextTheme };

    setSettings(nextSettings);
    saveSettings(nextSettings);
    applyTheme(nextTheme);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return;

    const match = searchableRoutes.find((route) =>
      route.keywords.some(
        (keyword) =>
          keyword.includes(normalizedQuery) || normalizedQuery.includes(keyword)
      )
    );

    if (match) {
      navigate(match.path);
      setQuery("");
      return;
    }

    toast.error("No matching page found");
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
      
      <form className="relative w-80" onSubmit={handleSearch}>
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 outline-none transition focus:border-indigo-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
        />
      </form>

  
      <div className="flex items-center gap-4">
        <button
          className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => toast.success("You're all caught up")}
          type="button"
          aria-label="Show notifications"
        >
          <Bell size={20} />
        </button>

        <button
          className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={toggleTheme}
          type="button"
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-white font-semibold">
            S
          </div>

          <div>
            <p className="font-medium">Khaklary</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
             
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
