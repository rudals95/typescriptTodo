import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  & > div.sideBarStyle,
  div.btnClickSideBar {
    background: #27314c;
    height: 100vh;
    position: fixed;
    top: 0;
    transition: all 0.2s;
    z-index: 2;
  }
  & > div.contents {
    width: 100%;
    padding-left: 280px;
    transition: 0.2s all;
  }
  & > div.btnClickContents {
    width: 100%;
    padding-left: 50px;
    transition: 0.2s all;
  }
`;

export const HeaderDiv = styled.div`
  box-shadow: 0 0.15rem 1.75rem 0 rgb(58 59 69 / 15%);
  width: 100%;
  height: 70px;
  background: #fff;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListDiv = styled.div`
  border-bottom: 2px solid #212529;
  border-top: 2px solid #212529;
  overflow-x: auto;
  & > a {
    color: #868e96;
    display: flex;
    font-family: prr;
  }
  & > a:first-child {
    color: #212529;
    font-family: prb;
  }
  & > a:first-child > div {
    border-top: none;
  }
  & > a div {
    align-items: center;

    border-top: 1px solid #b2b2b2;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    min-height: 45px;
    text-align: center;
  }
  & > a div p.ellipsis {
    margin: 0;
    overflow: hidden;
    padding: 0 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ModalDiv = styled.div`
  & > div.filebox label {
    display: inline-block;
    padding: 0.5em 0.75em;
    color: #fff;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;

    cursor: pointer;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: 0.25em;
  }
  & > div.filebox input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

//페이지네이션

export const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li {
    cursor: pointer;
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }
  ul.pagination li.active {
    color: white;
  }
  ul.pagination li.active {
    background-color: #c9d8f0;
    color: #3367b5;
  }
  ul.pagination li:hover {
    border-color: #467bcb;
    color: #467bcb;
  }
`;
