import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="relative flex h-9 w-16 items-center rounded-full bg-gray-200 p-1 transition-colors dark:bg-gray-700"
      aria-label="Toggle theme"
    >
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 dark:bg-gray-900 ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon size={16} className="text-blue-400" />
        ) : (
          <Sun size={16} className="text-yellow-500" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
