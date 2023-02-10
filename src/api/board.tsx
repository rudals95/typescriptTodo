import { IComment, IBoardDeleteData, IBoardPutData } from "../types/board";
import API from "./../utiis/API";

const BoardAPI = {
  commentBoard: (commentData: IComment) => {
    return API.post("/board/comment", commentData);
  },
  getBoard: (url: string, data: any) => {
    return API.get(url, { params: data });
  },
  deleteBoard: ({ seq }: IBoardDeleteData) => {
    return API.post(`/board/remove`, { seq });
  },
  detailBoard: (id: string | undefined) => {
    return API.get(`/board/${id}`);
  },

  updateBoard: (id: string | undefined, { data }: IBoardPutData) => {
    return API.put(`/board/${id}`, data);
  },

  postBoard: (formData: any) => {
    return API.post(`/board/save`, formData, {});
  },
  getBoardImage: (id: string | undefined) => {
    return API.get(`/board/image/${id}`);
  },
};

export default BoardAPI;
