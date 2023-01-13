import { useState, useCallback } from "react";

const useInput = () => {
  const [value, setValue] = useState<object>({});
  const handler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
      console.log(e.target.value);
      setValue((state: object) => ({ ...state, type: e.target.value }));
    },
    [value]
  );
  return [value, handler, setValue];
};

export default useInput;
