import { useState } from "react";
import Todo from "./TodoItem";
import "./Todos.css";
import useTodos from "./useTodos.hook";

function TodosList() {
  const [page, setPage] = useState(1);
  const { isLoading, todos, error } = useTodos(page);

  const showNextPageItems = () => {
    setPage((page) => page + 1);
  };

  return (
    <div className="todos-container">
      <h2>Shopping List:</h2>
      <button onClick={showNextPageItems}>Load more</button>
      <ul className="todos-list">
        {todos?.map((todo) => {
          return <Todo key={todo.id} item={todo} />;
        })}
        {isLoading && <div>Loading...</div>}
      </ul>
    </div>
  );
}

export default TodosList;
