import Grid from "@mui/material/Grid";
import { FC } from "react";
import useBookStore from "src/app/providers/StoreProvider";
import { Book } from "src/entities/Book";
import { Books } from "src/shared/api";

interface BookGridProps {
  books?: Books[];
}
export const BookGrid: FC<BookGridProps> = ({ books }) => {
  const setFavorites = useBookStore((state) => state.setFavorites);

  return (
    <Grid
      sx={{ flexGrow: 1, justifyContent: "space-around" }}
      container
      spacing={2}
    >
      <Grid item xs={8}>
        <Grid container justifyContent="center" spacing={1}>
          {books?.map((book, index) => (
            <Grid key={index} item>
              <Book
                handleToFavorites={() => {
                  setFavorites(book);
                }}
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
