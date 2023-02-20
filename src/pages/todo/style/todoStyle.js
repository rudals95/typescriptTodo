import styled from "styled-components";

export const Container = styled.div`
  font-family: "bsfont-r";
  margin: 0;
  padding: 20px;
  min-height: 450px;
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
    width: 88%;
    display: flex;
  }
  & > a > p {
    padding-right: 10px;
    width:100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & > button {
    width: 12%;
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
  & > div > p {
    min-width: 35px;
  }
  & > div > input {
    min-width: 50px;
    width: 100%;
  }
  & > div:first-child {
    border-bottom: 1px solid #ddd;
    padding-bottom: 5px;
    display: flex;
    align-items: center;
  }
  & > div:nth-child(2) {
    align-items: baseline;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
    display: flex;
  }
  & > div > p.date {
    text-align: right;
    font-size: 14px;
  }
  & > .img_container > div {
    display: felx;
  }
  & > .img_container > div > svg {
    position: relative;
    left: -30px;
    min-width: 30px;
  }
`;
