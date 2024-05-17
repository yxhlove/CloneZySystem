import axios from "axios";

import {
  changeRequestHeader,
  handleRequestAuth,
  handleGeneralError,
  handleAuthError,
  handleNetworkError,
} from "./tools";

// export const baseURL = "/intelligent-web";
export const baseURL ="https://mock.mengxuegu.com/mock/6621d376faa39b4567596456/service";

type Fn = (data: BaseResponse<any>) => unknown;

type ApiResponse<T> = [any, BaseResponse<T> | undefined];

interface BaseResponse<T> {
  code: string;
  msg: string;
  success: boolean;
  data: T;
}

const axiosInstance = axios.create({
  baseURL,
  timeout: 10 * 1000,
});

axiosInstance.interceptors.request.use((config: any) => {
  config = changeRequestHeader(config);
  config = handleRequestAuth(config);
  return config;
});

axiosInstance.interceptors.response.use(
  (response: any) => {
    if (response.status !== 200) return Promise.reject(response.data);
    const noAuthError: boolean = handleAuthError(response.data.code);
    if (noAuthError) {
      handleGeneralError(response.data.code, response.data.msg);
    }
    return response.data ?? {};
  },
  (error: any) => {
    handleNetworkError(error.code);
    Promise.reject(error.response);
  },
);

export const requestGet = <T>(
  url: string,
  params: Record<string, string> = {},
  clearFn?: Fn,
): Promise<ApiResponse<T>> =>
  new Promise((resolve) => {
    axios
      .get(url, { params })
      .then((result: any) => {
        let res: BaseResponse<T>;
        if (clearFn !== undefined) {
          res = clearFn(result) as BaseResponse<T>;
        } else {
          res = result as BaseResponse<T>;
        }
        resolve([null, res]);
      })
      .catch((error) => {
        resolve([error, undefined]);
      });
  });

export const requestPost = <T = any>(
  url: string,
  data: Record<string, string> = {},
): Promise<ApiResponse<T>> =>
  new Promise((resolve) => {
    axiosInstance
      .post(url, data)
      .then((result: any) => {
        if (result.success) {
          resolve([null, result as BaseResponse<T>]);
        } else {
          resolve([result.code, result as BaseResponse<T>]);
        }
      })
      .catch((error) => {
        resolve([error, undefined]);
      });
  });

export const requestPut = <T>(
  url: string,
  data: Record<string, string>,
  params: Record<string, string> = {},
): Promise<ApiResponse<T>> =>
  new Promise((resolve) => {
    axios
      .put(url, data, { params })
      .then((result: any) => {
        resolve([null, result as BaseResponse<T>]);
      })
      .catch((error) => {
        resolve([error, undefined]);
      });
  });

export const Delet = <T>(
  url: string,
  params: Record<string, string> = {},
): Promise<ApiResponse<T>> =>
  new Promise((resolve) => {
    axios
      .delete(url, { params })
      .then((result: any) => {
        resolve([null, result as BaseResponse<T>]);
      })
      .catch((error) => {
        resolve([error, undefined]);
      });
  });
