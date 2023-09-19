import React, { ReactNode, useReducer } from "react";
import loginStatusReducer from "./Reducers/AuthReducer";
import loginStatusContext from "./contexts/loginStatusContext";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginStatusReducer, "");

  return (
    <loginStatusContext.Provider value={{ user, dispatch }}>
      {children}
    </loginStatusContext.Provider>
  );
};

export default AuthProvider;
