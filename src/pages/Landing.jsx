import React, { useState } from "react";
import Search from "../components/Search";

const Landing = () => {
  return (
    <div className="h-screen flex items-center justify-center font-Roboto">
      <div>
        <h1 className="text-2xl font-bold text-center">Github Profile</h1>
        <h5 className="text-sm text-center mb-4 md:mb-6">
          Generate your Github Profile
        </h5>
        <Search />
      </div>
    </div>
  );
};

export default Landing;
