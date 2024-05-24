import NotFound from "@/pages/404";
import Home from "@/pages/home";
import Login from "@/pages/login";
import RealtimeMonitor from "@/pages/realtimeMonitor";
import UserManage from "@/pages/userManage";
import { Navigate } from "react-router-dom";

export interface RouteObject {
  path: string;
  element: React.ReactNode;
  children?: RouteObject[];
  title?: string;
  requiredAuth?: boolean;
}

export const routes: RouteObject[] = [
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/login", element: <Login /> },
  { path: "/*", element: <NotFound /> },
  { title: "首页", path: "/home", element: <Home /> },
  { title: "用户管理", path: "/userManage", element: <UserManage /> },
  {
    title: "实时监控",
    path: "/realtimeMonitor",
    element: <RealtimeMonitor />,
  },
];
