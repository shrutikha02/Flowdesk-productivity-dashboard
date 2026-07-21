export const SETTINGS_STORAGE_KEY = "flowdesk-settings";
export const SETTINGS_CHANGE_EVENT = "flowdesk-settings-change";

export const defaultSettings = {
  theme: "system",
  notifications: true,
  language: "English",
  timeFormat: "24 Hours",
};

export const getStoredSettings = () => {
  try {
    const saved = localStorage.getItem(SETTINGS_STORAGE_KEY);
    return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
  } catch {
    return defaultSettings;
  }
};

export const saveSettings = (settings) => {
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  window.dispatchEvent(new CustomEvent(SETTINGS_CHANGE_EVENT, { detail: settings }));
};

export const applyTheme = (theme) => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const useDark = theme === "dark" || (theme === "system" && prefersDark);

  document.documentElement.classList.toggle("dark", useDark);
};
