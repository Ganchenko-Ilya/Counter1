import React from "react";
import s from "./Display.module.css";
import { errorsType } from "../App";
import { useSelector } from "react-redux";
import { RootReducerType } from "./store";
type DisplayPropsType = {
  
  maxValueFinal: number;
  error: errorsType;
};

export const Display = (props: DisplayPropsType) => {

  const count = useSelector<RootReducerType,number>(state => state.counter.count)
  return (
    <div className={s.displayWrapper}>
      {props.error ? (
        <p
          className={
            props.error === "Incorrect value!" ? s.error : s.errorNormal
          }
        >
          {props.error}
        </p>
      ) : (
        <p
          className={
            count < props.maxValueFinal
              ? s.normal
              : s.red + " " + s.normal
          }
        >
          {count}
        </p>
      )}
    </div>
  );
};
