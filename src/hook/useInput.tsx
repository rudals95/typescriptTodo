import { useState, useCallback } from "react";

const useInput = () => {
  const [state, setState] = useState<object>({});
  const handler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, type: string): void => {
      console.log(e.target.value);
      setState((state) => ({ ...state, [type]: e.target.value }));
    },
    [state]
  );
  return [state, handler, setState] as const;
};

export default useInput;
