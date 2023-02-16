import { useState } from "react";
import { Media768 } from "../../../utiis/Media";
import { Box, Input, Textarea, Button, useDisclosure } from "@chakra-ui/react";
import { InputBox } from "../style/homeStyle";
import "../style/style.css";
import { IPostForm } from "../../../auth/types";
import { error, Toast, success } from "../../../utiis/toast";

import BoardAPI from "../../../api/board";
import { IModalBoard } from "../../../main/components/Modal";
import { useNavigate } from "react-router-dom";
import { IBoard, IBoardData, IBoardDeleteData } from "../../../types/board";
import { IBoardEvent, IBoardReturn } from "../types";

const Detail = () => {
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

  const [list, setList] = useState<Array<IBoardData>>([
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

  const boardEvent: IBoardEvent = {
    handleChange: (e, type) => {
      setValue((state) => ({
        ...state,
        [type]: e.target.value,
      }));
    },
    handleSellectChange: (e, type) => {
      setValue((state) => ({
        ...state,
        [type]: e.target.value,
      }));
    },
  };

  const boardAPI: IBoardReturn = {
    deleteData: async () => {
      const data: IBoardDeleteData = {
        seq: dataid,
      };
      setLoadingStatus(true);
      await BoardAPI.deleteBoard(data)

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
  };

  return (
    <>
      <Box p={Media768() ? "20px 20px" : "20px 40px"} maxWidth={Media768() ? "" : "1024px"} m={Media768() ? "" : "0 auto"} display={"flex"} justifyContent="space-between">
        <Box flexWrap="wrap" display="flex" justifyContent="space-between" w="100%" className={Media768() ? "" : ""} border="1px solid #d1d1d1" p="20px" borderRadius="5px">
          <form onSubmit={onSubmit.handleSubmit}>
            <Box>
              <div className="form-group filebox">
                <label htmlFor="img_file"></label>
                <input id="img_file" type="file" onChange={onSubmit.handleChange} />
              </div>
            </Box>
          </form>

          <IModalBoard title={modalStatus ? "삭제" : "추가"} isOpen={isOpen} onClose={onClose} modalStatus={modalStatus} formAction={modalStatus ? boardAPI.deleteData : onSubmit.handleSubmit} />

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
                <Input
                  // h={Media768() ? "150px" : "300px"}
                  id="username"
                  name="username"
                  value={value.content}
                  onChange={(e) => {
                    boardEvent.handleChange(e, "content");
                  }}
                  placeholder="내용"
                />
              </div>
            </label>
          </InputBox>
          <Box w={Media768() ? "100%" : "calc(30% - 20px)"}>
            <Box border="1px solid #d1d1d1" h={Media768() ? "200px" : "350px"} p="10px"></Box>
          </Box>
          <Box pt="20px" m="0 auto">
            <Button
              mr={3}
              onClick={() => {
                onOpen();
              }}
            >
              저장
            </Button>
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
