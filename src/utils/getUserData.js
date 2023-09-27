import { useQuery } from "react-query";
import Axios from "axios";

const queryHandler = async (term) => {
  const { data } = await Axios.get(`https://api.github.com/users/${term}`);
  return data;
};

export const getUserData = (term) => {
  const { data, isLoading, isError } = useQuery(
    ["profile", term],
    () => queryHandler(term),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, isLoading, isError };
};
