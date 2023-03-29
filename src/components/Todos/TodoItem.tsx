import "./Todos.css";
import { TodoType } from "./Todos.types";

function Todo({ item }: { item: TodoType }) {
  return <li className="todo-item">{item.title}</li>;
}

export default Todo;
