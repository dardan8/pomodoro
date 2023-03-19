import React from "react";
import styles from "./TodoList.module.scss";
import { useState } from "react";

const TodoList = () => {
  const [todoList, setToDoList] = useState([]);
  const [todoInput, setToDoInput] = useState("");

  const addToDo = (e) => {
    setToDoInput("");

    e.preventDefault();
    setToDoList([{ id: 4, item: todoInput, completed: false }, ...todoList]);
  };

  return (
    <div className={styles.todo_widgetarea}>
      <form className={styles.form_todo}>
        <input
          className={styles.todo_input}
          type='text'
          value={todoInput}
          placeholder='What are you working on?'
          onChange={(e) => {
            setToDoInput(e.target.value);
          }}
        />
        <button className={styles.todo_button} onClick={addToDo}>
          Add Task
        </button>
      </form>

      <div className={styles.todo_items}>
        {todoList.map((todo, id) => {
          return (
            <div className={styles.checkbox_wrapper}>
              <label>
                <input type='checkbox' id={todo.id} />
                {todo.item}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
