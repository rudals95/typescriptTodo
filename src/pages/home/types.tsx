export interface IBoardEvent {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, type: string) => void;
  handleSellectChange: (e: React.ChangeEvent<HTMLSelectElement>, type: string) => void;
}

export interface IBoardListGet {
  getData: (apiUrl: string, obj: any) => {};
}
export interface IBoardReturn {
  getData?: () => void;
  deleteData: (id: string) => void;
}
