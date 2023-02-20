import { IComment, ITodos } from "../../types/todo";

export interface ITodoList {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void;
  handleClick: () => void;
}

export interface ITodoReturn {
  getData: () => void;
  deleteData: (id: string) => void;
}

export interface ITodoDetail {
  getDetail: (id: string | undefined) => void;
  updateData: (id: string | undefined, data: ITodos) => void;
  commentSave: (commentData: IComment) => void;
  handleImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement> | any, type: string) => void;
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>, type: string) => void;
}
