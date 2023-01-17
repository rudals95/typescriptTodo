import { Box, Input } from "@chakra-ui/react";
import { Media768 } from "../../utiis/Media";
import { DetailContainer } from "./style/todoStyle";
import { useParams } from "react-router-dom";
import { ITodoDetail } from "./types";
import TodoAPI from "../../api/todo";
import { useEffect, useState } from "react";
import { ITodoData } from "../../types/todo";
import moment from "moment/moment";
import { FiEdit } from "react-icons/fi";
import { FcCancel } from "react-icons/fc";
import { BsCheckCircle } from "react-icons/bs";

const Detail = () => {
  const { id } = useParams();
  const [editSwitch, setEditSwitch] = useState<boolean>(true);

  const [data, setData] = useState<ITodoData>({
    title: "",
    content: "",
    id: "",
    updatedAt: "",
    createdAt: "",
  });

  const detailData: ITodoDetail = {
    getDetail: (id) => {
      TodoAPI.detailTodo(id).then((res) => {
        console.log(res.data.data);
        setData(() => ({
          ...res.data.data,
          createdAt: moment(res.data.data).format("YYYY-MM-DD"),
        }));
      });
    },
  };
  useEffect(() => {
    detailData.getDetail(id);
  }, []);

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
            </>
          ) : (
            <>
              <Box display="flex" alignItems="center" mb="10px" pb="10px" borderBottom="1px solid #ddd">
                <p>제목:</p>
                <Input ml="10px" w="auto" value={data.title} readOnly />
              </Box>
              <Box display="flex" alignItems="center" mb="10px" pb="10px" borderBottom="1px solid #ddd">
                <p>내용: </p>
                <Input ml="10px" w="auto" value={data.content} readOnly />
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
    </Box>
  );
};

export default Detail;
