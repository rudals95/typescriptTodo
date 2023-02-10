import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box, Input } from "@chakra-ui/react";

import { success, error, Toast } from "../../utiis/toast";
import { Container, Form } from "../../styles/authStyle";
import { IUserInfo } from "../../types/auth";
import AuthAPI from "../../api/auth";
import { IUserForm } from "../types";

const Join = () => {
  const [value, setValue] = useState<IUserInfo>({
    email: "",
    password: "",
    passwordComfrim: "",
    username: "",
  });
  const navigate = useNavigate();

  const joinEvent: IUserForm = {
    handleChange: (e, type) => {
      setValue((state) => ({
        ...state,
        [type]: e.target.value,
      }));
    },
    handleSubmit: async (e) => {
      e.preventDefault();
      const post = {
        username: value.username,
        email: value.email,
        password: value.password,
      };
      if (value.username === "") return error("이름을입력하세요");
      if (value.email === "") return error("이메일을입력하세요");
      if (value.password === "") return error("비밀번호를입력하세요");
      if (value.password !== value.passwordComfrim) return error("비밀번호가 일치하지않습니다");

      await AuthAPI.signUp(post)
        .then((res) => {
          console.log("결과", res);
          success(res.data.message);
          navigate("/login");
        })
        .catch((err) => {
          console.log("err", err.response);
          // error(err.response.data.details);
        });
    },
  };

  return (
    <Box>
      <Toast />
      <Container>
        <Form onSubmit={joinEvent.handleSubmit}>
          <h2>회원가입</h2>
          <label htmlFor="">
            <span>이름</span>
            <div>
              <Input
                w="100%"
                type="text"
                id="username"
                name="username"
                value={value.username}
                onChange={(e) => {
                  joinEvent.handleChange(e, "username");
                }}
              />
            </div>
          </label>
          <label htmlFor="">
            <span>이메일 주소</span>
            <div>
              <Input
                w="100%"
                type="email"
                id="email"
                name="email"
                value={value.email}
                onChange={(e) => {
                  joinEvent.handleChange(e, "email");
                }}
              />
            </div>
          </label>
          <label id="password-label">
            <span>비밀번호</span>
            <div>
              <Input
                type="password"
                id="password"
                name="password"
                value={value.password}
                onChange={(e) => {
                  joinEvent.handleChange(e, "password");
                }}
              />
            </div>
          </label>
          <label id="password-label">
            <span>비밀번호 확인</span>
            <div>
              <Input
                type="password"
                id="password"
                name="password"
                value={value.passwordComfrim}
                onChange={(e) => {
                  joinEvent.handleChange(e, "passwordComfrim");
                }}
              />
            </div>
          </label>

          <Box display="flex" justifyContent="end">
            <button type="submit">가입</button>
          </Box>
          <p>
            <Link to="/login">로그인하러가기</Link>
          </p>
        </Form>
      </Container>
    </Box>
  );
};

export default Join;
