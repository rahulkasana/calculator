import { useEffect, useState } from "react";
import Switch from "react-switch";
import "./App.css";

function App() {
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

  const item =
    "flex justify-center items-center select-none rounded-3xl digit dark:digit-dark";
  return (
    <div className="flex h-full w-full flex-col bg-light dark:bg-dark">
      <Switch onChange={toggleDark} checked={isDark} />
      <div className="flex h-full w-full flex-col justify-center items-center">
        <div className="flex flex-col h-4/5 w-4/5 sm:w-3/5 md:w-2/5 lg:w-4/12 shadow rounded-3xl overflow-hidden calculator-container dark:calculator-container-dark">
          <div className="flex flex-col h-1/4 result-container dark:result-container-dark rounded-3xl px-4 m-4">
            <div className="flex flex-row-reverse h-1/2 items-center flex-nowrap overflow-x-auto text-right text-xl">
              23876872578357265376257536*32657235763257623576357253478634876834687346874372563
            </div>
            <div className="flex flex-row-reverse h-1/2 items-center text-4xl">
              result
            </div>
          </div>
          <div className="grid grid-flow-row grid-cols-4 grid-rows-5 gap-4 h-full m-4">
            <div className={item}>AC</div>
            <div className={item}>+/-</div>
            <div className={item}>%</div>
            <div className={item}>/</div>
            <div className={item}>7</div>
            <div className={item}>8</div>
            <div className={item}>9</div>
            <div className={item}>*</div>
            <div className={item}>4</div>
            <div className={item}>5</div>
            <div className={item}>6</div>
            <div className={item}>-</div>

            <div className={item}>1</div>
            <div className={item}>2</div>
            <div className={item}>3</div>
            <div className={item}>+</div>

            <div className=""> </div>
            <div className={item}>0</div>
            <div className={item}>.</div>
            <div className={item}>=</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
