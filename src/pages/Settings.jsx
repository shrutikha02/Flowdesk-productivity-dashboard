import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { applyTheme, getStoredSettings, saveSettings } from "../utils/settings";

const Settings = () => {
  const [settings, setSettings] = useState(getStoredSettings);

  useEffect(() => {
    saveSettings(settings);
    applyTheme(settings.theme);
  }, [settings]);

  useEffect(() => {
    if (settings.theme !== "system") return undefined;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => applyTheme("system");

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [settings.theme]);

  const updateSetting = (key, value) => {
    setSettings((current) => ({
      ...current,
      [key]: value,
    }));
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-950 dark:text-white">
          Settings
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Customize your FlowDesk experience.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900 dark:text-slate-100 dark:shadow-none dark:ring-1 dark:ring-slate-800">
        <h2 className="mb-5 text-xl font-semibold">Appearance</h2>

        <div className="space-y-4">
          {["light", "dark", "system"].map((theme) => (
            <label
              key={theme}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                type="radio"
                name="theme"
                checked={settings.theme === theme}
                onChange={() => updateSetting("theme", theme)}
              />
              <span>
                {theme === "system" ? "System Default" : theme[0].toUpperCase() + theme.slice(1)}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900 dark:text-slate-100 dark:shadow-none dark:ring-1 dark:ring-slate-800">
        <h2 className="mb-5 text-xl font-semibold">Notifications</h2>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={(event) =>
              updateSetting("notifications", event.target.checked)
            }
          />
          Enable Notifications
        </label>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900 dark:text-slate-100 dark:shadow-none dark:ring-1 dark:ring-slate-800">
        <h2 className="mb-5 text-xl font-semibold">Preferences</h2>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block">Language</label>

            <select
              className="w-full rounded-lg border bg-white p-3 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              value={settings.language}
              onChange={(event) => updateSetting("language", event.target.value)}
            >
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block">Time Format</label>

            <select
              className="w-full rounded-lg border bg-white p-3 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              value={settings.timeFormat}
              onChange={(event) =>
                updateSetting("timeFormat", event.target.value)
              }
            >
              <option>24 Hours</option>
              <option>12 Hours</option>
            </select>
          </div>

          <div className="flex justify-end md:col-span-2">
            <button
              onClick={() => toast.success("Settings saved")}
              className="rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
