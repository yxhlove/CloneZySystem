import http from "../http";

const getUserInfo = () => {
  return http.post("/base/getUserInfo", {}, { responseType: "blob" });
};

export const userApi = {
  getUserInfo,
};
