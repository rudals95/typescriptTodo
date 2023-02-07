import loadable from "@loadable/component";
const Home = loadable(() => import("../pages/home/index"));
const Todos = loadable(() => import("../pages/todo/index"));
const Detail = loadable(() => import("../pages/todo/Detail"));

const routes = [
  { id: 0, path: "/", title: "home", item: <Home /> },
  { id: 1, path: "/home", title: "home", item: <Home /> },
  { id: 2, path: "/todolist", title: "todo", item: <Todos /> },
  { id: 3, path: "/todolist/:id", title: "Detail", item: <Detail /> },
];

export default routes;
