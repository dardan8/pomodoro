"use client";

import styles from "./WeatherWidget.module.scss";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Sun from "../../../public/images/Sun.png";
import { toCelsius } from "@/app/utils/utils";

export default function WeatherWidget() {
  const [weatherdata, setWeatherData] = useState();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const apikey = process.env.NEXT_PUBLIC_WEATHER_KEY;

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }

  useEffect(() => {
    async function fetchWeatherData() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}`
      );
      const data = response.json();

      setWeatherData(data);
    }

    fetchWeatherData();
  }, []);

  return (
    <div className={styles.weathercontainer}>
      <div className={styles.icon}>
        <Image
          src={Sun}
          alt='Sun Icon'
          wdith={50}
          height={50}
          className={styles.sunicon}
        />
      </div>

      {weatherdata ? (
        <h1> No data, please enable your location </h1>
      ) : (
        <div className={styles.weatherdata}>
          <h1 className={styles.city}>
            No data
            {/* {weatherdata.name && weatherdata.name},{" "} */}
            {/* {weatherdata.sys.country && weatherdata.sys.country} */}
            No data
          </h1>
          <h3 className={styles.temp}>
            No data
            {/* {weatherdata.main.temp && toCelsius(weatherdata.main.temp)} °C */}
          </h3>
          <p className={styles.weatherinfo}>
            Something went wrong with fetching the data{" "}
            {/* {weatherdata && weatherdata.weather[0].description} */}
          </p>
        </div>
      )}
    </div>
  );
}
