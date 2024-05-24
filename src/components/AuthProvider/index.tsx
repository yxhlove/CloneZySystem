import { AuthContext, getLocalStorage, setLocalStorage } from "@/utils";
import { useMemo, useState } from "react";

const AuthProvider = (props: any) => {
  const [token, _setToken] = useState(getLocalStorage("token"));

  const setToken = (newToken: string) => {
    _setToken(newToken);
    setLocalStorage("token", newToken);
  };

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token],
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
