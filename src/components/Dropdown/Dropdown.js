import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Dropdown = () => {
  const { logout, profile } = useContext(AuthContext);
  const [user, setUser] = useLocalStorage("user", null);

  let existingUser = <>Loading...</>

  const onLogout = () => {
    setUser(null)
    logout()
  }
  
  if (profile === "") {
    return (
      <ul>
        <li>
          <NavLink to="/register">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
      </ul>
    );
  }

  return (
    <ul>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li onClick={onLogout}>
        <NavLink to="/">Log Out</NavLink>
      </li>
    </ul>
  );
};

export default Dropdown;
