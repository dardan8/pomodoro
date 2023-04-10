import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import HeroImage from "../../../public/images/hero-image.webp";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_container_left}>
        <h1>Get your productivity on</h1>
      </div>
      <div>
        <Image src={HeroImage} width={450} />
      </div>
    </div>
  );
};

export default Hero;
