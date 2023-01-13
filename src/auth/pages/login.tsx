import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Input } from "@chakra-ui/react";
import { Toast, success, error } from "../../utiis/toast";

import { Container, Form } from "../../styles/authStyle";
import { IUserInfo } from "../../types/auth";
import AuthAPI from "../../api/auth";
import { IUserForm } from "../types";

const Login = () => {
  const navigate = useNavigate();
  const SignUp = () => {
    navigate("/join");
  };
  const [value, setValue] = useState<IUserInfo>({
    email: "",
    password: "",
  });

  const loginEvent: IUserForm = {
    handleChange: (e, type) => {
      setValue((state) => ({
        ...state,
        [type]: e.target.value,
      }));
    },
    handleSubmit: async (e) => {
      e.preventDefault();
      if (value.email === "") return error("이메일을 입력하세요");
      if (value.password === "") return error("비밀번호를 입력하세요");

      await AuthAPI.login(value)
        .then((res): void => {
          console.log(res.data);
          localStorage.setItem("user", res.data.token);
          success(res.data.message);
          navigate("/todolist");
        })
        .catch((err): void => {
          console.log(err.response.data);
          // error(err.response.data.details);
        });
    },
  };

  return (
    <Box>
      <Toast />
      <Container>
        <Form onSubmit={loginEvent.handleSubmit}>
          <h2>로그인</h2>
          <label htmlFor="">
            <span>이메일 주소</span>
            <div>
              <Input w="100%" type="email" id="email" name="email" value={value.email} onChange={(e) => loginEvent.handleChange(e, "email")} />
            </div>
          </label>
          <label id="password-label">
            <span>비밀번호</span>
            <div>
              <Input type="password" id="password" name="password" value={value.password} onChange={(e) => loginEvent.handleChange(e, "password")} />
            </div>
          </label>
          <Box display="flex" justifyContent="end">
            <button type="submit">로그인</button>
          </Box>
          <p onClick={SignUp}>회원가입</p>
        </Form>
      </Container>
    </Box>
  );
};

export default Login;
