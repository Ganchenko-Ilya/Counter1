import React from "react";

import s from "./Button.module.css";

type ButtonPropsType = {
  name: string;
  callBack: () => void;

  disabled: boolean;
};

export const Button = (props: ButtonPropsType) => {
  const onCLickHandler = () => {
    props.callBack();
  };

  return (
    <button
      disabled={props.disabled}
      onClick={onCLickHandler}
      className={s.button}
    >
      {props.name}
    </button>
  );
};
