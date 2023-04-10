"use client";
import React, { useState } from "react";
import styles from "./Tabs.module.scss";

const Tabs = ({ tabs = {} }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activateTab = (index) => {
    setActiveTabIndex(index);
    console.log(index);
  };

  return (
    <div className={styles.tabs}>
      {Object.keys(tabs).length === 0 ? (
        <div>No content displayed</div>
      ) : (
        <>
          <div className={styles.labelswrapper}>
            {tabs.map((tab, index) => {
              return (
                <label
                  key={index}
                  className={
                    index === activeTabIndex
                      ? styles.labelsingle_active
                      : styles.labelsingle_inactive
                  }
                  onClick={() => activateTab(index)}
                >
                  {tab.name}
                </label>
              );
            })}
          </div>
          <div className={styles.tabscontent}>
            {tabs[activeTabIndex].content}
          </div>
        </>
      )}
    </div>
  );
};

export default Tabs;
