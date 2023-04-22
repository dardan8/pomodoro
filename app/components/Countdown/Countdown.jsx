"use client";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import React, { useEffect, useState, useRef } from "react";
import styles from "./countdown.module.scss";

import Button from "../Button/Button";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import TodoList from "../TodoList/TodoList";

const Countdown = ({ workingtime, key }) => {
  // const WORKING_TIME = {workingtime};
  const [isPaused, setIsPaused] = useState(true);
  const [seconds, setSeconds] = useState(workingtime);

  let minutes = Math.floor(seconds / 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let secondsLeft = seconds % 60;

  let percentage = Math.round((seconds / workingtime) * 100);
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
    // <div className={styles.container}>
    <div className={styles.timer_container} key={key}>
      <div className={styles.clockarea}>
        <CircularProgressbar
          value={percentage}
          text={minutes + ":" + secondsLeft}
          styles={{
            root: {},

            path: {
              // Path color
              stroke: `rgba(132, 169, 140, ${percentage / 100})`,
            },
            text: {
              // Text color - chagned
              fill: "#d06e6e",
              // Text size
              fontSize: "17px",
            },
            trail: {
              // Trail color
              stroke: "#f4f4f4",
            },
          }}
        />
      </div>
      <div className={styles.button_container}>
        <Button
          title='Start'
          icon={<FaPlayCircle />}
          onClick={() => {
            setIsPaused(false);
            isPausedRef.current = false;
          }}
        />
        <Button
          title='Pause'
          icon={<FaPauseCircle />}
          onClick={() => {
            setIsPaused(true);
            isPausedRef.current = true;
          }}
        />
      </div>
      {/* </div> */}

      {/* <div className={styles.todos_container}>
        <h1>To-do's</h1>
        <TodoList />
      </div> */}

      <div>
        {/* <div className={styles.todos_container}></div>{" "} */}
        {/* <div className={styles.todos_container}></div> */}
      </div>
    </div>
  );
};

export default Countdown;
