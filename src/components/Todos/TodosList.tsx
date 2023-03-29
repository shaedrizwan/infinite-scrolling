import Todo from "./TodoItem";
import "./Todos.css";
import useTodos from "./useTodos.hook";

function TodosList() {
  const { isLoading, todos, error } = useTodos();

  return (
    <div className="todos-container">
      <h2>Shopping List:</h2>
      {todos?.map((todo) => {
        return <Todo key={todo.id} item={todo} />;
      })}
    </div>
  );
}

export default TodosList;
