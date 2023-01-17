import { ITodos } from "../types/todo";
import API from "./../utiis/API";

const TodoAPI = {
  createToDo: (data: ITodos) => {
    return API.post("/todos", data);
  },
  getToDo: () => {
    return API.get(`todos`);
  },
  deleteTodo: (id: string) => {
    return API.delete(`/todos/${id}`);
  },
};

export default TodoAPI;
