import { Button } from "antd";
import api from "@/api";
const Home = () => {
  return (
    <div>
      home
      <Button onClick={() => api.loginOut()}>退出登录</Button>
    </div>
  );
};

export default Home;
