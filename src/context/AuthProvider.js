import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthProvider = (props) => {
  const [profile, setProfile] = useState("");
  const [user, setUser] = useLocalStorage("user", null);
  const [register, setRegister] = useLocalStorage("register", []);
  const navigate = useNavigate();

  useEffect(() => {
    if (!profile) {
      const loggedInUser = register?.find(
        (registeredUser) => registeredUser.email === user?.email
      );
      if (loggedInUser) {
        setUser({ username: loggedInUser.username, email: loggedInUser.email });
        setProfile({ username: loggedInUser.username, email: loggedInUser.email });
      }
    }
  }, [navigate]);

  const logout = () => {
    setUser(null);
    setProfile("");
  };
  const login = (values = { username: '', email: ''}) => {
    setUser({ username: values.username, email: values.email });
    navigate("/profile", { replace: true });
    setProfile({ username: values.username, email: values.email });
  };

  if (navigate)

  return (
    <AuthContext.Provider value={{ profile, logout, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};
