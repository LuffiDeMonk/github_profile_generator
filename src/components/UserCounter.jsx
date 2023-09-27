import React from "react";

const UserCounter = ({ data }) => {
  return (
    <div className="flex justify-center gap-6 my-8">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl sm:text-3xl font-semibold text-center">
          {data?.followers !== null ? data?.followers : 0}
        </h2>
        <div className="bg-gray-200 text-sm font-semibold px-2 sm:px-5 py-1">
          Followers
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl sm:text-3xl font-semibold text-center">
          {data?.following !== null ? data?.following : 0}
        </h2>
        <div className="bg-gray-200 text-sm font-semibold px-2 sm:px-5 py-1">
          Following
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl sm:text-3xl font-semibold text-center">
          {data?.public_repos !== null ? data?.public_repos : 0}
        </h2>
        <div className="bg-gray-200 text-sm font-semibold px-2 sm:px-5 py-1">
          Repositories
        </div>
      </div>
    </div>
  );
};

export default UserCounter;
