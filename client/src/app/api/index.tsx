import axios from "axios";
import { ITokens } from "@interfaces";
import { TOKENS } from "@utils";

const baseURL = "http://localhost:4001";

export const API_ROUTES = {
  baseURL,
  login: "/auth/login",
  registration: "/auth/registration",
  refreshToken: "/auth/refresh",
  containUser: "/user/email",
  addTextToUser: "/text/addUser",
  createText: "/text/create",
  getAllTexts: "/text",
  getAllTextsByLanguageId: "/language/",
  deleteTextFromUser: "/text/deleteUser",
  getResultById: "/result/",
  getStatistic: "result/statistic/",
  getResultByParams: "/result/params",
  addResultToUser: "/result/addToUser",
};
export const api = axios.create({
  baseURL: API_ROUTES.baseURL,
  // withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

api.interceptors.request.use(
  async (config) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem(TOKENS.ACCESS)}`,
    };

    return config;
  },
  (error) => {
    console.log(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const { accessToken, refreshToken } = (await api.get(
        API_ROUTES.refreshToken,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(TOKENS.REFRESH)}`,
          },
        }
      )) as ITokens;
      localStorage.setItem(TOKENS.ACCESS, accessToken);
      localStorage.setItem(TOKENS.REFRESH, refreshToken);
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);
