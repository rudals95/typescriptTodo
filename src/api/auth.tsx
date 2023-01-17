import { IUserInfo } from "../types/auth";
import API from "./../utiis/API";

const AuthAPI = {
  signUp: (data: IUserInfo) => {
    return API.post("/users/create", data);
  },
  login: (data: IUserInfo) => {
    return API.post("/users/login", data);
  },
};

export default AuthAPI;
