import { ITodoPutData, ITodos } from "../types/todo";
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
  detailTodo: (id: string | undefined) => {
    return API.get(`/todos/${id}`);
  },

  updateTodo: (id: string | undefined, { data }: ITodoPutData) => {
    return API.put(`/todos/${id}`, data);
  },
};

export default TodoAPI;
