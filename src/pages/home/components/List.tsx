import { useEffect, useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { IKey, IList, IQSParams } from "./../../../types/board";
import { IBoardEvent, IBoardListGet } from "../types";
import { error } from "../../../utiis/toast";
import BoardAPI from "./../../../api/board";
import Pagenation from "../../../main/components/Pagenation";
import qs, { ParsedQuery } from "query-string";
import SearchBar from "../../../main/components/searchBar";
import ListComponent from "../../../main/components/listBar";
import { Media768, Medi590 } from "../../../utiis/Media";
import "../style/style.css";

const List = () => {
  // eslint-disable-next-line no-restricted-globals
  const QS: ParsedQuery<string> = qs.parse(location.search);
  const [list, setList] = useState<IList[] | undefined>();
  const [total, setTotal] = useState(0); // 페이징
  const [totalCount, setTotalCount] = useState(0); // 페이징
  const [number, setNumber] = useState<Number[][]>([]); // 게시글 번호 배열
  const [nowPage, setNowPage] = useState(Number(QS.page));
  const [searchText, setSearchText] = useState(QS.value || "");
  const [startValue, setStartValue] = useState(QS.startdate || "");
  const [endValue, setEndValue] = useState(QS.enddate || "");
  const [clearSearch, setClearSearch] = useState(false);
  const [params, setParams] = useState<IQSParams>({
    paramsValue: QS.key,
    searchValue: QS.value || "",
    startDate: QS.startdate || "",
    endDate: QS.enddate || "",
  });

  const searchOptions: IKey[] = [
    { name: "제목", value: "title" },
    { name: "이메일", value: "email" },
  ];

  const navigate = useNavigate();

  const chunk = (data: Number[], size = 10) => {
    const arr = [];
    for (let i = 0; i < data.length; i += size) {
      arr.push(data.slice(i, i + size));
    }
    return arr;
  };

  const boadrAPI: IBoardListGet = {
    getData: async (apiUrl, obj) => {
      await BoardAPI.getBoard(apiUrl, obj)
        .then((res) => {
          setList(res.data.data);
          setTotal(Math.ceil(res.data.totalCount / 10));
          setTotalCount(res.data.totalCount);
          const numberArr = [];
          for (let i = 1; i < Number(res.data.totalCount) + 1; i += 1) {
            numberArr.push(i);
          }
          setNumber(chunk(numberArr.reverse()));
        })
        .catch((err) => {
          error(err.response);
        });
    },
  };

  const listWidth = [
    { style: { width: "5%", minWidth: "70px" }, innerText: "번호" },
    { style: { width: "20%", minWidth: "150px" }, innerText: "이미지" },
    { style: { width: "20%", minWidth: "200px" }, innerText: "이메일" },
    { style: { width: "25%", minWidth: "200px" }, innerText: "제목" },
    { style: { width: "25%", minWidth: "150px" }, innerText: "등록일" },
    { style: { width: "5%", minWidth: "80px" }, innerText: "관리" },
  ];

  //검색벨류 변경
  const changeValue: IBoardEvent = {
    handleChange: (e, type) => {
      setParams((state) => ({
        ...state,
        [type]: e.target.value,
      }));
    },
    handleSellectChange: (e, type) => {
      setParams((state) => ({
        ...state,
        [type]: e.target.value,
      }));
    },
  };
  // 검색버튼
  const Searchcomplete = () => {
    setNowPage(0); // 검색시 1페이지
    setSearchText(params.searchValue);
    setStartValue(params.startDate);
    setEndValue(params.endDate);
    setClearSearch(!clearSearch);
  };

  // 검색버튼엔터
  const enterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      Searchcomplete();
    }
  };
  useEffect(() => {
    let url = `/home?page=${nowPage}&key=${params.paramsValue}`;
    if (searchText !== "") url += `&value=${searchText}`;
    if (startValue !== "" || endValue !== "") url += `&startdate=${startValue}&enddate=${endValue}`;
    navigate(url);
  }, [nowPage, clearSearch]);

  interface IObj {
    offset: Number;
    startDate?: string | (string | null)[];
    endDate?: string | (string | null)[];
    title?: string | (string | null)[] | null;
    email?: string | (string | null)[] | null;
  }
  useEffect(() => {
    const apiUrl = `/board`;
    let obj: IObj = {
      offset: Number(QS.page) || 0,
    };
    if (QS.page === "0") setNowPage(0);
    if (QS.startdate && QS.enddate) {
      obj.startDate = QS.startdate;
      obj.endDate = QS.enddate;
    }
    if (QS.key !== undefined) {
      setParams((state) => ({
        ...state,
        paramsValue: QS.key,
      }));
    }
    if (QS.key === "title") obj.title = QS.value;
    if (QS.key === "email") obj.email = QS.value;

    if (QS.value !== undefined) {
      setParams((state) => ({
        ...state,
        searchValue: QS.value,
      }));
    }
    if (QS.value === undefined) {
      setParams((state) => ({
        ...state,
        searchValue: "",
      }));
    }
    if (QS.startdate === undefined || QS.enddate === undefined) {
      setParams((state) => ({
        ...state,
        startDate: "",
        endDate: "",
      }));
    }
    if (QS.startdate !== undefined || QS.enddate !== undefined) {
      setParams((state) => ({
        ...state,
        startDate: QS.startdate,
        endDate: QS.enddate,
      }));
    }

    console.log(obj);

    boadrAPI.getData(apiUrl, obj);
    // eslint-disable-next-line no-restricted-globals
  }, [location.search]);

  const goPage = (data: string) => {
    navigate(`/board/${data}`);
  };

  return (
    <>
      <Box className="style" p="20px">
        <Box mb="10px">
          <Input
            type="date"
            size="md"
            m="0"
            mr="8px"
            mb="10px"
            maxWidth="150px"
            value={params.startDate || ""}
            onChange={(e) => {
              changeValue.handleChange(e, "startDate");
            }}
          />
          <Input
            type="date"
            size="md"
            m="0"
            mr="8px"
            maxWidth="150px"
            value={params.endDate || ""}
            onChange={(e) => {
              changeValue.handleChange(e, "endDate");
            }}
          />
        </Box>
        <SearchBar
          searchOptions={searchOptions}
          params={params} // 파라미터
          handleChange={changeValue.handleChange} // 파라미터 변경
          handleSellectChange={changeValue.handleSellectChange} // 파라미터 변경
          Searchcomplete={Searchcomplete} //검색완료
          enterSearch={enterSearch} //엔터 검색
        />
      </Box>
      <Box className="style listBody" mt="20px">
        <Box p="16px 20px">총 {totalCount} 개</Box>
        <Box p="15px 20px" w="100%">
          <ListComponent listWidth={listWidth} list={list} number={number} QS={QS} />
        </Box>

        <Box display="flex" justifyContent="end">
          <Button
            m="10px 20px"
            colorScheme="teal"
            variant="solid"
            onClick={() => {
              goPage("save");
            }}
          >
            등록
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" mb="20px">
          <Pagenation totalPage={total} nowPage={Number(QS.page)} pageChange={setNowPage} />
        </Box>
      </Box>
    </>
  );
};

export default List;
