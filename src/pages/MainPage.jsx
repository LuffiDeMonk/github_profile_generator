import React from "react";
import { useParams } from "react-router-dom";
import NavigationButton from "../components/NavigationButton";
import UserInfoContainer from "../components/UserInfoContainer";
import { getUserData } from "../utils/getUserData";
import Loader from "../components/Loader";
import Error from "../components/Error";

const MainPage = () => {
  const params = useParams();
  const { user } = params;
  const { data, isLoading, isError } = getUserData(user);
  if (!isLoading && isError) {
    return <Error />;
  }
  if (isLoading) {
    return <Loader />;
  }
  console.log(data);

  return (
    <div className="flex flex-col gap-10 px-3 sm:px-10 py-4 font-Roboto">
      <NavigationButton hireable={data?.hireable} />
      <UserInfoContainer data={data} />
    </div>
  );
};

export default MainPage;
