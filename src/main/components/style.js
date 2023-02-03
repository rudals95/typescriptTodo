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
