import styles from "./WeatherWidget.module.scss";
import React from "react";

const WeatherWidget = () => {
  return (
    <div className={styles.weathercontainer}>
      <p className={styles.icon}>☀️</p>
      <h1 className={styles.city}>Vienna, Austria</h1>
      <h3 className={styles.temp}>12 °C</h3>
    </div>
  );
};

export default WeatherWidget;
