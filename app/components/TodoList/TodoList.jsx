"use client";
import React from "react";
import styles from "./TodoList.module.scss";
import { useState } from "react";
import { ImBin } from "react-icons/im";
import Checkbox from "../Checkbox/Checkbox";

const TodoList = () => {
  const [todoList, setToDoList] = useState([]);
  const [todoInput, setToDoInput] = useState("");

  const addToDo = (e) => {
    setToDoInput("");
    e.preventDefault();
    setToDoList([
      { id: Math.random() * 100, item: todoInput, completed: false },
      ...todoList,
    ]);
  };

  const deleteToDo = (id) => {
    setToDoList(todoList.filter((todo) => todo.id != id));
  };

  const todoStatus = (id) => {};
  console.log(todoList);

  return (
    <div className={styles.todos_container}>
      <h1 className={styles.heading1}>My to-do list</h1>
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
        {todoList.length > 0 ? (
          <div className={styles.todo_items}>
            {todoList.map((todo, key) => {
              return (
                <div
                  className={
                    todo.completed
                      ? styles.todo_singleitem_completed
                      : styles.todo_singleitem
                  }
                  key={todo.id}
                >
                  <Checkbox
                    id={todo.id}
                    label={todo.item}
                    checked={todo.completed}
                  />
                  <ImBin
                    onClick={() => deleteToDo(todo.id)}
                    className={styles.delete_icon}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.todo_empty}>
            Add a to-do and it will appear here...
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
