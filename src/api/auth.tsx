import { IUserInfo } from "../types/auth";
import API from "./../utiis/API";

const AuthAPI = {
  signUp: (data: IUserInfo) => {
    return API.post("/users/register", data);
  },
  login: (data: IUserInfo) => {
    return API.post("/users/login", data);
  },
  assign: (userName: string) => {
    return API.post(`/user/assign-admin/${userName}`);
  },
};

export default AuthAPI;
