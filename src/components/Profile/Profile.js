import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { profile } = useContext(AuthContext);

  return (
    <h2 className={classes.profile__heading}>
      Welcome to your profile, {profile.username}
    </h2>
  );
};

export default Profile;
