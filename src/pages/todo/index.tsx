import { Box, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Container, List } from "./style/todoStyle";
import { ITodoReturn, ITodoList } from "./types";
import { ITodos, ITodoArr, ITodoDeleteData } from "./../../types/todo";
import { useEffect, useState } from "react";
import TodoAPI from "../../api/todo";
import { IModal } from "../../main/components/Modal";
import { success, Toast, error } from "./../../utiis/toast";
import { Media768 } from "../../utiis/Media";
import { IPostForm } from "../../auth/types";

const Todos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalStatus, setModalStatus] = useState<boolean>(false);

  const [dataid, setDataId] = useState<string>("");
  const [file, setFile] = useState<any>();
  const [value, setValue] = useState<ITodos>({
    title: "",
    content: "",
  });

  const [list, setList] = useState<ITodoArr>([
    {
      title: "",
      content: "",
      _id: "",
      updatedAt: "",
      createdAt: "",
      seq: "",
    },
  ]);

  const onSubmit: IPostForm = {
    handleChange: (e) => {
      if (e.target.files !== null) {
        setFile({ img: e.target.files[0] });
      }
    },
    handleSubmit: async (e) => {
      e.preventDefault();
      const formData = new FormData();
      if (file !== undefined) {
        formData.append("img", file.img);
      }
      formData.append("title", value.title);
      formData.append("content", value.content);
      if (value.title === "") return error("제목을 입력하세요");
      if (value.content === "") return error("내용을 입력하세요");

      await TodoAPI.postTodo(formData)
        .then((res) => {
          console.log(res);
          success("완료되었습니다");
          setValue((state) => ({ ...state, title: "", content: "" }));
        })
        .catch((err) => {
          console.log(err.response);
        });
      onClose();
    },
  };

  const toDoEvent: ITodoList = {
    handleChange: (e, type) => {
      setValue((state) => ({
        ...state,
        [type]: e.target.value,
      }));
    },
    handleClick: async () => {
      await TodoAPI.createToDo(value)
        .then((res) => {
          success("완료되었습니다");
        })
        .catch((err) => {
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
        .catch((err) => {});
    },
    deleteData: async () => {
      const data: ITodoDeleteData = {
        seq: dataid,
      };
      await TodoAPI.deleteTodo(data)
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
      <Box p={Media768() ? "20px 20px" : "20px 40px"} maxWidth={Media768() ? "" : "550px"} m={Media768() ? "" : "0 auto"}>
        <Box border=" 1px solid #d1d1d1" borderRadius="5px">
          <Container>
            <ul>
              {list.map((c) => {
                return (
                  <li key={c._id}>
                    <List>
                      <Link to={`/todolist/${c._id}`}>
                        <p>{c.content}</p>
                      </Link>
                      <button
                        onClick={() => {
                          setDataId(c.seq);
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

          <Box display="flex" p=" 0 20px 20px 20px">
            <IModal
              title={modalStatus ? "삭제" : "추가"}
              isOpen={isOpen}
              onOpen={openModal}
              onClose={onClose}
              change={toDoEvent.handleChange}
              action={modalStatus ? todoAPI.deleteData : toDoEvent.handleClick}
              value={value}
              modalStatus={modalStatus}
              formAction={modalStatus ? todoAPI.deleteData : onSubmit.handleSubmit}
              fileChange={onSubmit.handleChange}
            />
          </Box>
        </Box>
      </Box>
      <Toast />
    </>
  );
};

export default Todos;
