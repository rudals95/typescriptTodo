import axios from "axios";
import { error } from "./toast";

const API = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

API.interceptors.request.use(
  (config) => {
    const data = config;
    const accessToken = localStorage.getItem("user");

    data.headers = {
      Authorization: `${accessToken}`,
      Accept: "*/*",
    };
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
