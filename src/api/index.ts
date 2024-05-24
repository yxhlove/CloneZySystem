import { loginApi } from "./modules/login";
import { userApi } from "./modules/user";

export default {
  ...loginApi,
  ...userApi
};
