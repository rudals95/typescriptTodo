import { useEffect, useState, useMemo } from "react";
import { Box, Select, Input } from "@chakra-ui/react";
import { Media768, Medi590 } from "../../utiis/Media";
import { Container, ContainerRight, ListHead, ListBody } from "./style/homeStyle";
import "./style/style.css";
import { Link, useNavigate } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import BoardAPI from "./../../api/board";
import { IBoardListGet } from "./types";
import { error } from "../../utiis/toast";
import Pagenation from "./../../main/components/Pagenation";
import qs from "query-string";

const Home = () => {
  // eslint-disable-next-line no-restricted-globals
  const QS = qs.parse(location.search);
  const [list, setList] = useState([{ _id: "", no: 0, img_URL: "", writer: "", title: "", createdAt: "" }]);
  const [total, setTotal] = useState(0); // 페이징
  const [nowPage, setNowPage] = useState(Number(QS.page));
  const navigate = useNavigate();

  const boadrAPI: IBoardListGet = {
    getData: async (apiUrl, obj) => {
      await BoardAPI.getBoard(apiUrl, obj)
        .then((res) => {
          setList(res.data.data);
          setTotal(Math.ceil(res.data.totalCount / 10));
          console.log(res.data);
        })
        .catch((err) => {
          error(err.response);
        });
    },
  };
  useEffect(() => {
    let url = `/home?page=${nowPage}`;
    navigate(url);
  }, [nowPage]);

  useEffect(() => {
    const apiUrl = `/board`;
    const obj = {
      offset: Number(QS.page) || 0,
    };
    if (QS.page === "0") setNowPage(0);
    boadrAPI.getData(apiUrl, obj);
    // eslint-disable-next-line no-restricted-globals
  }, [location.search]);

  return (
    <>
      <Box p={Media768() ? "20px 20px" : "20px 40px"} maxWidth={Media768() ? "" : "1280px"} m={Media768() ? "" : "0 auto"} display={"flex"} justifyContent="space-between">
        <Box className={Media768() ? "MobileStyle" : "NomalStyle"} border="1px solid #d1d1d1" p="20px" borderRadius="5px">
          <Container>
            {/* <h1>Free Board</h1> */}
            <Box border="1px solid #d1d1d1" h="100%" p="8px" display="flex">
              <Select w="120px">
                <option value="">전체</option>
              </Select>
              <Input ml="10px" maxWidth="240px" />
            </Box>
            <Box p="10px" mt="15px" border="1px solid #d1d1d1">
              <ListHead>
                <li>
                  <p>No</p>
                </li>
                <li>
                  <p>이미지</p>
                </li>
                <li>
                  <p>작성자</p>
                </li>
                <li>
                  <p>제목</p>
                </li>
                <li>
                  <p>등록일</p>
                </li>
              </ListHead>
              {list.map((c) => {
                return (
                  <ListBody key={c._id}>
                    <li>
                      <p>{c.no}</p>
                    </li>
                    <li>
                      <p>{c.img_URL}</p>
                    </li>
                    <li>
                      <p>{c.writer}</p>
                    </li>
                    <li>
                      <p>{c.title}</p>
                    </li>
                    <li>
                      <p>{c.createdAt}</p>
                    </li>
                  </ListBody>
                );
              })}
            </Box>
          </Container>
          <BsPlusCircle
            size="30px"
            color="rgb(64 189 68)"
            onClick={() => {
              navigate("/board/save");
            }}
          />
          <Pagenation totalPage={total} nowPage={Number(QS.page)} pageChange={setNowPage} />
        </Box>
        {!Media768() && (
          <Box width={"calc(20% - 20px)"} border=" 1px solid #d1d1d1" borderRadius="5px">
            <ContainerRight>
              <h2 style={{ marginBottom: "10px" }}></h2>
              {/* {list.map((c, idx) => {
                return (
                  <div key={idx}>
                    <Link to="/todolist"></Link>
                  </div>
                );
              })} */}
              <div>
                <Link to="/todolist"></Link>
              </div>
            </ContainerRight>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Home;
