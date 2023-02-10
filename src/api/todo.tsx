import { IComment, ITodoDeleteData, ITodoPutData, ITodos } from "../types/todo";
import API from "./../utiis/API";

const TodoAPI = {
  createToDo: (data: ITodos) => {
    return API.post("/todos/test", data);
  },
  commentTodo: (commentData: IComment) => {
    return API.post("/todos/comment", commentData);
  },
  getToDo: () => {
    return API.get(`/todos`);
  },
  deleteTodo: ({ seq }: ITodoDeleteData) => {
    return API.post(`/todos/remove`, { seq });
  },
  detailTodo: (id: string | undefined) => {
    return API.get(`/todos/${id}`);
  },

  updateTodo: (id: string | undefined, { data }: ITodoPutData) => {
    return API.put(`/todos/${id}`, data);
  },

  postTodo: (formData: any) => {
    return API.post(`/todos/image`, formData, {});
  },
  getTodoImage: (id: string | undefined) => {
    return API.get(`/todos/image/${id}`);
  },
};

export default TodoAPI;
