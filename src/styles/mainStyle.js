import styled from "styled-components";

export const Title = styled.h5`
  margin: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
  font-weight: bold;
`;

export const ButtonBox = styled.div`
  & > Button {
    border: 1px solid #e1e1e1;
    border-radius: 3px;
    padding: 10px;
    background: #f5efef;
    transition: 0.2s all ease-in-out;
  }
  & > Button:hover {
    color: #fff;
    background: #1976d2;
  }
`;
