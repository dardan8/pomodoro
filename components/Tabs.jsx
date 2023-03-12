import React from "react";
import styles from "./Tabs.module.scss";
const Tabs = () => {
  return (
    <div className={styles.tabs_container}>
      <button>work</button>
      <button>break</button>
      <button>long break</button>
    </div>
  );
};

export default Tabs;
