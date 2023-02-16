import { Route, Routes } from "react-router-dom";
import routes from "../router/routes";
import Contents from "./components/Contents";
import Header from "./components/Header";
import { useState } from "react";
import { MainDiv } from "./components/style";
import SideBar from "./components/sidebar";
import { Media768 } from "../utiis/Media";

const Main = () => {
  const [show, setShow] = useState<boolean>(true);
  const showSideBar = () => {
    setShow(!show);
  };

  return (
    <>
      <MainDiv>
        <SideBar show={show} />
        <div className={Media768() ? "btnClickContents" : show ? "contents" : "btnClickContents"}>
          <Header showSideBar={showSideBar} show={show} />
          <Routes>
            <Route path="/" element={<Contents />}>
              {routes.map((c) => {
                return <Route key={c.id} path={c.path} element={c.item} />;
              })}
            </Route>
          </Routes>
        </div>
      </MainDiv>
    </>
  );
};

export default Main;
