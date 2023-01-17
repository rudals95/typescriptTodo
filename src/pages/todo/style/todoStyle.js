import styled from "styled-components";

export const Container = styled.div`
  font-family: "bsfont-r";
  margin: 0;
  padding: 20px;
  min-height: 500px;
  & > ul > li {
    border-bottom: 1px solid #bbb;
    padding: 10px;
  }
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
