import Contents from "../src/main/components/Contents";
import { Route, Routes } from "react-router-dom";
import routes from "../src/router/routes";

const Main = () => {
  return (
    <>
      ddd
      <Contents>
        <Routes>
          {routes.map((c) => {
            return <Route key={c.id} path={c.path} element={c.comp}></Route>;
          })}
        </Routes>
      </Contents>
    </>
  );
};

export default Main;
