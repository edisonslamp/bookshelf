import axios from "axios";
import { GoogleBooksUrl } from "../base";
import { BookResponse, Books } from "./types";

export const getBook = async (title: string) => {
  try {
    const response = await axios.get<BookResponse>(GoogleBooksUrl + title);
    const books: Books[] = response.data.items;
    books.map((book) => {
      book.volumeInfo.isFavorite = false;
      book.volumeInfo.isInWishlist = false;
    });

    return books;
  } catch (error) {
    console.log(error);
  }
};
