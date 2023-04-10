import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button className={styles.buttons_countdown} onClick={props.onClick}>
      {props.title}
      {props.icon}
    </button>
  );
};

export default Button;
