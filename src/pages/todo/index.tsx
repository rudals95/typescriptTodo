import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Container, List } from "./style/todoStyle";
import { ITodoDetail, ITodoList } from "./types";
import { ITodos, ITodoData } from "./../../types/todo";
import { useEffect, useState } from "react";
import TodoAPI from "../../api/todo";
import { IModal } from "../../main/components/Modal";
import { success, Toast, error } from "./../../utiis/toast";

const Todos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [list, setList] = useState<ITodoData>({
    title: "",
    content: "",
    id: "",
    updatedAt: "",
    createdAt: "",
  });
  const [value, setValue] = useState<ITodos>({
    title: "",
    content: "",
  });

  const toDoEvent: ITodoList = {
    handleChange: (e, type) => {
      console.log(e.target.value);
      setValue((state) => ({
        ...state,
        [type]: e.target.value,
      }));
    },

    handleClick: async () => {
      await TodoAPI.createToDo(value)
        .then((res) => {
          success("완료되었습니다");
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
          error(err.response.data.details);
        });
      onClose();
    },
  };

  const getDetail: ITodoDetail = {
    getData: async () => {
      await TodoAPI.getToDo()
        .then((res) => {
          console.log(res.data);
          setList(res.data.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
  };
  console.log(list);

  useEffect(() => {
    getDetail.getData();
  }, []);

  return (
    <>
      <Box p="20px 40px">
        <Box p="20px" border=" 1px solid #d1d1d1" borderRadius="5px">
          <Container>
            <ul>
              <li>
                <List>
                  <Link to="">
                    <p>제목</p>
                    <p>내용</p>
                    <p>작성일</p>
                  </Link>

                  <button>삭제</button>
                </List>
              </li>
            </ul>
          </Container>

          <Box display="flex">
            <IModal title={"TodoAdd"} isOpen={isOpen} onOpen={onOpen} onClose={onClose} change={toDoEvent.handleChange} action={toDoEvent.handleClick} value={value} />
          </Box>
        </Box>
      </Box>
      <Toast />
    </>
  );
};

export default Todos;
