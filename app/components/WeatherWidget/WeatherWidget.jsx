import styles from "./WeatherWidget.module.scss";
import React from "react";
import Image from "next/image";
import Sun from "../../../public/images/Sun.png";
const WeatherWidget = () => {
  return (
    <div className={styles.weathercontainer}>
      <div className={styles.icon}>
        <Image src={Sun} alt='Sun-icon' wdith={40} height={40} />
      </div>
      <div className={styles.weatherdata}>
        <h1 className={styles.city}>Vienna, Austria</h1>
        <h3 className={styles.temp}>12 °C</h3>
      </div>
      <p className={styles.weatherinfo}>Today is cloudy with a bit of rain</p>
    </div>
  );
};

export default WeatherWidget;
