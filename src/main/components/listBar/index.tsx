import { useMemo } from "react";
import { ListDiv } from "./../style";
import { IList } from "./../../../types/board";
import { Button } from "@chakra-ui/react";

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
};

const ListComponent: React.FC<Props> = ({ listWidth, list }) => {
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
              list.map((c: any) => {
                console.log(c);
                return (
                  <div key={c._id}>
                    <div style={{ width: "5%", minWidth: "70px" }}></div>
                    <div style={{ width: "20%", minWidth: "150px" }}>
                      <p
                        style={{
                          height: "50px",
                          width: "50px",
                        }}
                      >
                        {c.img_URL !== null ? <img src={c.img_URL.replace("public/", "")} alt="" /> : "--"}
                      </p>
                    </div>
                    <div style={{ width: "20%", minWidth: "200px" }}>{c.writer}</div>
                    <div style={{ width: "25%", minWidth: "200px" }}>{c.title}</div>
                    <div style={{ width: "25%", minWidth: "150px" }}>{c.createdAt}</div>
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
    };
  }, [list]);

  return <>{listItem.item}</>;
};

export default ListComponent;
