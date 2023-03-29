import "./Todos.css";
import { TodoPropsType } from "./Todos.types";

function Todo({ item, isLastElement }: TodoPropsType) {
  return (
    <div className="todo-item">
      {isLastElement && "laast"}
      {item.id}. {item.title}
    </div>
  );
}

export default Todo;
