import React from "react";
import { Background, LoadingText } from "../../styles/mainStyle";
import Spinner from "../../assets/spinner2.gif";

const Loading = () => {
  return (
    <Background>
      <img src={Spinner} alt="로딩중" width="10%" />
    </Background>
  );
};

export default Loading;
