import { Box, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Container, List } from "./style/todoStyle";
import { ITodoReturn, ITodoList } from "./types";
import { ITodos, ITodoArr } from "./../../types/todo";
import { useEffect, useState } from "react";
import TodoAPI from "../../api/todo";
import { IModal } from "../../main/components/Modal";
import { success, Toast, error } from "./../../utiis/toast";
import { Media768 } from "../../utiis/Media";

const Todos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [value, setValue] = useState<ITodos>({
    title: "",
    content: "",
  });

  const [list, setList] = useState<ITodoArr>([
    {
      title: "",
      content: "",
      id: "",
      updatedAt: "",
      createdAt: "",
    },
  ]);

  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [dataid, setDataId] = useState<string>("");

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

  const todoAPI: ITodoReturn = {
    getData: async () => {
      await TodoAPI.getToDo()
        .then((res) => {
          setList(res.data.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    deleteData: async () => {
      await TodoAPI.deleteTodo(dataid)
        .then((res) => {
          success("삭제되었습니다");
        })
        .catch((err) => {
          console.log(err.response.data);
        });
      onClose();
    },
  };

  const openModal = (btn: string) => {
    if (btn === "delete") setModalStatus(true);
    else setModalStatus(false);
    onOpen();
  };

  useEffect(() => {
    todoAPI.getData();
  }, [isOpen]);

  return (
    <>
      <Box p={Media768() ? "20px 20px" : "20px 40px"}>
        <Box border=" 1px solid #d1d1d1" borderRadius="5px">
          <Container>
            <ul>
              {list.map((c) => {
                return (
                  <li key={c.id}>
                    <List>
                      <Link to={`/todolist/${c.id}`}>
                        <p>{c.content}</p>
                      </Link>
                      <button
                        onClick={() => {
                          setDataId(c.id);
                          openModal("delete");
                        }}
                      >
                        삭제
                      </button>
                    </List>
                  </li>
                );
              })}
            </ul>
          </Container>

          <Box display="flex">
            <IModal
              title={modalStatus ? "삭제" : "추가"}
              isOpen={isOpen}
              onOpen={openModal}
              onClose={onClose}
              change={toDoEvent.handleChange}
              action={modalStatus ? todoAPI.deleteData : toDoEvent.handleClick}
              value={value}
              modalStatus={modalStatus}
            />
          </Box>
        </Box>
      </Box>
      <Toast />
    </>
  );
};

export default Todos;
