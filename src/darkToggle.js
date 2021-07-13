import React, { useEffect, useState } from "react";
import Switch from "react-switch";

export default function DarkToggle() {
  const [isDark, setDark] = useState(false);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
      setDark(true);
    } else if (localStorage.theme === "dark") {
      document.querySelector("html").classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
      setDark(false);
    } else {
      htmlClasses.add("dark");
      localStorage.theme = "dark";
      setDark(true);
    }
  };
  return (
    <div className="absolute top-0 left-0">
      <div className="flex items-center cursor-pointer" onClick={toggleDark}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mr-2"
          viewBox="0 0 20 20"
          fill={isDark ? "gray" : "orange"}
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
        <Switch
          uncheckedIcon={false}
          checkedIcon={false}
          // onChange={toggleDark}
          checked={isDark}
          offColor="#60d360"
          onColor="#111827"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 ml-2"
          viewBox="0 0 20 20"
          fill={isDark ? "#F472B6" : "gray"}
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
    </div>
  );
}
