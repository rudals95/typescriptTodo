export interface ITodos {
  title: string;
  content: string;
}

export interface ITodoData extends ITodos {
  id: string;
  updatedAt: string;
  createdAt: string;
}

export interface ITodoArr extends Array<ITodoData> {}

export interface ITodoPut {
  // id: string;
  // data: ITodos;
  number: string;
}
