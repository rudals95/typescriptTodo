import { useEffect, useState, useRef } from "react";

const DragBox = () => {
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
    // console.log(pos, "움직일거");
    // console.log(dragItemRef.current.clientWidth + 2);
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
  return {
    /* <div className="flex_container" style={{ position: "relative" }}>
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
</div> */
  };
};

export default DragBox;
