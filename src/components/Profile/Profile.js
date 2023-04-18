import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <h2 style={{ paddingTop: "100px" }}>
      Welcome to your profile, {user.username}
    </h2>
  );
};

export default Profile;
