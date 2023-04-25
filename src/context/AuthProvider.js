import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const AuthProvider = (props) => {
  const [user, setUser] = useState("");
  let items = localStorage.getItem("register");
  const allUsers = JSON.parse(items);
  const jsonUser = localStorage.getItem("user");
  const loggedInUser = JSON.parse(jsonUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (jsonUser) {
      const x = allUsers?.find(
        (registeredUser) => registeredUser.email === loggedInUser.email
      );
      setUser(x);
    }
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>
      {props.children}
    </AuthContext.Provider>
  );
};
