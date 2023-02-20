import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import { Media768 } from "../../utiis/Media";
import { DetailContainer } from "./style/todoStyle";
import { useParams } from "react-router-dom";
import { ITodoDetail } from "./types";
import TodoAPI from "../../api/todo";
import { useEffect, useState } from "react";
import { ITodoData, ITodos, IComment } from "../../types/todo";
import moment from "moment/moment";
import { FiEdit } from "react-icons/fi";
import { FcCancel } from "react-icons/fc";
import { BsCheckCircle } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";
import { success, Toast } from "./../../utiis/toast";
import { useSelector } from "react-redux";
import Loading from "./../../main/components/Loading";
import { FaCamera } from "react-icons/fa";

const Detail = () => {
  const { id } = useParams();
  const [editSwitch, setEditSwitch] = useState<boolean>(true);
  const [loadingStatus, setLoadingStatus] = useState<boolean>(false);
  const store: any = useSelector((store) => store);

  const [file, setFile] = useState<any>();
  const [data, setData] = useState<ITodoData | ITodos>({
    title: "",
    content: "",
    _id: "",
    updatedAt: "",
    createdAt: "",
    img_URL: "",
  });

  const [commentData, setCommentData] = useState<IComment>({
    _id: id,
    writer: store.user.email,
    username: store.user.username,
    contents: "",
  });

  const detailData: ITodoDetail = {
    getDetail: async (id) => {
      setLoadingStatus(true);
      await TodoAPI.detailTodo(id).then((res) => {
        setData(() => ({
          ...res.data.data[0],
          createdAt: moment(res.data.data[0].createdAt).format("YYYY-MM-DD"),
          updatedAt: res.data.data[0].updatedAt === null ? null : moment().format("YYYY-MM-DD"),
          img_URL: res.data.data[0].img_URL === null || res.data.data[0].img_URL === undefined ? null : res.data.data[0].img_URL.replace("public/", ""),
        }));
        setLoadingStatus(false);
      });
    },

    handleImg: (e) => {
      if (e.target.files !== null) {
        setFile({ img: e.target.files[0] });
        console.log(e.target.files);
      }
    },

    updateData: (id, data) => {
      setLoadingStatus(true);
      TodoAPI.updateTodo(id, data)
        .then((res) => {
          setLoadingStatus(false);
          success("수정되었습니다");
          setEditSwitch(true);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    commentSave: (commentData) => {
      TodoAPI.commentTodo(commentData).then((res) => {
        console.log(res);
      });
    },
    handleChange: (e, type) => {
      setData((state) => ({
        ...state,
        [type]: e.target.value,
      }));
      setCommentData((state) => ({
        ...state,

        [type]: e.target.value,
      }));
    },
    handleTextChange: (e, type) => {
      setData((state) => ({
        ...state,
        [type]: e.target.value,
      }));
    },
  };
  useEffect(() => {
    detailData.getDetail(id);
  }, [editSwitch]);

  return (
    <>
      {loadingStatus ? <Loading /> : null}
      <Box p={Media768() ? "20px 20px" : "20px 40px"}>
        <Box border=" 1px solid #d1d1d1" borderRadius="5px">
          <DetailContainer>
            {editSwitch ? (
              <>
                <div>
                  <p>제목</p>
                  <p style={{ width: "100%", border: "1px solid #ddd", padding: "10px", borderRadius: "5px", marginLeft: "10px", fontSize: "16px" }}>{data.title}</p>
                </div>
                <div>
                  <p>내용:</p>
                  <p style={{ width: "100%", border: "1px solid #ddd", padding: "10px", borderRadius: "5px", marginLeft: "10px", fontSize: "16px" }}>
                    {data.content.split("\n").map((c, i) => {
                      return (
                        <span key={i}>
                          {c}
                          <br />
                        </span>
                      );
                    })}
                  </p>
                </div>
                {data.img_URL !== null && (
                  <Box border="1px solid #E2E8F0" p="20px" mb="10px">
                    <img src={data.img_URL} alt="" />
                  </Box>
                )}
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
                  <Textarea
                    ml="10px"
                    w="100%"
                    value={data.content}
                    onChange={(e) => {
                      detailData.handleTextChange(e, "content");
                    }}
                  />
                </Box>
                {data.img_URL !== null ? (
                  <Box border="1px solid #E2E8F0" p="20px" mb="10px" className="img_container">
                    <div>
                      <img src={data.img_URL} alt="이미지" />
                      <BiMinusCircle
                        onClick={() => {
                          setData((state) => ({ ...state, img_URL: null }));
                        }}
                        className="img_remove_btn"
                        size="30px"
                        color="rgb(213, 0, 0)"
                      />
                    </div>
                  </Box>
                ) : (
                  <Box border="1px solid #E2E8F0" p="20px" mb="10px" justifyContent="center" display="flex">
                    <div className="form-group filebox">
                      <label htmlFor="img_file">
                        <FaCamera size="30px" />
                      </label>
                      <input
                        style={{ display: "none" }}
                        id="img_file"
                        onClick={() => {
                          alert("준비중입니다");
                        }}
                        // type="file"
                        onChange={detailData.handleImg}
                      />
                    </div>
                  </Box>
                )}
              </>
            )}

            <div>
              <p className="date">등록일: {data.createdAt}</p>
              {data.updatedAt !== null && <p className="date">수정일: {data.updatedAt}</p>}
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
                    detailData.updateData(id, data);
                  }}
                  style={{
                    marginLeft: "20px",
                  }}
                  size="24px"
                  color="#359741"
                />
              </>
            )}
          </Box>
          <Box display="flex" textAlign="center" marginBottom="20px" p="20px">
            <Input
              value={commentData.contents}
              onChange={(e) => {
                detailData.handleChange(e, "contents");
              }}
            />
            <Button
              ml="10px"
              onClick={() => {
                detailData.commentSave(commentData);
              }}
            >
              등록
            </Button>
          </Box>
        </Box>
        <Toast />
      </Box>
    </>
  );
};

export default Detail;
