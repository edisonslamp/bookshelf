import axios from "axios";
import useSWR from "swr";
import { bestsellersUrl } from "../../../const/bestsellersUrl";

const fetcher = async (url: string) => axios.get(url).then((res) => res.data);
export const useBestsellerBooks = () => {
  const { data, error, isLoading } = useSWR(bestsellersUrl, fetcher);

  return {
    bestsellerBooks: data?.results.books,
    isLoading,
    isError: error,
  };
};
