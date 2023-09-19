interface ShowAction {
  type: "SHOW";
  userName: string;
}
interface HideAction {
  type: "HIDE";
}

export type AuthAction = ShowAction | HideAction;

const loginStatusReducer = (user: string, action: AuthAction): string => {
  switch (action.type) {
    case "SHOW":
      return action.userName;
    case "HIDE":
      return "";
  }
};

export default loginStatusReducer;
