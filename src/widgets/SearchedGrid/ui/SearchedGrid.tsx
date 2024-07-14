import Grid from "@mui/material/Grid";
import { FC } from "react";
import { SearchedBooks } from "src/entities/SearchedBooks";
import { Book } from "src/shared/api";

interface SearchedGridProps {
  books?: Book[];
}
export const SearchedGrid: FC<SearchedGridProps> = ({ books }) => {
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
              <SearchedBooks
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
