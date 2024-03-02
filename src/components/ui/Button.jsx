import React from "react";
import styles from "./ui.module.css";

const Button = ({ onClick, type = "button", className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
