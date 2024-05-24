import http from "../http";

type LoginParams = {
  nickname: string;
  password: string;
};

const login = (data: LoginParams) => {
  return http.post("/base/login", data);
};

const loginOut = async () => {
  const res: any = await http.post("/base/logout");
};

export const loginApi = {
  login,
  loginOut,
};
