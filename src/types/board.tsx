export interface IBoard {
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  img_URL?: string;
}
export interface IComment {
  _id: string | undefined;
  writer: string;
  username: string;
  contents: string;
}

export interface IBoardData extends IBoard {
  _id: string;
  seq: string;
}

export interface IBoardArr extends Array<IBoardData> {}
export interface IBoardPutData {
  data: IBoard;
}
export interface IBoardDeleteData {
  seq: string;
}
