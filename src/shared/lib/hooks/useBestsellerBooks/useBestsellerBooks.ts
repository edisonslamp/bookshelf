import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { GoogleBooksUrlByISBN } from "src/shared/api/base";
import { BookResponse, Books } from "src/shared/api/book/types";
import { bestsellersUrl } from "../../../const/bestsellersUrl";

export const useBestsellerBooks = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();
  const [bestsellerBooks, setBestsellerBooks] = useState<Books[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      setError(undefined);

      const books: Books[] = [];
      try {
        const { data } = await axios.get(bestsellersUrl);
        if (data.status !== "OK") {
          throw new Error(`An error occured: ${data.error}`);
        }

        for (let i = 0; i < data?.results.books.length; i++) {
          const isbn = data?.results.books[i].primary_isbn13;
          const response = await axios.get<BookResponse>(
            GoogleBooksUrlByISBN + isbn
          );
          books.push({
            ...response.data.items[0],
            volumeInfo: {
              ...response.data.items[0].volumeInfo,
              isFavorite: false,
            },
          });
        }
        setBestsellerBooks(books);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();

    return () => {
      setBestsellerBooks([]);
    };
  }, []);

  return {
    bestsellerBooks,
    isLoading,
    error,
  };
};
