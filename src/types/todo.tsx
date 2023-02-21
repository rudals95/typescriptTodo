//수정인터페이스
export interface ITodos {
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  img_URL?: string | null;
}
//댓글 인터페이스
export interface IComment {
  _id: string | undefined;
  writer: string;
  username: string;
  contents: string;
}
export interface ITodosSeq {
  seq: string;
}
export interface ITodoData extends ITodos {
  _id: string;
  seq: string;
}
export interface ITodoArr extends Array<ITodoData> {}

export interface ITodoDeleteData {
  seq: string;
}
