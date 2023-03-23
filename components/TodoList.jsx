import React from "react";
import styles from "./TodoList.module.scss";
import { useState } from "react";
import { ImBin } from "react-icons/im";
import Checkbox from "./Checkbox/Checkbox";

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
      {todoList.length > 0 ? (
        <div className={styles.todo_items}>
          {todoList.map((todo, key) => {
            return (
              <div className={styles.checkbox_wrapper} key={todo.id}>
                <Checkbox id={todo.id} label={todo.item} />
                <ImBin onClick={() => deleteToDo(todo.id)} />
              </div>
            );
          })}
        </div>
      ) : (
        "Add a to-do and it will appear here"
      )}
    </div>
  );
};

export default TodoList;
