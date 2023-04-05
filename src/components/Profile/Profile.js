import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  let items = localStorage.getItem("register");
  const allUsers = JSON.parse(items);
  const jsonUser = localStorage.getItem("user");
  const loggedInUser = JSON.parse(jsonUser);
  let existingUser = null;

  useEffect(() => {
    if (!jsonUser) {
      navigate("/login", { replace: true });
    } else {
      existingUser = allUsers.find((registeredUser) => registeredUser.email === loggedInUser.email);
    }

  }, [])


  return <h2>Welcome to your profile, {existingUser?.username}</h2>;
};

export default Profile;
