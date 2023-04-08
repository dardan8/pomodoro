import React from "react";
import { useState } from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ id, label, checked, ...props }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <div className={styles.checkbox_wrapper}>
      <label className={isChecked ? styles.done_task : ""}>
        <input
          id={id}
          type='checkbox'
          checked={isChecked}
          onChange={() => {
            setIsChecked((prev) => !prev);
          }}
          {...props}
        />
        {label}
      </label>
    </div>
  );
};
export default Checkbox;
