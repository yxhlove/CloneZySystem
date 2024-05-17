import { ProForm, ProFormText } from "@ant-design/pro-components";
import "./index.less";
import { useEffect, useState } from "react";
import api from "@/service";
import { aesEncrypt, setLocalStorage, useAuth } from "@/utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState<string>("");
  const [temporaryId, setTemporaryId] = useState<string>("");
  const [longTimeUpdate, setLongTimeUpdate] = useState<boolean>(false);
  const [needCodeUpdate, setNeedCodeUpdate] = useState<boolean>(false);

  useEffect(() => {
    getVerifyCode();
  }, []);

  const getVerifyCode = async () => {
    const [err, res] = await api.getVerifyCode();
    if (!err && res) {
      setCaptcha(res.data.lineCaptcha);
      setTemporaryId(res.data.temporaryId);
    }
  };

  const handleLogin = async (values: any) => {
    const { nickName, password } = values;
    const [err, res] = await api.login({
      nickName,
      password: aesEncrypt(password),
      temporaryId,
      captcha,
    });
    if (!err && res) {
      setLongTimeUpdate(res.data.longTimeUpdate);
      setNeedCodeUpdate(res.data.needCodeUpdate);

      setToken(res.data.token);
      getUserInfo(res.data.uid);
      navigate("/home", { replace: true });
    }
  };

  const getUserInfo = async (uid: string) => {
    const [err, res] = await api.getUserInfo(uid);
    if (!err && res) {
    }
  };

  return (
    <div className="loginbox">
      <div className="content">
        <ProForm
          onFinish={handleLogin}
          submitter={{
            resetButtonProps: false,
            searchConfig: { submitText: "登录" },
          }}
        >
          <ProFormText label="用户名" name="nickName" />
          <ProFormText.Password label="密码" name="password" />
          <ProFormText
            label="图片验证码"
            name="imgVerifyCode"
            addonAfter={
              <img
                height={40}
                width={90}
                src={"data:image/png;base64," + captcha}
              />
            }
          />
        </ProForm>
      </div>
    </div>
  );
};

export default Login;
