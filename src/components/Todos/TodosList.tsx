import { useCallback, useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver.hook";
import Todo from "./TodoItem";
import "./Todos.css";
import useTodos from "./useTodos.hook";

function TodosList() {
  const [page, setPage] = useState(1);
  const { isLoading, todos, error } = useTodos(page);
  const { isIntersecting, lastElementRef } = useIntersectionObserver({
    loading: isLoading,
  });

  const showNextPageItems = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    if (isIntersecting) {
      showNextPageItems();
    }
  }, [isIntersecting]);

  return (
    <div className="todos-container">
      <h2>Shopping List:</h2>
      <ul className="todos-list">
        {todos?.map((todo, index) => {
          const isLastElement = todos.length === index + 1;
          return (
            <li ref={isLastElement ? lastElementRef : undefined}>
              <Todo key={todo.id} item={todo} isLastElement={false} />
            </li>
          );
        })}
      </ul>
      {isLoading && <div>Loading...</div>}
    </div>
  );
}

export default TodosList;
