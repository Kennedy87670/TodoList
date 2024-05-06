import React from "react";
import style from "./todoitem.module.css";

export default function TodoItems({ item, todos, setTodos }) {
  function handleDelete() {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const className = item.done ? style.completed : "";
  return (
    <div className={style.item}>
      <div className={style.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={style.deleteButton}
          >
            X
          </button>
        </span>
      </div>

      <hr className={style.line} />
    </div>
  );
}

// import React from "react";
// import style from "./todoitem.module.css";

// export default function TodoItems({ item, todos, setTodos }) {
//   function handleDelete() {
//     setTodos(todos.filter((todo) => todo !== item));
//   }

//   function handleClick(item) {
//     setTodos(
//       todos.map((todo) =>
//         todo.name === item ? { ...todo, done: !todo.done } : todo
//       )
//     );
//   }

//   const className = item.done ? style.completed : "";

//   return (
//     <div className={style.item}>
//       <div className={style.itemName}>
//         <span className={className} onClick={handleClick}>
//           {item} {/* Render the name property of the item */}
//         </span>
//         <span>
//           <button onClick={handleDelete} className={style.deleteButton}>
//             X
//           </button>
//         </span>
//       </div>
//       <hr className={style.line} />
//     </div>
//   );
// }
