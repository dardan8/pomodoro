import React from "react";
import styles from "./QuoteWidget.module.scss";
import { BsChatLeftQuoteFill } from "react-icons/bs";
import { ImQuotesLeft } from "react-icons/im";
export const QuoteWidget = () => {
  return (
    <div className={styles.quotecontainer}>
      {/* <BsChatLeftQuoteFill className={styles.quoteicon} /> */}
      <ImQuotesLeft className={styles.quoteicon} />
      <h1 className={styles.quotetext}>
        Just one small positive thought in the morning can change your whole day
      </h1>
      <p className={styles.quoteauthor}>- Author Name</p>
      <p>#QuoteOfTheDay</p>
    </div>
  );
};
