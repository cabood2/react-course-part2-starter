import { Dispatch } from "react";
import { AuthAction } from "../Reducers/AuthReducer";
import React from "react";

interface loginStatusContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const loginStatusContext = React.createContext<loginStatusContextType>(
  {} as loginStatusContextType
);

export default loginStatusContext;
