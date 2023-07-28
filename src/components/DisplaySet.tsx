import React, { useState } from "react";
import s from "./DisplaySet.module.css";
import { Input } from "./Input";

type DisplaySetProps = {
  maxValue: number;
  minValue: number;
  addError: (valueMin: number, valueMax: number) => void;
  error: boolean;
};
export const DisplaySet = (props: DisplaySetProps) => {
  const callBackHandlerMin = (value: number) => {
    props.addError(value, props.maxValue);
  };
  const callBackHandlerMax = (value: number) => {
    props.addError(props.minValue, value);
  };

  return (
    <div className={s.displaySetWrapper}>
      <div className={s.valueWrapper}>
        <p>Max value:</p>
        <Input
          error={props.error}
          callBack={callBackHandlerMax}
          value={props.maxValue}
        />
      </div>
      <div className={s.valueWrapper}>
        <p>Start value:</p>
        <Input
          error={props.error}
          callBack={callBackHandlerMin}
          value={props.minValue}
        />
      </div>
    </div>
  );
};
