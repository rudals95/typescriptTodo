import { useCallback } from "react";

import Pagination from "react-bootstrap/Pagination";
import { PaginationBox } from "./style";
// import "bootstrap/dist/css/bootstrap.min.css";

const Pagenation = ({ totalPage, nowPage, pageChange }) => {
  // 페이지네이션
  const pageNation = useCallback(() => {
    const bigarr = [];
    const arr = [];
    const elarr = [];
    for (let i = 1; i <= totalPage; i++) {
      arr.push(i);
    }
    for (let i = 0; i < arr.length; i += 5) {
      bigarr.push(arr.slice(i, i + 5));
    }

    bigarr.map((e) => {
      if (e.includes(nowPage + 1)) {
        e.map((v, idx) => {
          elarr.push(
            <li
              className={nowPage === idx ? "active" : ""}
              key={v}
              onClick={() => {
                pageChange(v - 1);
                console.log(v - 1);
              }}
            >
              {v}
            </li>
          );
        });
      }
    });
    return elarr;
  }, [totalPage, nowPage, pageChange]);

  return (
    <PaginationBox>
      <ul className="pagination">
        <li
          onClick={() => {
            if (nowPage > 0) {
              pageChange(0);
            }
          }}
        />
        <li
          onClick={() => {
            if (nowPage > 0) {
              pageChange(nowPage - 1);
            }
          }}
        />
        {pageNation()}
        <li
          onClick={() => {
            if (nowPage < totalPage - 1) {
              pageChange(nowPage + 1);
            }
          }}
        />
        <li
          onClick={() => {
            if (nowPage < totalPage - 1) {
              pageChange(totalPage - 1);
            }
          }}
        />
      </ul>
    </PaginationBox>
  );
};

export default Pagenation;
