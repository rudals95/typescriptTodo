import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8085/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

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
