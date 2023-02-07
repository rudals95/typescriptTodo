import styled from "styled-components";

export const Container = styled.div`
  font-family: "bsfont-r";
  margin: 0;
  min-height: 450px;
  transition: 0.1s all ease-in;
  & > div.flex_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  & > div.flex_container > div.flex_item,
  div.flex_container > div.mobile_item {
    border: 1px solid #ddd;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 20px;
  }
`;
export const ContainerRight = styled.div`
  font-family: "";
  margin: 0;
  padding: 20px;
  min-height: 450px;
  text-align: center;
  & > div {
    border: 1px solid #ddd;
    padding: 10px 0px;
    width: 80px;
    margin: 0 auto;
    margin-bottom: 10px;
  }
`;
