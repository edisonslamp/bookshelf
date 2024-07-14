import axios from "axios";
import { GoogleBooksUrl } from "../base";
import { BookResponse } from "./types";

export const getBook = async (title: string) => {
  try {
    const response = await axios.get<BookResponse>(GoogleBooksUrl + title);
    return response.data.items;
  } catch (error) {
    console.log(error);
  }
};
