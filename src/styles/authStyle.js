import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 400px;
  max-width: 400px;
  position: relative;
  top: 50%;
  transform: translateY(50%);
`;

export const Form = styled.form`
  width: 100%;
  padding: 20px;
  & > h2 {
    text-align: center;
    padding: 0 0 30px 0px;
    font-size: 20px;
    font-weight: 700;
  }
  & > p {
    margin: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    -webkit-text-decoration: underline;
    text-decoration: underline;
    margin-top: 10px;
    cursor: pointer;
  }
  & button {
    transition: 0.1s all ease-in;
    width: 100%;
    margin-top: 20px;
    padding: 8px;
    background: #dfdfdf;
  }
  & button:hover {
    color: #fff;
    background: #1976d2;
  }
`;

// _hover="color:#1976d2"

export const ButtonCustom = styled.button`
  width: 200px;
  height: 200px;
`;
