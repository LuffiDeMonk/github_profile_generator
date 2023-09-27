import React from "react";

import UserAvatar from "./UserAvatar";
import UserName from "./UserName";
import UserCounter from "./UserCounter";
import UserDetails from "./UserDetails";

const UserInfoContainer = ({ data }) => {
  return (
    <div className="relative xl:h-[686px] border border-black rounded-md">
      <div className="flex items-center justify-center flex-col">
        <UserAvatar avatar_url={data?.avatar_url} />
        <UserName name={data?.name} twitter_username={data?.twitter_username} />
        <UserCounter data={data} />
        <UserDetails data={data} />
      </div>
    </div>
  );
};

export default UserInfoContainer;
