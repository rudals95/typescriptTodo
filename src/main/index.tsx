import { Route, Routes } from "react-router-dom";
import routes from "../router/routes";
import Contents from "./components/Contents";
import Header from "./components/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Contents />}>
          {routes.map((c) => {
            return <Route key={c.id} path={c.path} element={c.item} />;
          })}
        </Route>
      </Routes>
    </>
  );
};

export default Main;
