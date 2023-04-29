import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Dropdown = (props) => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
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
      <li onClick={logout}>
        <NavLink to="/">Log Out</NavLink>
      </li>
    </ul>
  );
};

export default Dropdown;
