import { useEffect, useState } from "react";
import { Box, Button, Menu, MenuButton, MenuList, MenuGroup, MenuItem } from "@chakra-ui/react";
import { Title, ButtonBox } from "../../styles/mainStyle";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import AuthAPI from "./../../api/auth";
import { useDispatch } from "react-redux";
import { save } from "../../store/userSlice";
import { HeaderDiv } from "./style";
import { Media768 } from "../../utiis/Media";

type Props = {
  showSideBar: () => void;
  show: boolean;
};

const Header: React.FC<Props> = ({ showSideBar, show }) => {
  const navigate = useNavigate();
  const [profileName, setProfileName] = useState("test");
  const user: any | null = localStorage.getItem("user");
  const json: any = JSON.parse(user);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const dispatch = useDispatch();

  const userStorage = async () => {
    if (json !== null) {
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
    }
  };
  const isAdmin = async (userName: string) => {
    await AuthAPI.assign(userName).then((res) => {
      console.log(res.data);
    });
  };
  useEffect(() => {
    userStorage();
    if (json !== null) {
      isAdmin(json.username);
    } else logOut();
  }, []);

  return (
    <>
      {Media768() ? (
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
      ) : (
        <HeaderDiv>
          <Box>
            <Button onClick={showSideBar} background={!show ? "#a9a9d8" : "#ddd"} />
          </Box>

          <Menu>
            <MenuButton as={Button} colorScheme="gray">
              {profileName}
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </HeaderDiv>
      )}
    </>
  );
};

export default Header;
