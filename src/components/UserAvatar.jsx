import React from "react";
import Avatar from "../assets/Avatar.png";

const UserAvatar = ({ avatar_url }) => {
  return (
    <div className="w-20 h-20 sm:w-36 sm:h-36 rounded-full bg-white absolute left-1/2 -translate-x-1/2 -top-20 sm:-top-36 translate-y-1/2 flex items-center justify-center text-white overflow-hidden">
      <img src={avatar_url?.length !== 0 ? avatar_url : Avatar} alt="" />
    </div>
  );
};

export default UserAvatar;
