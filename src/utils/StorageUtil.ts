export class StorageUtil {
  static setToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  static getToken = () => {
    return localStorage.getItem("token");
  };
}
