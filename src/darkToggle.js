import React, { useEffect, useState } from "react";
import Switch from "react-switch";

export default function DarkToggle() {
  const [isDark, setDark] = useState(false);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!"theme" in localStorage &&
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
    if (localStorage.theme == "dark") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
      setDark(false);
    } else {
      htmlClasses.add("dark");
      localStorage.theme = "dark";
      setDark(true);
    }
  };
  return <Switch onChange={toggleDark} checked={isDark} />;
}
