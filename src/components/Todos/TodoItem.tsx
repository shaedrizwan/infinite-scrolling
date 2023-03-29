import "./Todos.css";
import { TodoType } from "./Todos.types";

function Todo({ item }: { item: TodoType }) {
  return (
    <div className="todo-item">
      {item.id}. {item.title}
    </div>
  );
}

export default Todo;
