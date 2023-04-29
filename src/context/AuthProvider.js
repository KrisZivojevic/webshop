import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const AuthProvider = (props) => {
  const [user, setUser] = useState("");
  let items = localStorage.getItem("register");
  const storageUsers = JSON.parse(items);
  const jsonUser = localStorage.getItem("user");
  const storageUser = JSON.parse(jsonUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (jsonUser) {
      const loggedInUser = storageUsers?.find(
        (registeredUser) => registeredUser.email === storageUser.email
      );
      setUser(loggedInUser);
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("user")
    setUser("");
  }

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
