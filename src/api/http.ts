import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import {
  changeRequestHeader,
  handleRequestAuth,
  handleGeneralError,
  handleAuthError,
  handleNetworkError,
} from "./httpHelper";
import { abortControllers, cancelRequest } from "./httpCancel";

export const baseURL = "/";

interface BaseResponse<T> {
  code: string;
  msg: string;
  success: boolean;
  data: T;
}

const config = {
  baseURL: "/",
  timeout: 10000,
  // 跨域时候允许携带凭证
  withCredentials: true,
};

class RequestHttp {
  private service: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);

    this.service.interceptors.request.use((config: any) => {
      const cancelToken = config.params.cancelToken;
      if (cancelToken) {
        cancelRequest(cancelToken);
        const abortController = new AbortController();
        abortControllers.set(cancelToken, abortController);
        config.signal = abortController.signal;
      } else {
        const abortController = new AbortController();
        abortControllers.set(Symbol(), abortController);
        config.signal = abortController.signal;
      }
      config = changeRequestHeader(config);
      config = handleRequestAuth(config);
      return config;
    });

    this.service.interceptors.response.use(
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
  }

  get<R, T>(
    url: string,
    config?: AxiosRequestConfig<R>,
  ): Promise<BaseResponse<T>> {
    return this.service.get(url, config);
  }
  post<R, T>(
    url: string,
    body?: R,
    config?: AxiosRequestConfig<R>,
  ): Promise<BaseResponse<T>> {
    return this.service.post(url, body, config);
  }
  put<R, T>(
    url: string,
    body?: R,
    config?: AxiosRequestConfig<R>,
  ): Promise<BaseResponse<T>> {
    return this.service.put(url, body, config);
  }
  delete<R, T>(
    url: string,
    config?: AxiosRequestConfig<R>,
  ): Promise<BaseResponse<T>> {
    return this.service.delete(url, config);
  }
}

export default new RequestHttp(config);
