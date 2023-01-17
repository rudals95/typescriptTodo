import { useMediaQuery } from "react-responsive";

export const Media768 = () => {
  const mediaMobile = useMediaQuery({ query: "(max-width:768px)" });
  return mediaMobile;
};
