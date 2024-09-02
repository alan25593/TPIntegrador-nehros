"use client";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <button
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white flex items-center justify-center focus:outline-none"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <FaSun className="text-white" />
        ) : (
          <FaMoon className="text-gray-500" />
        )}
      </button>
    </div>
  );
};

export default DarkModeButton;
