export interface IUserForm {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
