import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: "kamala",
      email: "kamala@gamil.com",
    });
  };
  const handleLogut = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogut}>LogOut </button>
      <h4>User name is {userContext.user?.name}</h4>
      <h4>User name is {userContext.user?.email}</h4>
    </div>
  );
};
