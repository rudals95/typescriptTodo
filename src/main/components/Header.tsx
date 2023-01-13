import React from "react";
import { Box } from "@chakra-ui/react";
import { Title, ButtonBox } from "../../styles/mainStyle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <Box p="10px" display="flex" justifyContent="space-between" alignItems="center" borderBottom="1.5px solid #e3e0e0">
      <Title>ToDo</Title>

      <ButtonBox>
        <button onClick={logOut}>로그아웃</button>
      </ButtonBox>
    </Box>
  );
};

export default Header;
