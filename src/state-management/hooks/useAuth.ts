import { useContext } from "react";
import loginStatusContext from "../contexts/loginStatusContext";

const useAuth = () => useContext(loginStatusContext);

export default useAuth;
