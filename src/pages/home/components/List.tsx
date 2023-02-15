import { useEffect, useState } from "react";
import { Box, Select, Input, Button } from "@chakra-ui/react";
import { Media768, Medi590 } from "../../../utiis/Media";
import "../style/style.css";
import { Link, useNavigate } from "react-router-dom";
import BoardAPI from "./../../../api/board";
import { IList } from "./../../../types/board";
import { IBoardListGet } from "../types";
import { error } from "../../../utiis/toast";
import Pagenation from "../../../main/components/Pagenation";
import qs from "query-string";
import SearchBar from "../../../main/components/searchBar";
import ListComponent from "../../../main/components/listBar";

const List = () => {
  // eslint-disable-next-line no-restricted-globals
  const QS = qs.parse(location.search);
  const [list, setList] = useState<IList[] | undefined>();
  // const [list, setList] = useState<any>();
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

  const listWidth = [
    { style: { width: "5%", minWidth: "70px" }, innerText: "번호" },
    { style: { width: "20%", minWidth: "150px" }, innerText: "이미지" },
    { style: { width: "20%", minWidth: "200px" }, innerText: "이메일" },
    { style: { width: "25%", minWidth: "200px" }, innerText: "제목" },
    { style: { width: "25%", minWidth: "150px" }, innerText: "등록일" },
    { style: { width: "5%", minWidth: "80px" }, innerText: "관리" },
  ];

  return (
    <>
      <Box className="style" p="20px">
        <Box mb="10px">
          <Input
            type="date"
            size="md"
            m="0"
            mr="8px"
            maxWidth="150px"
            // value={params.startDate || ""}
            // onChange={(e) => {
            //   changeValue(e, "startDate");
            // }}
          />
          <Input
            type="date"
            size="md"
            m="0"
            mr="8px"
            maxWidth="150px"
            // value={params.endDate || ""}
            // onChange={(e) => {
            //   changeValue(e, "endDate");
            // }}
          />
        </Box>
        <SearchBar
        // searchOptions={searchOptions}
        // ListSelect={true}
        // searchText={searchText}
        // params={params} // 파라미터
        // changeValue={changeValue} // 파라미터 변경
        // searchClearBtn={searchClearBtn} //검색완료
        // enterSearch={enterSearch} //엔터 검색
        />
      </Box>
      <Box className="style listBody" mt="20px">
        <Box p="16px 20px">총 개</Box>
        <Box p="15px 20px" w="100%">
          {/* <ListComponent listItem={listItem} /> */}
          <ListComponent listWidth={listWidth} list={list} />
        </Box>

        <Box display="flex" justifyContent="end">
          <Button
            m="10px 20px"
            colorScheme="teal"
            variant="solid"
            // onClick={() => {
            //   goPage("save");
            // }}
          >
            등록
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" mb="20px">
          <Pagenation totalPage={total} nowPage={Number(QS.page)} pageChange={setNowPage} />
        </Box>
      </Box>

      {/* <Box p={"20px"} maxWidth={Media768() ? "" : "1280px"} m={Media768() ? "" : "0 auto"} display={"flex"} justifyContent="space-between">
        <Box className={Media768() ? "MobileStyle" : "NomalStyle"} border="1px solid #d1d1d1" p="20px" borderRadius="5px">
          <Container>
            <Box border="1px solid #d1d1d1" h="100%" p="8px" display="flex">
              <Select w="120px">
                <option value="">전체</option>
              </Select>
              <Input ml="10px" maxWidth="240px" />
            </Box>
            {Media768() ? (
              <Box p="10px" mt="15px" border="1px solid #d1d1d1">
                <ListHead>
                  <li>
                    <p>No</p>
                  </li>
                  <li>
                    <p>이미지</p>
                  </li>

                  <li>
                    <p>제목</p>
                  </li>
                </ListHead>
                {list.map((c) => {
                  if (c.img_URL !== null) {
                    console.log(c.img_URL.replace("public/", ""));
                  }
                  return (
                    <ListBody key={c._id}>
                      <li>
                        <p>{c.no}</p>
                      </li>
                      <li>
                        <p>{c.img_URL !== null ? <img src={c.img_URL.replace("public/", "")} alt="" /> : "--"}</p>
                      </li>

                      <li>
                        <p>{c.title}</p>
                      </li>
                    </ListBody>
                  );
                })}
              </Box>
            ) : (
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
                        <p>{c.img_URL !== null ? <img src={c.img_URL.replace("public/", "")} alt="" /> : "--"}</p>
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
            )}
          </Container>
          <BsPlusCircle
            size="30px"
            color="rgb(64 189 68)"
            onClick={() => {
              navigate("/board/save");
            }}
          />
          <Pagenation totalPage={total} nowPage={Number(QS.page)} pageChange={setNowPage} />
          <Button>
            <Link to="/todolist">리스트</Link>
          </Button>
        </Box>
      
      </Box> */}
    </>
  );
};

export default List;
