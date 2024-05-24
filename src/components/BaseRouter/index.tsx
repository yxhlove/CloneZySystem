import Login from "@/pages/login";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Home from "@/pages/home";
import NotFound from "@/pages/404";
import ProtectedRoute from "@/components/ProtectedRoute";
import UserManage from "@/pages/userManage";
import RealtimeMonitor from "@/pages/realtimeMonitor";

const routes = [
  { path: "/login", element: <Login /> },
  { path: "/*", element: <NotFound /> },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      { path: "", element: <Navigate to="home" /> },
      { name: "首页", path: "home", element: <Home /> },
      { name: "用户管理", path: "userManage", element: <UserManage /> },
      {
        name: "实时监控",
        path: "realtimeMonitor",
        element: <RealtimeMonitor />,
      },
    ],
  },
];

const BaseRouter = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default BaseRouter;
