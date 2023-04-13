import React from "react";
import s from "./Display.module.css";
import { errorsType } from "../App";
type DisplayPropsType = {
  count: number;
  maxValueFinal: number;
  error: errorsType;
};

export const Display = (props: DisplayPropsType) => {
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
            props.count < props.maxValueFinal
              ? s.normal
              : s.red + " " + s.normal
          }
        >
          {props.count}
        </p>
      )}
    </div>
  );
};
