import { FiUser } from "react-icons/fi";
import { AiFillNotification } from "react-icons/ai";

//사이드바 메뉴 array
export const Submenu = [
  {
    title: "회원관리",
    subMenu: [{ name: "회원관리", url: "/home?page=0" }],
    icon: <FiUser fontSize={"20px"} color="#fff" />,
  },
  {
    title: "TodoList",
    subMenu: [{ name: "Todo", url: "/todolist" }],
    icon: <AiFillNotification fontSize={"20px"} color="#fff" />,
  },
];
