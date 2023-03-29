import "./Todos.css";
import useTodos from "./useTodos.hook";

function TodosList() {
  const { isLoading, todos, error } = useTodos();

  return (
    <div className="todosContainer">
      <h2>Shopping List:</h2>
    </div>
  );
}

export default TodosList;
