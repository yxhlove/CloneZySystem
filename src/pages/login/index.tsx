import { ProForm, ProFormText } from "@ant-design/pro-components";
import "./index.less";
import api from "@/api";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hook";
import { setIsLogin } from "@/store/userSlice";
import { StorageUtil } from "@/utils/StorageUtil";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = async (values: any) => {
    const { nickname, password } = values;
    const [err, res] = await api.login({
      nickname,
      password,
    });
    if (!err && res) {
      StorageUtil.setToken(res.data.token);
      dispatch(setIsLogin(true));
      getUserInfo();
      navigate("/home", { replace: true });
    }
  };

  const getUserInfo = async () => {
    const [err, res] = await api.getUserInfo();
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
          <ProFormText label="用户名" name="nickname" />
          <ProFormText.Password label="密码" name="password" />
        </ProForm>
      </div>
    </div>
  );
};

export default Login;
