export interface ITodos {
  title: string;
  content: string;
  createdAt?: string;
}

export interface ITodoData extends ITodos {
  id: string;
  updatedAt: string;
}

export interface ITodoArr extends Array<ITodoData> {}

export interface ITodoPutData {
  data: ITodos;
}
