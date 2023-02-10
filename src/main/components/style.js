import styled from "styled-components";

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
    background-color: #5cb85c;
    border-color: #4cae4c;
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
