import axios from "axios";
import { GoogleBooksUrl } from "../base";

export const getBook = async (title: string) => {
  try {
    const response = await axios.get(GoogleBooksUrl + title);
    return response.data?.items;
  } catch (error) {
    console.log(error);
  }
};
