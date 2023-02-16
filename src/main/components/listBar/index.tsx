import { useMemo } from "react";
import { ListDiv } from "./../style";
import { IList } from "./../../../types/board";
import { Button } from "@chakra-ui/react";
import moment from "moment/moment";
import { ParsedQuery } from "query-string";
import { Media768 } from "../../../utiis/Media";

interface IlistStyle {
  width: string;
  minWidth: string;
}
interface ListIem {
  style?: IlistStyle;
  innerText: string;
}

type Props = {
  listWidth: Array<any>;
  list: IList[] | undefined; //폼 다를경우 유니온 추가
  number: Number[][];
  QS: ParsedQuery<string>;
};

const ListComponent: React.FC<Props> = ({ listWidth, list, number, QS }) => {
  const listItem = useMemo(() => {
    return {
      item: (
        <>
          <ListDiv>
            <div>
              {listWidth.map((c: ListIem) => {
                return (
                  <div key={c.innerText} style={c.style}>
                    <p className="ellipsis">{c.innerText}</p>
                  </div>
                );
              })}
            </div>
            {list !== undefined ? (
              list.map((c: any, idx) => {
                const listNumber: any = number[Number(QS.page)];
                return (
                  <div key={c._id}>
                    <div style={{ width: "5%", minWidth: "70px" }}>{listNumber !== undefined && listNumber[idx]}</div>

                    <div style={{ width: "20%", minWidth: "150px" }}>
                      <p
                        style={{
                          width: "50px",
                        }}
                      >
                        {c.img_URL !== null ? <img src={c.img_URL.replace("public/", "")} alt="" /> : "--"}
                      </p>
                    </div>
                    <div style={{ width: "20%", minWidth: "200px" }}>{c.writer}</div>
                    <div style={{ width: "25%", minWidth: "200px" }}>{c.title}</div>
                    <div style={{ width: "25%", minWidth: "150px" }}>{moment(c.createdAt).format("YYYY-MM-DD")}</div>
                    <div style={{ width: "5%", minWidth: "80px" }}>
                      <Button>상세</Button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p style={{ margin: "0 auto", textAlign: "center", padding: "10px", color: "#837a7a" }}>Loading</p>
            )}
          </ListDiv>
        </>
      ),
      mobile: (
        <>
          <ListDiv>
            {list !== undefined ? (
              list.map((c: any, idx) => {
                return (
                  <div key={c._id} style={{ color: "#868e96", fontFamily: "prb" }}>
                    <div style={{ color: " #868e96", width: "10%", minWidth: "50px", padding: "0 8px" }}>
                      <p
                        style={{
                          width: "50px",
                        }}
                      >
                        {c.img_URL !== null ? <img src={c.img_URL.replace("public/", "")} alt="" /> : "--"}
                      </p>
                    </div>
                    <div style={{ display: "block", textAlign: "left", color: " #868e96", width: "90%", padding: "0 8px" }}>
                      <p
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {c.title}
                      </p>
                      <p style={{ fontSize: "12px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: "prr" }}>
                        {moment(c.createdAt).format("YYYY-MM-DD")} / {c.writer}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p style={{ margin: "0 auto", textAlign: "center", padding: "10px", color: "#837a7a" }}>Loading</p>
            )}
          </ListDiv>
        </>
      ),
    };
  }, [list]);

  return <>{Media768() ? listItem.mobile : listItem.item}</>;
};

export default ListComponent;
