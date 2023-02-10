import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Title, ButtonBox } from "../../styles/mainStyle";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import AuthAPI from "./../../api/auth";
import { useDispatch } from "react-redux";
import { save } from "../../store/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user: any = localStorage.getItem("user");
  const json: any = JSON.parse(user);
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  const dispatch = useDispatch();
  const userStorage = async () => {
    dispatch(
      save({
        username: json.username,
        admin: json.admin,
        email: json.email,
        joindate: json.joindate,
        _id: json._id,
      })
    );
    const userName = new Promise<void>((resolve, reject) => {
      resolve(json.username);
    });
    return userName;
  };
  const isAdmin = async (userName: string) => {
    await AuthAPI.assign(userName).then((res) => {
      console.log(res.data);
    });
  };
  useEffect(() => {
    userStorage();
    isAdmin(json.username);
  }, []);

  return (
    <Box p="10px" display="flex" justifyContent="space-between" alignItems="center" borderBottom="1.5px solid #e3e0e0">
      <IoIosArrowBack
        size={"20px"}
        onClick={() => {
          navigate(-1);
        }}
      />
      <Title>ToDo App</Title>
      <ButtonBox>
        <FiLogOut size="20px" onClick={logOut} />
      </ButtonBox>
    </Box>
  );
};

export default Header;
