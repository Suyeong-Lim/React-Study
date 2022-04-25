import React from "react";
import S from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={S.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
