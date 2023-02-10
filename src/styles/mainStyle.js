import styled from "styled-components";

export const Title = styled.h5`
  font-family: "bsfont-l";
  margin: 0;

  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
  font-weight: bold;
`;

export const ButtonBox = styled.div`
  & > Button {
    border: 1px solid #e1e1e1;
    border-radius: 3px;
    padding: 5px 8px;
    background: #f5efef;
    transition: 0.2s all ease-in-out;
  }
  & > Button:hover {
    color: #fff;
    background: #1976d2;
  }
`;
export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font: 1rem "Noto Sans KR";
  text-align: center;
`;
