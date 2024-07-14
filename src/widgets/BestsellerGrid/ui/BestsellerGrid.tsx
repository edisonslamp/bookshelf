import Grid from "@mui/material/Grid";
import { FC } from "react";
import { BestsellerBook, BestsellerBooks } from "src/entities/BestsellerBooks";

interface BestsellerGridProps {
  books?: BestsellerBook[];
}
export const BestsellerGrid: FC<BestsellerGridProps> = ({ books }) => {
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
              <BestsellerBooks
                year={book.year}
                author={book.author}
                title={book.title}
                description={book.description}
                book_image={book.book_image}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
