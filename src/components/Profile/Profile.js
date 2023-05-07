import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import classes from "./Profile.module.css";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <h2 className={classes.profile__heading}>
      Welcome to your profile, {user.username}
    </h2>
  );
};

export default Profile;
