import React from "react";
import { DateTime } from "luxon";
import UserBio from "./UserBio";
import UserDetailCard from "./UserDetailCard";

import Email from "../assets/Email.png";
import Location from "../assets/Location.png";
import Twitter from "../assets/Twitter.png";
import Organization from "../assets/Organization.png";
import Calender from "../assets/Calender.png";
import Website from "../assets/Website.png";

const UserDetails = ({ data }) => {
  return (
    <div className="px-10 md:px-28 h-64 flex flex-col lg:flex-row items-center justify-center gap-12">
      <div className="border border-gray-400 rounded-sm p-10 w-[491px] h-full flex items-center justify-between gap-4">
        <div className="h-full w-full flex flex-col justify-between">
          <UserDetailCard title="Email" iconImage={Email} data={data?.email} />
          <UserDetailCard
            title="location"
            iconImage={Location}
            data={data?.location}
          />
          <UserDetailCard
            title="twitter"
            iconImage={Twitter}
            data={data?.twitter_username}
          />
        </div>
        <div className="h-full w-full flex flex-col justify-between">
          <UserDetailCard
            title="organization"
            iconImage={Organization}
            data={data?.company}
          />
          <UserDetailCard
            title="joined Date"
            iconImage={Calender}
            data={DateTime.fromISO(data?.created_at).toLocaleString(
              DateTime.DATE_FULL
            )}
          />
          <UserDetailCard
            title="website"
            iconImage={Website}
            data={data?.blog}
          />
        </div>
      </div>
      <UserBio bio={data?.bio} />
    </div>
  );
};

export default UserDetails;
