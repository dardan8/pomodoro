"use client";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import React, { useEffect, useState, useRef } from "react";
import styles from "./countdown.module.scss";

const Countdown = () => {
  const WORKING_TIME = 1500;
  const [isPaused, setIsPaused] = useState(true);
  const [seconds, setSeconds] = useState(WORKING_TIME);

  let minutes = Math.floor(seconds / 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let secondsLeft = seconds % 60;

  let percentage = Math.round((seconds / WORKING_TIME) * 100);
  console.log(secondsLeft + "" + seconds);

  if (secondsLeft < 10) {
    secondsLeft = "0" + secondsLeft;
  }

  const secondsRef = useRef(seconds);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsRef.current === 0) {
        return;
      }
      secondsRef.current--;
      setSeconds(secondsRef.current);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.timer_container}>
        <CircularProgressbar
          value={percentage}
          text={minutes + ":" + secondsLeft}
        />
      </div>
      <button
        onClick={() => {
          setIsPaused(false);
          isPausedRef.current = false;
        }}
      >
        start timer
      </button>
      <button
        onClick={() => {
          setIsPaused(true);
          isPausedRef.current = true;
        }}
      >
        Pause
      </button>
    </div>
  );
};

export default Countdown;
