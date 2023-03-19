import React from "react";
import styles from "./TodoList.module.scss";
import { useState } from "react";

const TodoList = () => {
  const [todoList, setToDoList] = useState("");
  const [todoInput, setToDoInpit] = useState("");

  const todos = [
    {
      id: 1,
      content: "Wireframe todo",
    },
    {
      id: 2,
      content: "Social media todo",
    },
    {
      id: 3,
      content: "develop web",
    },
    {
      id: 4,
      content: "develop web",
    },
  ];
  return (
    <div className={styles.todo_widgetarea}>
      <form className={styles.form_todo}>
        <input
          className={styles.todo_input}
          type='text'
          placeholder='What are you working on?'
          onChange={(e) => {
            setToDoList(e.target.value);
          }}
        />
        <button className={styles.todo_button}>Add Task</button>
      </form>
      <div className={styles.todo_items}>
        {todos.map((todo, id) => {
          return (
            <label className={styles.todo_List}>
              <input type='checkbox' id={todo.id} />
              {todo.content}
            </label>
          );
        })}

        {todoList}
      </div>
    </div>
  );
};

export default TodoList;
