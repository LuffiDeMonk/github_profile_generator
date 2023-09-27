import React from "react";

const UserName = ({ name, twitter_username }) => {
  return (
    <div className="xl:pt-28 h-full">
      <h1 className="text-center text-black font-bold text-3xl">
        {name !== null ? name : "Not Available"}
      </h1>
      <h5 className="text-center text-md font-bold">
        {twitter_username !== null ? `@${twitter_username}` : "Not Available"}
      </h5>
    </div>
  );
};

export default UserName;
