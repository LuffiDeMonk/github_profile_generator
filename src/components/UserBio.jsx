import React from "react";

const UserBio = ({ bio }) => {
  return (
    <div className="border border-gray-400 rounded-sm px-10 pt-10 w-[491px] h-full space-y-2">
      <h2 className="text-lg font-bold text-[#2D2C2C]">Bio</h2>
      <p className="text-sm text-[#2D2C2C] leading-tight">
        {bio === null ? "Not available" : bio}
      </p>
    </div>
  );
};

export default UserBio;
