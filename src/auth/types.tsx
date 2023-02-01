export interface IUserForm {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface IPostForm {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
