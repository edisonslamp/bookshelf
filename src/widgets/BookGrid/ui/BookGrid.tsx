import Grid from "@mui/material/Grid";
import { FC, useEffect, useState } from "react";
import useBookStore from "src/app/providers/StoreProvider";
import { Book } from "src/entities/Book";
import { ToFavorites } from "src/features/Favorites";
import { ToWishlist } from "src/features/ToWishlist";
import { Books } from "src/shared/api";

interface BookGridProps {
  books: Books[];
}
export const BookGrid: FC<BookGridProps> = ({ books }) => {
  const favorites = useBookStore((state) => state.favorites);
  const wishlist = useBookStore((state) => state.whishlist);
  const [sortedBooks, setSortedBooks] = useState<Books[]>([]);

  useEffect(() => {
    setSortedBooks(
      books.map((book) => {
        return {
          ...book,
          volumeInfo: {
            ...book.volumeInfo,
            isFavorite: favorites.some(
              (favoriteBook) => favoriteBook.id === book.id
            ),
            isInWishlist: wishlist.some(
              (wishlistBook) => wishlistBook.id === book.id
            ),
          },
        };
      })
    );
  }, [books, favorites, wishlist]);

  return (
    <Grid
      sx={{ flexGrow: 1, justifyContent: "space-around" }}
      container
      spacing={2}
    >
      <Grid item xs={8}>
        <Grid container justifyContent="center" spacing={1}>
          {sortedBooks?.map((book, index) => (
            <Grid key={index} item>
              <Book
                ToFavoriteIcon={
                  <ToFavorites
                    book={book}
                    isAddedToFavorites={book.volumeInfo.isFavorite}
                  />
                }
                ToWishlistIcon={
                  <ToWishlist
                    book={book}
                    isAddedToWishlist={book.volumeInfo.isInWishlist}
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
