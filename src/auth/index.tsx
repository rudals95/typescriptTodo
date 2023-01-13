import { Outlet, Navigate } from "react-router-dom";

const Auth = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const token = localStorage.getItem("user");

  if (isAuthenticated) {
    return token ? <Outlet /> : <Navigate to="/login" />;
  } else {
    return token ? <Navigate to="/home" /> : <Outlet />;
  }
};

export default Auth;
