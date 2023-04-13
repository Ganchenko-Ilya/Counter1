import React, { ChangeEvent, useState } from "react";

import s from "./Input.module.css";

type InputProps = {
  callBack: (value: string) => void;
  value: string;
  error: boolean;
};
export const Input = (props: InputProps) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.callBack(e.currentTarget.value);
  };
  const classNameInput =
    s.input +
    " " +
    (+props.value >= 0  ? "" : s.red) +
    " " +
    (props.error ? s.red : "");

  return (
    <input
      value={props.value}
      onChange={onChangeHandler}
      className={classNameInput}
      type="text"
    />
  );
};
