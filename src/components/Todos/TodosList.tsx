import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver.hook";
import Todo from "./TodoItem";
import "./Todos.css";
import useTodos from "./useTodos.hook";

function TodosList() {
  const [page, setPage] = useState(1);
  const { isLoading, todos, error } = useTodos(page);
  const parentRef = useRef<HTMLUListElement>(null);
  const targetRef = useRef<HTMLLIElement>(null);

  const { isIntersecting } = useIntersectionObserver({ parentRef, targetRef });

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
      <ul className="todos-list" ref={parentRef}>
        {todos?.map((todo, index) => {
          return (
            <li ref={todos.length - 1 === index ? targetRef : undefined}>
              <Todo key={todo.id} item={todo} />
            </li>
          );
        })}
      </ul>
      {isLoading && <div>Loading...</div>}
    </div>
  );
}

export default TodosList;
