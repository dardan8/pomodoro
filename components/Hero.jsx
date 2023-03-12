import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_container_left}>
        <h1>Pomodoro</h1>
        <h2>Get your productivity on</h2>
      </div>
      <div>
        <Image />
      </div>
    </div>
  );
};

export default Hero;
