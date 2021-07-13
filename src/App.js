import "./App.css";
import DarkToggle from "./darkToggle";
import { useState } from "react";

const ACTIONS = {
  CLEAR: "CLEAR",
  PERCENT: "PERCENT",
  INVERT: "INVERT",
  ADDITION: "+",
  SUBTRACT: "-",
  MULTIPLY: "*",
  DIVIDE: "/",
  RESULT: "RESULT",
};

function App() {
  const [primaryInput, setPrimary] = useState("");
  const [secondaryInput, setSecondary] = useState("");
  const [action, setAction] = useState();
  const [result, setResult] = useState("");

  const performAction = (actions) => () => {
    switch (actions) {
      case ACTIONS.PERCENT: {
        let value = "";
        if (result) {
          value = result / 100;
        } else if (action) {
          value = secondaryInput / 100;
        } else {
          value = primaryInput / 100;
        }
        setResult(`${value}`);
        break;
      }
      case ACTIONS.INVERT: {
        if (action) {
          setSecondary(secondaryInput * -1);
        } else {
          setPrimary(primaryInput * -1);
        }
        break;
      }
      default:
        //ACTION.CLEAR
        setPrimary("");
        setSecondary("");
        setResult("");
        setAction(undefined);
        break;
    }
  };

  const setInput = (inputValue) => () => {
    if (action) {
      if (result && !primaryInput) {
        setPrimary(result);
      }
      setSecondary(secondaryInput + `${inputValue}`);
    } else {
      setPrimary(primaryInput + `${inputValue}`);
    }
    setResult("");
  };

  const calculate = () => {
    if (!action || !secondaryInput) {
      setResult("NaN");
    } else {
      let calculatedResult = "";

      if (result) {
        if (action === ACTIONS.MULTIPLY) {
          calculatedResult = parseFloat(result) * parseFloat(secondaryInput);
        } else if (action === ACTIONS.DIVIDE) {
          calculatedResult = result / secondaryInput;
        } else if (action === ACTIONS.ADDITION) {
          calculatedResult = result + secondaryInput;
        } else if (action === ACTIONS.SUBTRACT) {
          calculatedResult = result - secondaryInput;
        }
      } else {
        if (action === ACTIONS.MULTIPLY) {
          calculatedResult = primaryInput * secondaryInput;
        } else if (action === ACTIONS.DIVIDE) {
          calculatedResult = primaryInput / secondaryInput;
        } else if (action === ACTIONS.ADDITION) {
          calculatedResult =
            parseFloat(primaryInput) + parseFloat(secondaryInput);
        } else if (action === ACTIONS.SUBTRACT) {
          calculatedResult =
            parseFloat(primaryInput) - parseFloat(secondaryInput);
        }
      }
      setResult(Number(calculatedResult.toFixed(4)));
    }
    setPrimary("");
    setSecondary("");
    setAction();
  };

  const renderAction = (actionStr) => {
    return (
      <div className={item} onClick={() => setAction(actionStr)}>
        {actionStr}
      </div>
    );
  };

  const renderDigit = (digitValue) => {
    return (
      <div className={item} onClick={setInput(digitValue)}>
        {digitValue}
      </div>
    );
  };

  console.log("primaryInput ----", primaryInput);
  console.log("secondaryInput ----", secondaryInput);
  console.log("result ----", result);
  console.log("action ----", action);

  const item =
    "flex justify-center items-center select-none rounded-3xl digit dark:digit-dark";
  return (
    <div className="flex h-full w-full flex-col bg-light dark:bg-dark">
      <DarkToggle />
      <div className="flex h-full w-full flex-col justify-center items-center">
        <div className="flex flex-col h-4/5 w-4/5 sm:w-3/5 md:w-2/5 lg:w-4/12 shadow rounded-3xl overflow-hidden calculator-container dark:calculator-container-dark">
          <div className="flex flex-col h-1/4 result-container dark:result-container-dark rounded-3xl px-4 m-4">
            <div className="flex flex-row-reverse h-1/2 items-center flex-nowrap overflow-x-auto text-right text-xl">
              {/*{primaryInput} {action} {secondaryInput}*/}
              {secondaryInput ? secondaryInput : action ? action : primaryInput}
            </div>
            <div className="flex flex-row-reverse h-1/2 items-center text-4xl">
              {result}
            </div>
          </div>
          <div className="grid grid-flow-row grid-cols-4 grid-rows-5 text-3xl gap-4 h-full m-4">
            <div className={item} onClick={performAction(ACTIONS.CLEAR)}>
              AC
            </div>
            <div className={item} onClick={performAction(ACTIONS.INVERT)}>
              +/-
            </div>
            <div className={item} onClick={performAction(ACTIONS.PERCENT)}>
              %
            </div>
            {renderAction(ACTIONS.DIVIDE)}

            {renderDigit(7)}
            {renderDigit(8)}
            {renderDigit(9)}
            {renderAction(ACTIONS.MULTIPLY)}

            {renderDigit(4)}
            {renderDigit(5)}
            {renderDigit(6)}
            {renderAction(ACTIONS.SUBTRACT)}

            {renderDigit(1)}
            {renderDigit(2)}
            {renderDigit(3)}
            {renderAction(ACTIONS.ADDITION)}

            <div className=""> </div>
            {renderDigit(0)}
            {renderDigit(".")}
            <div className={item} onClick={calculate}>
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
