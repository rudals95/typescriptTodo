import { useMediaQuery } from "react-responsive";

export const Media768 = () => {
  const mediaMobile = useMediaQuery({ query: "(max-width:768px)" });
  return mediaMobile;
};

export const Medi590 = () => {
  const mediaMobile = useMediaQuery({ query: "(max-width:590px)" });
  return mediaMobile;
};
