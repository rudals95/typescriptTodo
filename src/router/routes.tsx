import loadable from "@loadable/component";
// const Home = loadable(() => import("../pages/home/index"));
const Todos = loadable(() => import("../pages/todo/index"));

const routes = [
  // { id: 0, path: "/home", title: "todo", comp: <Home /> },
  { id: 1, path: "/todolist", title: "todo", comp: <Todos /> },
];

export default routes;
