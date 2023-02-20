export interface IList {
  _id: string;
  no: number;
  img_URL: string;
  writer: string;
  title: string;
  createdAt: string;
}

export interface IBoard {
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  img_URL?: string | undefined;
  comment?: [];
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
  img_URL: string;
}

export interface IBoardPutData {
  data: IBoard;
}
export interface IBoardDeleteData {
  seq: string;
}

export interface IKey {
  //검색 키값 타입
  name: string;
  value: string;
}

export interface IQSParams {
  //쿼리키
  paramsValue: any;
  searchValue: any;
  startDate: any;
  endDate: any;
}
