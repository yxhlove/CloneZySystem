import Login from "@/pages/login";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "@/pages/home";
import NotFound from "@/pages/404";

const RouteWapper = () => {
  // 公共路由
  const publicRoutes = [
    { path: "/login", element: <Login /> },
    { path: "/*", element: <NotFound /> },
  ];

  // 受保护路由
  const protectedRoutes = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        { path: "", element: <Navigate to="home" /> },
        { path: "home", element: <Home /> },
      ],
    },
  ];

  const router = createBrowserRouter([...publicRoutes, ...protectedRoutes]);

  return <RouterProvider router={router} />;
};

export default RouteWapper;
