import { Checked, Unchecked } from "../../utils/icons";
import "./Todos.css";
import { TodoPropsType } from "./Todos.types";

function Todo({ item }: TodoPropsType) {
  return (
    <div className="todo-item">
      <div className="todo-icon-container">
        {item.completed ? <Checked /> : <Unchecked />}
      </div>
      <span>
        {item.id}. {item.title}
      </span>
    </div>
  );
}

export default Todo;
