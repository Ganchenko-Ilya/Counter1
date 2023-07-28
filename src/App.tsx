import { useEffect, useState } from "react";
import loadingGif from "./loading.gif";
import s from "./App.module.css";
import { Display } from "./components/Display";
import { Button } from "./components/Button";
import { DisplaySet } from "./components/DisplaySet";
import { useSelector } from "react-redux";
import { RootReducerType, store } from "./components/store";
import { useDispatch } from "react-redux";
import {
  StateType,
  addCounterAC,
  changeCounterAC,
  changeLoadingAC,
  changeMaxValueAC,
  changeMinValueAC,
} from "./components/counterReducer";

export type errorsType =
  | "Incorrect value!"
  | "enter values and press 'set'"
  | "";

function App() {
  const dispatch = useDispatch();
  const state = useSelector<RootReducerType, StateType>(
    (state) => state.counter
  );
  const count = state.count;
  const maxValue = state.maxValue;
  const loading = state.loading;
  const minValue = state.minValue;

  const [maxValueFinal, setMaxValueFinal] = useState(0);
  const [error, setError] = useState<errorsType>(
    "enter values and press 'set'"
  );
  useEffect(() => {
    if (maxValue > minValue) addValue();
    else {
      setError("Incorrect value!");
    }
  }, []);

  const addCount = () => {
    if (count < maxValue) {
      dispatch(addCounterAC(count));
    }
  };
  const deleteCount = () => {
    dispatch(changeCounterAC(minValue));
  };

  const addValue = () => {
    dispatch(changeCounterAC(minValue));

    setMaxValueFinal(maxValue);
    setError("");
  };
  const addError = (valueMin: number, valueMax: number) => {
    dispatch(changeMaxValueAC(+valueMax));
    dispatch(changeMinValueAC(+valueMin));
    
    setMaxValueFinal(0);

    if (+valueMin >= 0 && +valueMax >= 0 && +valueMax - +valueMin > 0) {
      setError("enter values and press 'set'");
    } else {
      setError("Incorrect value!");
    }
  };
  const resultError =
    +maxValue - +minValue <= 0 && +maxValue >= 0 && +minValue > 0 && !!maxValue;
  if (!loading) {
    dispatch(changeLoadingAC());
    return <img src={loadingGif} style={{ backgroundColor: "black" }} />;
  }
  return (
    <div className={s.bodyWrapper}>
      <div className={s.wrapper}>
        <div className={s.displayWrapper}>
          <DisplaySet
            maxValue={maxValue}
            minValue={minValue}
            addError={addError}
            error={resultError}
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
          <Display error={error} maxValueFinal={maxValueFinal} />
        </div>

        <div className={s.buttonWrapper}>
          <Button
            disabled={!(count < maxValueFinal)}
            name="Inc"
            callBack={addCount}
          />
          <Button
            disabled={
              count <= +minValue || error === "enter values and press 'set'"
            }
            name="Reset"
            callBack={deleteCount}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
