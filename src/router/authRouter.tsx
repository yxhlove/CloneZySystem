import { useLocation } from "react-router-dom";
import { RouteObject, routes } from "./routes";

const AuthRouter = (props: { children: JSX.Element }) => {
  const searchRoute = (
    path: string,
    routes: RouteObject[] = [],
  ): RouteObject => {
    let result = {} as RouteObject;
    for (const item of routes) {
      if (item.path === path) return item;
      if (item.children) {
        const res = searchRoute(path, item.children);
        if (Object.keys(res).length) result = res;
      }
    }
    return result;
  };

  const { pathname } = useLocation();
  const router = searchRoute(pathname, routes);
};

export default AuthRouter;
