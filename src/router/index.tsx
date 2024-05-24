import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

export const CustomRouter = () => {
  return useRoutes(routes);
};
