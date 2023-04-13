import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import s from "./App.module.css";
import { Display } from "./components/Display";
import { Button } from "./components/Button";
import { DisplaySet } from "./components/DisplaySet";

export type errorsType =
  | "Incorrect value!"
  | "enter values and press 'set'"
  | "";

function App() {
  const [count, setCount] = useState<number>(0);
  const [minValue, setMinValue] = useState<string>("");
  const [maxValue, setMaxValue] = useState<string>("");
  const [maxValueFinal, setMaxValueFinal] = useState(0);
  const [error, setError] = useState<errorsType>(
    "enter values and press 'set'"
  );
  useEffect(() => {
    const min = localStorage.getItem("minValue");
    const max = localStorage.getItem("maxValue");
    if (min !== null && max !== null) {
      setMinValue(min);
      setMaxValue(max);
    }
  }, []);

  const addCount = () => {
    if (count < +maxValue) {
      setCount(count + 1);
    }
  };
  const deleteCount = () => {
    setCount(+minValue);
  };

  const addValue = () => {
    setCount(+minValue);
    setMaxValueFinal(+maxValue);
    setError("");
    localStorage.setItem("maxValue", maxValue);
    localStorage.setItem("minValue", minValue);
  };
  const addError = (valueMin: string, valueMax: string) => {
    setMaxValue(valueMax);
    setMinValue(valueMin);
    setCount(0);
    setMaxValueFinal(0);

    if (+valueMin >= 0 && +valueMax >= 0 && +valueMax - +valueMin > 0) {
      setError("enter values and press 'set'");
    } else {
      setError("Incorrect value!");
    }
  };

  return (
    <div className={s.bodyWrapper}>
      <div className={s.wrapper}>
        <div className={s.displayWrapper}>
          <DisplaySet
            maxValue={maxValue}
            minValue={minValue}
            addError={addError}
            error={
              +maxValue - +minValue <= 0 &&
              +maxValue >= 0 &&
              +minValue > 0 &&
              !!maxValue
                ? true
                : false
            }
          />
        </div>

        <div className={s.buttonWrapper}>
          <Button
            disabled={error === "enter values and press 'set'" ? false : true}
            name="Set"
            callBack={addValue}
          />
        </div>
      </div>

      <div className={s.wrapper}>
        <div className={s.displayWrapper}>
          <Display error={error} maxValueFinal={maxValueFinal} count={count} />
        </div>

        <div className={s.buttonWrapper}>
          <Button
            disabled={!(count < maxValueFinal)}
            name="Inc"
            callBack={addCount}
          />
          <Button disabled={!count} name="Reset" callBack={deleteCount} />
        </div>
      </div>
    </div>
  );
}

export default App;
