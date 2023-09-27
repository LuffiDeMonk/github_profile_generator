import React from "react";

const UserDetailCard = ({ iconImage, data, title }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-1 items-center">
        <img src={iconImage} alt="" />
        <p className="text-sm font-[400] text-[#7E7E7E] capitalize">{title}</p>
      </div>
      {title === "twitter" ? (
        <h3 className="text-lg font-bold">
          {data === null ? "Not Available" : `@${data}`}
        </h3>
      ) : (
        <h3 className="text-lg font-bold">
          {data?.length === 0 ? "Not available" : data}
        </h3>
      )}
    </div>
  );
};

export default UserDetailCard;
