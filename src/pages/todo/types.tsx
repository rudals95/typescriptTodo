export interface ITodoList {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void;
  handleClick: () => void;
}

export interface ITodoDetail {
  getData: () => void;
}
