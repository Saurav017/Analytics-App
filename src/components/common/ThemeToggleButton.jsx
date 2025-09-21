// src/components/common/ThemeToggleButton.jsx
import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import useTheme from "../../hooks/useTheme";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg transition bg-gray-200 dark:bg-[#1f1f23] cursor-pointer"
    >
      {theme === "dark" ? (
        <SunIcon className="w-5 h-5 text-gray-200" />
      ) : (
        <MoonIcon className="w-5 h-5 text-black" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
