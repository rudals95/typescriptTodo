import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Title, ButtonBox } from "../../styles/mainStyle";
import { useNavigate, useParams } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import AuthAPI from "./../../api/auth";

const Header = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const Test = async () => {
    await AuthAPI.assign("장경민").then((res) => {
      console.log(res.data, "어드민확인");
    });
  };
  useEffect(() => {
    Test();
  }, []);

  return (
    <Box p="10px" display="flex" justifyContent="space-between" alignItems="center" borderBottom="1.5px solid #e3e0e0">
      <IoIosArrowBack
        size={"20px"}
        onClick={() => {
          navigate(-1);
        }}
      />
      <Title>ToDo</Title>
      <ButtonBox>
        <FiLogOut size="20px" onClick={logOut} />
      </ButtonBox>
    </Box>
  );
};

export default Header;
