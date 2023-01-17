import loadable from "@loadable/component";
const Todos = loadable(() => import("../pages/todo/index"));
const Detail = loadable(() => import("../pages/todo/Detail"));

const routes = [
  { id: 0, path: "/todolist", title: "todo", item: <Todos /> },
  { id: 1, path: "/todolist/:id", title: "Detail", item: <Detail /> },
];

export default routes;
