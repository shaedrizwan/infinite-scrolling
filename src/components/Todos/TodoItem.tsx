import { Checked, Unchecked } from "../../utils/icons";
import "./Todos.css";
import { TodoPropsType } from "./Todos.types";

function Todo({ item }: TodoPropsType) {
  return (
    <div className="todo-item">
      {item.completed ? <Checked /> : <Unchecked />}
      <span>
        {item.id}. {item.title}
      </span>
    </div>
  );
}

export default Todo;
