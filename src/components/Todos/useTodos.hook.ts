import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../config/axios";
import { TodoType } from "./Todos.types";

function useTodos(page: number) {
  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [error, setError] = useState<string>();

  async function getTodos() {
    setIsLoading(true);
    try {
      const todosResponse = await api.get(`/todos?_limit=10&_page=${page}`);
      if (todosResponse.status === 200) {
        setTodos([...todos, ...todosResponse.data]);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTodos();
  }, [page]);

  return { isLoading, todos, error };
}

export default useTodos;
