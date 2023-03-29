import "./Todos.css";
import { TodoPropsType } from "./Todos.types";

function Todo({ item }: TodoPropsType) {
  return (
    <div className="todo-item">
      {item.id}. {item.title}
    </div>
  );
}

export default Todo;
