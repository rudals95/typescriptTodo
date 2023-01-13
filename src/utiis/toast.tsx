import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const success = (text: string) => toast.success(text, { position: "top-center" });
export const error = (text: string) => toast.error(text, { position: "top-center" });

export const Toast: React.FC = () => {
  return <ToastContainer />;
};
