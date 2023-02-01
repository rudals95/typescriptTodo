import {  ITodoDeleteData, ITodoPutData, ITodos } from "../types/todo";
import API from "./../utiis/API";

const TodoAPI = {
  createToDo: (data: ITodos) => {
    return API.post("/todos", data);
  },
  getToDo: () => {
    return API.get(`/todos`);
  },
  deleteTodo: ({ seq }:ITodoDeleteData) => {
    return API.post(`/todos/remove`,{seq});
  },
  detailTodo: (id: string | undefined) => {
    return API.get(`/todos/${id}`);
  },

  updateTodo: (id: string | undefined, { data }: ITodoPutData) => {
    return API.put(`/todos/${id}`, data);
  },

  
postTodo: (formData: any) => {
    return API.post(`/todos/post`, formData, {});
  },
};

export default TodoAPI;
