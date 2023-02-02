import { Box, Input } from "@chakra-ui/react";
import { Media768 } from "../../utiis/Media";
import { DetailContainer } from "./style/todoStyle";
import { useParams } from "react-router-dom";
import { ITodoDetail } from "./types";
import TodoAPI from "../../api/todo";
import { useEffect, useState } from "react";
import { ITodoData, ITodos } from "../../types/todo";
import moment from "moment/moment";
import { FiEdit } from "react-icons/fi";
import { FcCancel } from "react-icons/fc";
import { BsCheckCircle } from "react-icons/bs";
import { success, Toast } from "./../../utiis/toast";

const Detail = () => {
  const { id } = useParams();
  const [editSwitch, setEditSwitch] = useState<boolean>(true);

  const [data, setData] = useState<ITodoData | ITodos>({
    title: "",
    content: "",
    _id: "",
    updatedAt: "",
    createdAt: "",
    img_URL: "",
  });

  const detailData: ITodoDetail = {
    getDetail: (id) => {
      TodoAPI.detailTodo(id).then((res) => {
        setData(() => ({
          ...res.data.data[0],
          createdAt: moment(res.data.data[0]).format("YYYY-MM-DD"),
          img_URL: res.data.data[0].img_URL,
        }));
      });
    },
    updateData: (id, data) => {
      // setData((state) => ({
      //   ...state,
      //   createdAt: moment().format("YYYY-MM-DD"),
      // }));
      // console.log(data);

      TodoAPI.updateTodo(id, data)
        .then((res) => {
          console.log(res.data);
          success("수정되었습니다");
          setEditSwitch(true);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    handleChange: (e, type) => {
      setData((state) => ({
        ...state,
        [type]: e.target.value,
      }));
    },
    getDetail_Image: (id) => {
      TodoAPI.getTodoImage(id).then((res) => {
        console.log(res);
      });
      console.log("여기부터하면댐");
    },
  };
  useEffect(() => {
    detailData.getDetail(id);
    if (data.img_URL !== null) {
      detailData.getDetail_Image(id);
      return;
    }
  }, [editSwitch]);

  return (
    <Box p={Media768() ? "20px 20px" : "20px 40px"}>
      <Box border=" 1px solid #d1d1d1" borderRadius="5px">
        <DetailContainer>
          {editSwitch ? (
            <>
              <div>
                <p>제목: {data.title}</p>
              </div>
              <div>
                <p>내용: {data.content}</p>
              </div>
              <Box border="1px solid #E2E8F0" p="20px" mb="10px">
                이미지영역
                {/* <img src={data.img_URL} alt="" /> */}
              </Box>
            </>
          ) : (
            <>
              <Box display="flex" alignItems="center" mb="10px" pb="10px" borderBottom="1px solid #ddd">
                <p>제목:</p>
                <Input
                  ml="10px"
                  w="auto"
                  value={data.title}
                  onChange={(e) => {
                    detailData.handleChange(e, "title");
                  }}
                />
              </Box>
              <Box display="flex" alignItems="center" mb="10px" pb="10px" borderBottom="1px solid #ddd">
                <p>내용: </p>
                <Input
                  ml="10px"
                  w="auto"
                  value={data.content}
                  onChange={(e) => {
                    detailData.handleChange(e, "content");
                  }}
                />
              </Box>
            </>
          )}

          <div>
            <p className="date">등록일: {data.createdAt}</p>
          </div>
        </DetailContainer>
        <Box mb="20px" display="flex" justifyContent={"center"} alignItems="center">
          {editSwitch ? (
            <FiEdit
              size="30px"
              onClick={() => {
                setEditSwitch(false);
              }}
            />
          ) : (
            <>
              <FcCancel
                size="30px"
                onClick={() => {
                  setEditSwitch(true);
                }}
              />
              <BsCheckCircle
                onClick={() => {
                  detailData.updateData(id, { data });
                }}
                style={{
                  marginLeft: "20px",
                }}
                size="24px"
                color="#359741"
              />
            </>
          )}

          {/* <IModal
              title={modalStatus ? "삭제" : "추가"}
              isOpen={isOpen}
              onOpen={openModal}
              onClose={onClose}
              change={toDoEvent.handleChange}
              action={}
              value={value}
              modalStatus={modalStatus}
            /> */}
        </Box>
      </Box>
      <Toast />
    </Box>
  );
};

export default Detail;
