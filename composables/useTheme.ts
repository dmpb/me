type ThemeOption = "light" | "dark" | "system";

export const useTheme = () => {
  const theme = useState<ThemeOption>("theme-preference", () => "system");
  const resolvedTheme = useState<"light" | "dark">(
    "theme-resolved",
    () => "dark"
  );
  const initialized = useState("theme-initialized", () => false);

  const applyTheme = (next: ThemeOption) => {
    if (!import.meta.client) {
      theme.value = next;
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const resolved =
      next === "system" ? (media.matches ? "dark" : "light") : next;

    theme.value = next;
    resolvedTheme.value = resolved;
    document.documentElement.setAttribute("data-theme", resolved);
    localStorage.setItem("theme", next);
  };

  const initTheme = () => {
    if (!import.meta.client || initialized.value) {
      return;
    }

    initialized.value = true;

    const stored = localStorage.getItem("theme") as ThemeOption | null;
    applyTheme(stored ?? "system");

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (theme.value === "system") {
        applyTheme("system");
      }
    };

    media.addEventListener("change", onChange);
  };

  return {
    theme,
    resolvedTheme,
    applyTheme,
    initTheme,
  };
};
