export interface ITodos {
  title: string;
  content: string;
}

export interface ITodoData extends ITodos {
  id: string;
  updatedAt: string;
  createdAt: string;
}
