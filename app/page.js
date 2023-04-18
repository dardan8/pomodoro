import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Countdown from "./components/Countdown/Countdown";
import Hero from "./components/Hero/Hero";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList/TodoList";

export default function Home() {
  return (
    <div className={styles.mainarea}>
      <Hero />
      <div className={styles.widgets}>
        <div className={styles.pomodoro}>
          <Tabs
            tabs={[
              {
                name: "Work",
                content: <Countdown workingtime={1500} key={1} />,
              },
              {
                name: "Break",
                content: <Countdown workingtime={300} key={2} />,
              },
              {
                name: "Long Break",
                content: <Countdown workingtime={600} key={3} />,
              },
            ]}
          />
        </div>
        <div className={styles.todoarea}>
          <TodoList />
        </div>
        <div className={styles.twowidgets}>
          <div>
            <TodoList />
          </div>
          <div>
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}
