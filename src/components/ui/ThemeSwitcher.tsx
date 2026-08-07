import { useTheme } from "../../theme/ThemeProvider";

export default function ThemeSwitcher() {
  const {
    themeName,
    setTheme,
    availableThemes,
  } = useTheme();

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(availableThemes).map(
        ([key, theme]) => {
          const active = themeName === key;

          return (
            <button
              key={key}
              onClick={() => setTheme(key)}
              className="rounded-full border px-4 py-2 text-sm transition-all duration-300"
              style={{
                background: active
                  ? theme.colors.accent
                  : theme.colors.surface,

                color: active
                  ? theme.colors.background
                  : theme.colors.text,

                borderColor: theme.colors.border,
              }}
            >
              {theme.name}
            </button>
          );
        }
      )}
    </div>
  );
}