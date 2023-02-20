export interface IBoardListEvent {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void;
  handleSellectChange: (e: React.ChangeEvent<HTMLSelectElement>, type: string) => void;
  getData: (apiUrl: string, obj: any) => {};
}

export interface IBoardDetailEvent {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void;
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>, type: string) => void;
  getData: (apiUrl: string) => {};
}

export interface IBoardReturn {
  getData?: () => void;
  deleteData: (id: string) => void;
}
