import useBookStore from "src/app/providers/StoreProvider";
import { SearchedGrid } from "src/widgets/SearchedGrid";

export const BookPage = () => {
  const books = useBookStore((state) => state.books);

  return <SearchedGrid books={books} />;
};
