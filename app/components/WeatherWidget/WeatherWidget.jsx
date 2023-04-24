"use client";

import styles from "./WeatherWidget.module.scss";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Sun from "../../../public/images/Sun.png";
import { toCelsius } from "@/app/utils/utils";
import axios from "axios";

export default function WeatherWidget() {
  const [weatherdata, setWeatherData] = useState();

  // const [lat, setLat] = useState();
  // const [lng, setLng] = useState();
  const [location, setLocation] = useState([]);

  const apikey = process.env.NEXT_PUBLIC_WEATHER_KEY;

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apikey}`
      );

      setWeatherData(result.data);
    };

    fetchData();
  }, [location]);

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

      {weatherdata == undefined ? (
        <h1> No data, please enable your location </h1>
      ) : (
        <>
          <div className={styles.weatherdata}>
            <h1 className={styles.city}>
              {weatherdata && weatherdata.name},{" "}
              {weatherdata && weatherdata.sys.country}
            </h1>
            <h3 className={styles.temp}>
              {weatherdata && toCelsius(weatherdata.main.temp)} °C
            </h3>
          </div>
          <p className={styles.weatherinfo}>
            {weatherdata && weatherdata.weather[0].description}
          </p>
        </>
      )}
    </div>
  );
}
