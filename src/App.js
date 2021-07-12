import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!"theme" in localStorage &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
    } else if (localStorage.theme === "dark") {
      document.querySelector("html").classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme == "dark") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
    } else {
      htmlClasses.add("dark");
      localStorage.theme = "dark";
    }
  };

  const item =
    "flex justify-center items-center select-none shadow bg-white rounded-3xl";
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:bg-black">
      <button
        onClick={toggleDark}
        id="switchTheme"
        className="h-10 w-10 flex justify-center items-center focus:outline-none text-yellow-500"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div className="flex h-full w-full flex-col justify-center items-center">
        <div className="flex flex-col h-4/5 w-full sm:w-4/5 md:w-3/5 lg:w-5/12 bg-blue-200 rounded-3xl overflow-hidden">
          <div className="flex flex-col h-1/4 shadow-inner bg-white rounded-3xl px-4 m-4">
            <div className="flex flex-row-reverse h-1/2 items-center flex-nowrap overflow-x-auto text-right text-base">
              23876872578357265376257536*32657235763257623576357253478634876834687346874372563
            </div>
            <div className="flex flex-row-reverse items-center text-xl">
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
