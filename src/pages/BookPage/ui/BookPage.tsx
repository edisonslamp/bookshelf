import useBookStore from "src/app/providers/StoreProvider";
import { BookGrid } from "src/widgets/BookGrid";

export const BookPage = () => {
  const books = useBookStore((state) => state.books);

  return <BookGrid books={books} />;
};
