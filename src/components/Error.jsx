import React from "react";
import NavigationButton from "./NavigationButton";

const Error = ({ message }) => {
  return (
    <div className="flex h-screen flex-col gap-12">
      <NavigationButton hireable={false} />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600">No User Found</h1>
      </div>
    </div>
  );
};

export default Error;
