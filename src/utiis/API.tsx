// import axios from "axios";
import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_ENV === "development" ? `${process.env.REACT_APP_API}` : `${process.env.REACT_APP_API}`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

const API = axios.create(axiosConfig);

API.interceptors.request.use(
  async (config) => {
    const data = config;
    const accessToken = localStorage.getItem("token");

    if (!accessToken || accessToken === undefined) {
      data.headers = { Accept: "*/*" }; //둘다 없을 경우
    } else {
      data.headers = {
        Authorization: `${accessToken}`,
        Accept: "*/*",
        // "x-access-token": `${accessToken}`,
      };
    }

    return data;
  },
  (err) => {
    console.log("api err", err.response.data);
    return Promise.reject(err);
  }
);
// API.interceptors.response.use(
//   (config) => {
//     const data = config;
//     console.log(data, "ddddddddddddddd");

//     return data;
//   },
//   (err) => {
//     const isTokenNotting = err.response?.data.details === "Token is missing";
//     if (isTokenNotting) {
//       error("토큰값이없습니다");
//     } else {
//       error(err.response?.data.details);
//     }
//     console.log(err, "ddddddddddddddd");
//     return err;
//   }
// );

export default API;
