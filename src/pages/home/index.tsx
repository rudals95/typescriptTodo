import { useEffect, useState, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { Media768, Medi590 } from "../../utiis/Media";
import { Container, ContainerRight } from "./style/homeStyle";
import "./style/style.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [list, setList] = useState([0, 1]);
  const containerRef: any = useRef(null);
  const dragItemRef: any = useRef(null);
  const [originPos, setOriginPos] = useState({ x: 0, y: 0 });
  const [clientPos, setClientPos] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ left: 0, top: 0 });
  const [boxLine, setBoxLine] = useState(true);

  const dragStartHandler = (e: any) => {
    const originPosTemp = { ...originPos };
    originPosTemp["x"] = e.target.offsetLeft;
    originPosTemp["y"] = e.target.offsetTop;
    // console.log(originPosTemp, "드래그 시작 좌측 상단 점");

    setOriginPos(originPosTemp); //처음 드래그시작값 저장

    const clientPosTemp = { ...clientPos };
    clientPosTemp["x"] = e.clientX;
    clientPosTemp["y"] = e.clientY;

    setClientPos(clientPosTemp);
  };

  const dragHandler = (e: any) => {
    const posTemp = { ...pos };
    posTemp["left"] = e.target.offsetLeft + e.clientX - clientPos.x;
    posTemp["top"] = e.target.offsetTop + e.clientY - clientPos.y;
    setPos(posTemp);

    const clientPosTemp = { ...clientPos };
    clientPosTemp["x"] = e.clientX;
    clientPosTemp["y"] = e.clientY;
    setClientPos(clientPosTemp);
    console.log(pos, "움직일거");
    console.log(dragItemRef.current.clientWidth + 2);
    if (pos.left < 0 || pos.left - 11 > dragItemRef.current.clientWidth + 1 || pos.top < 0 || pos.top > 404) {
      setBoxLine(false);
    } else {
      setBoxLine(true);
    }
  };

  const dragOverHandler = (e: any) => {
    e.preventDefault();
  };

  const isContainer = () => {
    if (pos.left < 0 || pos.left - 11 > dragItemRef.current.clientWidth + 1 || pos.top < 0 || pos.top > 404) return true;
    else return false;
  };
  const dragEndHandler = (e: any) => {
    setBoxLine(true);
    if (isContainer()) {
      const posTemp = { ...pos };
      posTemp["left"] = originPos.x;
      posTemp["top"] = originPos.y;
      setPos(posTemp);
    }
  };

  return (
    <>
      <Box p={Media768() ? "20px 20px" : "20px 40px"} maxWidth={Media768() ? "" : "1024px"} m={Media768() ? "" : "0 auto"} display={"flex"} justifyContent="space-between">
        <Box className={Media768() ? "MobileStyle" : "NomalStyle"} border="1px solid #d1d1d1" p="20px" borderRadius="5px">
          <Container ref={containerRef} style={boxLine ? { border: "1px solid #fff" } : { border: "2px solid rgb(239 6 6 / 57%)" }}>
            <div className="flex_container" style={{ position: "relative" }}>
              {list.map((c, idx) => {
                return (
                  <div
                    ref={dragItemRef}
                    className={Medi590() ? "w100 mobile_item" : "flex_item"}
                    key={idx}
                    draggable
                    onDragStart={(e) => {
                      dragStartHandler(e);
                    }}
                    onDrag={(e) => {
                      dragHandler(e);
                    }}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    style={{ position: "absolute", left: pos.left, top: pos.top }}
                  >
                    test
                  </div>
                );
              })}
            </div>
          </Container>
        </Box>
        {!Media768() && (
          <Box width={"calc(20% - 20px)"} border=" 1px solid #d1d1d1" borderRadius="5px">
            <ContainerRight>
              <h2 style={{ marginBottom: "10px" }}>메뉴</h2>
              {list.map((c, idx) => {
                return (
                  <div key={idx}>
                    <Link to="/todolist">투두</Link>
                  </div>
                );
              })}
            </ContainerRight>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Home;
