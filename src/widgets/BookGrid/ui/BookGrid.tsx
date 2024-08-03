import Grid from "@mui/material/Grid";
import { FC, useEffect, useState } from "react";
import useBookStore from "src/app/providers/StoreProvider";
import { Book } from "src/entities/Book";
import { ToFavorites } from "src/features/Favorites";
import { Books } from "src/shared/api";

interface BookGridProps {
  books: Books[];
}
export const BookGrid: FC<BookGridProps> = ({ books }) => {
  const favorites = useBookStore((state) => state.favorites);
  const [favoriteBooks, setFavoriteBooks] = useState<Books[]>([]);

  useEffect(() => {
    setFavoriteBooks(
      books.map((book) => {
        return {
          ...book,
          volumeInfo: {
            ...book.volumeInfo,
            isFavorite: favorites.some(
              (favoriteBook) => favoriteBook.id === book.id
            ),
          },
        };
      })
    );
  }, [books, favorites]);

  return (
    <Grid
      sx={{ flexGrow: 1, justifyContent: "space-around" }}
      container
      spacing={2}
    >
      <Grid item xs={8}>
        <Grid container justifyContent="center" spacing={1}>
          {favoriteBooks?.map((book, index) => (
            <Grid key={index} item>
              <Book
                ToFavoriteIcon={
                  <ToFavorites
                    book={book}
                    isAddedToFavorites={book.volumeInfo.isFavorite}
                  />
                }
                title={book.volumeInfo.title}
                description={book.volumeInfo.description}
                year={book.volumeInfo.publishedDate}
                author={book.volumeInfo.authors}
                book_image={book.volumeInfo.imageLinks?.thumbnail}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
