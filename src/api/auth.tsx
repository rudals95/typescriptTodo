import { IUserInfo } from "../types/auth";
import API from "./../utiis/API";

const AuthAPI = {
  signUp: (data: IUserInfo) => {
    return API.post("/users/register", data);
  },
  login: (data: IUserInfo) => {
    return API.post("/users/login", data);
  },
};

export default AuthAPI;
