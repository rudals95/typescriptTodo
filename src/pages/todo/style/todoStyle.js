import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 20px;
  min-height: 500px;
`;

export const List = styled.div`
  display: flex;
  b
  justify-content: space-between;
  & > a {
    width: 90%;
    display: flex;
  }
  & > a > p {
    padding-right: 10px;
  }
  & > button {
    width: 10%;
  }
`;
