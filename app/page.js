import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Countdown from "/components/Countdown";
import Hero from "../components/Hero";
import Tabs from "../components/Tabs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Tabs />
      <Countdown />
    </>
  );
}
