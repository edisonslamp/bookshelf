import Grid from "@mui/material/Grid";
import { FC } from "react";
import { Book, Bookcard } from "src/entities/Bookcard";

interface BookGridProps {
  books?: Book[];
}
export const BookGrid: FC<BookGridProps> = ({ books }) => {
  return (
    <Grid
      sx={{ flexGrow: 1, justifyContent: "space-around" }}
      container
      spacing={2}
    >
      <Grid item xs={8}>
        <Grid container justifyContent="center" spacing={1}>
          {books?.map((book) => (
            <Grid key={book.id} item>
              <Bookcard
                id={book.id}
                year={book.year}
                author={book.author}
                title={book.title}
                description={book.description}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
