import React from "react";
import style from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={style.footer}>
      <span className={style.item}>Compleleted Todos: {completedTodos} </span>
      <span className={style.item}>Total Todos: {totalTodos} </span>
    </div>
  );
}
