import React from "react";
import styles from "./Tabs.module.scss";
const Tabs = () => {
  return (
    <div className={styles.tabs_container}>
      <button className={styles.tabs_button}>Work</button>
      <button className={styles.tabs_button_inactive}>Break</button>
      <button className={styles.tabs_button_inactive}>Long Break</button>
    </div>
  );
};

export default Tabs;
