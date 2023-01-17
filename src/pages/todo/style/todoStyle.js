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

export const DetailContainer = styled.div`
  font-family: "bsfont-r";
  margin: 0;
  padding: 20px 20px 0 20px;
  min-height: 200px;
  font-size: 20px;
  & input {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
  & > div:first-child {
    border-bottom: 1px solid #ddd;
    padding-bottom: 5px;
  }
  & > div:nth-child(2) {
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
  }
  & > div > p.date {
    text-align: right;
    font-size: 14px;
  }
`;
