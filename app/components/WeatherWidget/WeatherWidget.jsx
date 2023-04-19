import styles from "./WeatherWidget.module.scss";
import React from "react";

const WeatherWidget = () => {
  return (
    <div className={styles.weathercontainer}>
      <p>☀️</p>
      <h1 className={styles.city}>Vienna</h1>
      <h3 className={styles.temp}>12 oC</h3>
    </div>
  );
};

export default WeatherWidget;
