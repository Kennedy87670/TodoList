import React, { useState } from "react";
// import styles from "./form.module.css";
import style from "../form/form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={style.todoform} onSubmit={handleSubmit}>
      <div className={style.inputContainer}>
        <input
          className={style.modernInput}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
          value={todo.name}
          type="text"
          placeholder="Enter Todo Item...."
        ></input>
        <button className={style.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
