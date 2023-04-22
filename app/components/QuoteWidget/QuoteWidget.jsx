import React from "react";
import styles from "./QuoteWidget.module.scss";
import { BsChatLeftQuoteFill } from "react-icons/bs";
import { ImQuotesLeft } from "react-icons/im";

async function getData() {
  const res = await fetch("https://zenquotes.io/api/quotes/");
  if (!res.ok) {
    console.log("Error");
  }

  return res.json();
}

export default async function QuoteWidget() {
  const quotes = await getData();
  const randomNumber = Math.floor(Math.random() * 50);

  return (
    <div className={styles.quotecontainer}>
      <p className={styles.hashtag}> #MotivationOfTheDay </p>

      <ImQuotesLeft className={styles.quoteicon} />
      <h1 className={styles.quotetext}>{quotes[randomNumber].q}</h1>
      <p className={styles.quoteauthor}> {quotes[randomNumber].a}</p>
    </div>
  );
}
