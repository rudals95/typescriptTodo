export interface ITodos {
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  img_URL?: string;
}
export interface ITodosSeq {
  seq: string;
}

export interface ITodoData extends ITodos {
  _id: string;
  seq: string;
}

export interface ITodoArr extends Array<ITodoData> {}

export interface ITodoPutData {
  data: ITodos;
}

export interface ITodoDeleteData {
  seq: string;
}
