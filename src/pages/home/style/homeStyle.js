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

export const ListHead = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #ddd;
  padding: 0 0 10px 0px;
  text-align: center;
  & li > p {
    position: relative;
  }
  & li:nth-child(5) > p::after {
    display: none;
  }
  & li > p::after {
    content: "";
    display: block;
    width: 1px;
    height: 10px;
    background: #afa0a0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }

  & > li:nth-child(1) {
    min-width: 50px;
    width: 5%;
  }
  & > li:nth-child(2) {
    min-width: 50px;
    width: 15%;
  }
  & > li:nth-child(3) {
    min-width: 200px;
    width: 20%;
  }
  & > li:nth-child(4) {
    min-width: 150px;
    width: 30%;
  }
  & > li:nth-child(5) {
    min-width: 150px;
    width: 30%;
  }
`;
export const ListBody = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;

  padding: 10px 0 10px 0px;
  text-align: center;
  align-items: center;

  & > li:nth-child(1) {
    min-width: 50px;
    width: 5%;
  }
  & > li:nth-child(2) {
    min-width: 50px;
    width: 15%;
  }
  & > li:nth-child(3) {
    min-width: 200px;
    width: 20%;
  }
  & > li:nth-child(4) {
    min-width: 150px;
    width: 30%;
  }
  & > li:nth-child(5) {
    min-width: 150px;
    width: 30%;
  }
  & > li>p>img{
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }
`;

export const InputBox = styled.div`
  width: 70%;
  & > label {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  & > label span {
    padding-right: 10px;
    width: 50px;
  }
  & > label > div {
    width: calc(100% - 50px);
  }
`;
