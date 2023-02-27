import { Box, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Container, List } from "./style/todoStyle";
import { ITodoReturn, ITodoList } from "./types";
import { ITodos, ITodoArr, ITodoDeleteData } from "./../../types/todo";
import { useEffect, useState } from "react";
import TodoAPI from "../../api/todo";
import { IModal } from "../../main/components/Modal";
import { success, Toast, error } from "./../../utiis/toast";
import { Media768 } from "../../utiis/Media";
import { IPostForm } from "../../auth/types";

import Loading from "./../../main/components/Loading";

const Todos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [loadingStatus, setLoadingStatus] = useState<boolean>(false);

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
      _id: ".",
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
      onClose();
      await setLoadingStatus(true);
      await TodoAPI.createToDo(value)
        .then((res) => {
          setLoadingStatus(false);
          success("완료되었습니다");
        })
        .catch((err) => {
          error(err.response.data.details);
        });
    },
  };

  const todoAPI: ITodoReturn = {
    getData: async () => {
      await TodoAPI.getToDo()
        .then((res) => {
          // console.log(res.data.data);

          res.data.data.map((c: any, i: number) => {
            console.log(c.seq, "각순번", c.title, "인덱스");
          });
          setList(res.data.data);
        })
        .catch((err) => {
          error(err.response);
        });
    },
    deleteData: async () => {
      const data: ITodoDeleteData = {
        seq: dataid,
      };
      setLoadingStatus(true);
      await TodoAPI.deleteTodo(data)

        .then((res) => {
          setLoadingStatus(false);
          success("삭제되었습니다");
        })
        .catch((err) => {
          setLoadingStatus(false);
          console.log(err.response.data);
        });
      onClose();
    },
    // changeData: async (reorderedItem) => {
    //   await TodoAPI.chageToDo(reorderedItem).then((res) => {
    //     console.log(res);
    //     setDropData(true);
    //   });
    // },
    changeEnd: async (data) => {
      await TodoAPI.chageToDoEnd(data).then((res) => {
        setDropData(true);
      });
    },
  };

  const openModal = (btn: string) => {
    if (btn === "delete") setModalStatus(true);
    else setModalStatus(false);
    onOpen();
  };

  const [dropData, setDropData] = useState<boolean>(false);
  useEffect(() => {
    todoAPI.getData();
  }, [isOpen]);

  useEffect(() => {
    // console.log(dropData);
    return () => setDropData(false);
  }, [dropData]);

  const handleChange = (result: any) => {
    if (!result.destination) return;

    const items = [...list]; // 새배열담기
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(result);
    // console.log(reorderedItem, "선택");
    setList(items);
    setDropData(true);
    // console.log(items, "옮긴배열");

    const data = {
      dragStart: list[result.source.index].seq,
      droppable: list[result.destination.index].seq,
    };
    todoAPI.changeEnd(data);
    console.log(data);
  };
  // const dddd = (e: any) => {
  //   if (e.destination === null) return;
  //   else {
  //     const data = {
  //       dragStart: list[e.source.index].seq,
  //       droppable: list[e.destination.index].seq,
  //     };
  //     // todoAPI.changeData(data);
  //     console.log("됨");
  //   }
  // };

  return (
    <>
      {loadingStatus ? <Loading /> : null}
      <Box p={Media768() ? "20px 20px" : "20px 40px"} maxWidth={Media768() ? "" : "550px"} m={Media768() ? "" : "0 auto"}>
        <Box border=" 1px solid #d1d1d1" borderRadius="5px">
          <Container>
            <DragDropContext
              onDragEnd={handleChange}
              // onDragUpdate={(e) => {
              //   dddd(e);
              // }}
            >
              <Droppable droppableId="list">
                {(provided: any) => (
                  <ul className="list" {...provided.droppableProps} ref={provided.innerRef}>
                    {list.map(({ _id, seq, content, title }, index) => (
                      <Draggable key={_id} draggableId={_id} index={index}>
                        {(provided: any) => (
                          <li ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} key={_id}>
                            <List>
                              <Link to={`/todolist/${_id}`}>
                                <p>
                                  {seq}...........{content}
                                </p>
                              </Link>
                              <button
                                onClick={() => {
                                  setDataId(seq);
                                  openModal("delete");
                                }}
                              >
                                삭제
                              </button>
                            </List>
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
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
