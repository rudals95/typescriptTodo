import { useState, useEffect } from "react";
import { Media768 } from "../../../utiis/Media";
import { Box, Input, Textarea, Button, useDisclosure } from "@chakra-ui/react";
import { InputBox, Detaildiv } from "../style/homeStyle";
import "../style/style.css";
import { IPostForm } from "../../../auth/types";
import { error, Toast, success } from "../../../utiis/toast";

import BoardAPI from "../../../api/board";
import { IModalBoard } from "../../../main/components/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { IBoard, IBoardData, IBoardDeleteData } from "../../../types/board";
import { IBoardDetailEvent, IBoardReturn } from "../types";
import { FaCamera } from "react-icons/fa";

const Detail = () => {
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [loadingStatus, setLoadingStatus] = useState<boolean>(false);
  const navigate = useNavigate();

  const [dataid, setDataId] = useState<string>("");
  const [file, setFile] = useState<any>();
  const [value, setValue] = useState<IBoard>({
    title: "",
    content: "",
  });
  const [status, setStatus] = useState<boolean>(false);

  const [list, setList] = useState<IBoardData>({
    title: "",
    content: "",
    _id: "",
    updatedAt: "",
    createdAt: "",
    seq: "",
    comment: [],
    img_URL: "",
  });

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

      await BoardAPI.postBoard(formData)
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

  const boardEvent: IBoardDetailEvent = {
    handleChange: (e, type) => {
      setValue((state) => ({
        ...state,
        [type]: e.target.value,
      }));
    },
    handleTextChange: (e, type) => {
      setValue((state) => ({
        ...state,
        [type]: e.target.value,
      }));
    },
    getData: async (apiUrl) => {
      await BoardAPI.detailBoard(apiUrl)
        .then((res) => {
          console.log(res.data.data);
          setList((state) => ({
            ...state,
            title: res.data.data.title,
            content: res.data.data.content,
            img_URL: res.data.data.img_URL,
            createdAt: res.data.data.createdAt,
            writer: res.data.data.writer,
            comment: res.data.data.comment,
            seq: res.data.data.seq,
          }));
        })
        .catch((err) => {
          error(err.response);
        });
    },
  };

  //삭제
  const boardAPI: IBoardReturn = {
    deleteData: async () => {
      const data: IBoardDeleteData = {
        seq: list.seq,
      };
      setLoadingStatus(true);
      await BoardAPI.deleteBoard(data)
        .then((res) => {
          success("삭제되었습니다");
          const timeList: any = setTimeout(() => {
            navigate("/home?page=0&key=title");
          }, 2000);
          setLoadingStatus(false);
        })
        .catch((err) => {
          setLoadingStatus(false);
          console.log(err.response.data);
        });
      onClose();
    },
  };
  useEffect(() => {
    if (id !== "save") {
      console.log("수정");
      boardEvent.getData(`${id}`);
      setStatus(true);
    } else {
      console.log("생성");
      setStatus(false);
    }
  }, [status]);

  return (
    <>
      <Box p={Media768() ? "20px 20px" : "20px 40px"} maxWidth={Media768() ? "" : "1024px"} m={Media768() ? "" : "0 auto"} display={"flex"} justifyContent="space-between">
        <Box flexWrap="wrap" display="flex" justifyContent="space-between" w="100%" className={Media768() ? "" : ""} border="1px solid #d1d1d1" p="20px" borderRadius="5px">
          <IModalBoard title={modalStatus ? "삭제" : "추가"} isOpen={isOpen} onClose={onClose} modalStatus={modalStatus} formAction={modalStatus ? boardAPI.deleteData : onSubmit.handleSubmit} />
          {id === "save" ? (
            <InputBox style={Media768() ? { width: "100%" } : { width: "70%" }}>
              <label htmlFor="" style={Media768() ? { display: "block" } : { display: "flex" }}>
                <span>제목</span>
                <div style={Media768() ? { width: "100%" } : { width: "100%" }}>
                  <Input
                    mt={"10px"}
                    value={value.title}
                    onChange={(e) => {
                      boardEvent.handleChange(e, "title");
                    }}
                    mb="10px"
                    placeholder="제목"
                  />
                </div>
              </label>
              <label htmlFor="" style={Media768() ? { display: "block" } : { display: "flex" }}>
                <span>내용</span>
                <div style={Media768() ? { width: "100%" } : { width: "100%" }}>
                  <Textarea
                    h={Media768() ? "150px" : "300px"}
                    id="username"
                    name="username"
                    value={value.content}
                    onChange={(e) => {
                      boardEvent.handleTextChange(e, "content");
                    }}
                    placeholder="내용"
                  />
                </div>
              </label>

              <form>
                <Box>
                  <div className="form-group filebox">
                    <label htmlFor="img_file">
                      <FaCamera size="30px" />
                    </label>
                    <input style={{ display: "none" }} id="img_file" type="file" onChange={onSubmit.handleChange} />
                  </div>
                </Box>
              </form>
            </InputBox>
          ) : (
            <>
              <span>제목</span>
              <Detaildiv style={Media768() ? { width: "100%" } : { width: "100%" }}>
                <div>{list.title}</div>
              </Detaildiv>
              <span>내용</span>
              <Detaildiv style={Media768() ? { width: "100%" } : { width: "100%" }}>
                <Box minHeight="150px" border="2px solid #ddd">
                  {list.content.split("\n").map((c, i) => {
                    return (
                      <span key={i}>
                        {c}
                        <br />
                      </span>
                    );
                  })}
                </Box>
              </Detaildiv>
            </>
          )}

          <Box w={Media768() ? "100%" : "calc(30% - 20px)"}>
            <Box border="1px solid #d1d1d1" mt="10px" minHeight={Media768() ? "200px" : "360px"} p="10px">
              {list.img_URL !== null ? <img src={list.img_URL.replace("public/", "")} alt="" /> : "이미지 x"}
            </Box>
          </Box>
          <Box pt="20px" m="0 auto">
            <Button
              mr="3"
              onClick={() => {
                setStatus(!status);
              }}
            >
              수정
            </Button>

            <Button
              mr={3}
              onClick={() => {
                setModalStatus(true);
                onOpen();
              }}
            >
              삭제
            </Button>

            {status === false && (
              <Button
                mr="3"
                onClick={() => {
                  onOpen();
                }}
              >
                저장
              </Button>
            )}

            <Button
              onClick={() => {
                navigate(-1);
              }}
            >
              목록
            </Button>
          </Box>
        </Box>
      </Box>
      <Toast />
    </>
  );
};

export default Detail;
