import { requestPost } from "../server";
import { redirect } from "react-router-dom";

type LoginParams = {
  nickName: string;
  password: string;
  temporaryId: string;
  captcha: string;
};

const getVerifyCode = async () => {
  return requestPost("/login/getLineCaptcha");
};

const login = (data: LoginParams) => {
  // return requestPost("/login/login", data);
   return requestPost("/login", data);
};

const loginOut = async () => {
  const [err, res] = await requestPost("/login/logout");
  if (!err && res) {
    sessionStorage.clear();
    redirect("/login");
  }
};

export const loginApi = {
  getVerifyCode,
  login,
  loginOut,
};
