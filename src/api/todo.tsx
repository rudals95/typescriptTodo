import { ITodoPut, ITodos } from "../types/todo";
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

  // updateTodo: ({ id, data }: ITodoPut) => {
  //   return API.put(`/todos/${id}`, data);
  // },
  updateTodo: (id: string | undefined, num: string) => {
    return API.put(`/todos/${id}`, num);
  },
};

export default TodoAPI;
