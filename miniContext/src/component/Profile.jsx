import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import "./profile.css";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div className="please">Please Login</div>;

  return <div className="welcome">Welcome {user.userName}</div>;
};

export default Profile;
