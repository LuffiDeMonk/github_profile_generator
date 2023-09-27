import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (term?.includes("/")) {
      return console.log("Username must not contain /");
    }
    navigate(`/${term}`);
  };
  return (
    <form
      className="flex flex-col md:flex-row gap-4 md:w-screen md:justify-center"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        placeholder="Github UserName"
        className="p-2 rounded-md border border-black bg-gray-200/50 text-sm placeholder:text-xs outline-none focus:outline-none md:w-[30%]"
      />
      <button
        type="submit"
        className="p-2 text-xs text-white bg-[#F24E1E] rounded-md md:w-[12%]"
      >
        Generate
      </button>
    </form>
  );
};

export default Search;
