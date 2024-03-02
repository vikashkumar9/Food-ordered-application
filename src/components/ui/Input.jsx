import React from "react";
import style from "./ui.module.css";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={style.input_field}
    />
  );
};

export default Input;
