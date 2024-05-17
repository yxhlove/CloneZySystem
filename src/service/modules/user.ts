import { requestPost } from "../server";

const getUserInfo = (uid: string) => {
  return requestPost("/user/getUserInfo", { uid });
};

export const userApi = {
  getUserInfo,
};
