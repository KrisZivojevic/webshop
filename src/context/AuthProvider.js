import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthProvider = (props) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [register, setRegister] = useLocalStorage("register", []);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }
  }, [navigate, user]);

  const isUserRegistered = (email) => {
    const getRegisteredUser = register.find((user) => user.email === email);

    return getRegisteredUser ? getRegisteredUser : null;
  };

  const onRegistration = (user) => {
    if (isUserRegistered(user.email)) {
      return null;
    }

    setRegister([...register, user]);
    login({ username: user.username, email: user.email });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
  };

  const login = (values = { username: "", email: "" }) => {
    setUser({ username: values.username, email: values.email });
    setIsLoggedIn(true);

    setTimeout(() => {
      navigate("/profile", { replace: true });
    }, 500);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
        login,
        isLoggedIn,
        isUserRegistered,
        onRegistration,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
