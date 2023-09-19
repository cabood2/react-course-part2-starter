import useAuth from "./hooks/useAuth";

const LoginStatus = () => {
  const { user, dispatch } = useAuth();
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "HIDE" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "SHOW", userName: "cassie.abood" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
