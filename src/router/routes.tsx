import loadable from "@loadable/component";
import Loading from "./../main/components/Loading";

const Home = loadable(() => import("../pages/home/index"), {
  fallback: <Loading />,
});
const Board = loadable(() => import("../pages/home/Save"), {
  fallback: <Loading />,
});
const Todos = loadable(() => import("../pages/todo/index"), {
  fallback: <Loading />,
});
const Detail = loadable(() => import("../pages/todo/Detail"), {
  fallback: <Loading />,
});

const routes = [
  { id: 0, path: "/", title: "home", item: <Home /> },
  { id: 1, path: "/home", title: "home", item: <Home /> },
  { id: 2, path: "/board/:id", title: "board", item: <Board /> },
  { id: 3, path: "/todolist", title: "todo", item: <Todos /> },
  { id: 4, path: "/todolist/:id", title: "Detail", item: <Detail /> },
];

export default routes;
