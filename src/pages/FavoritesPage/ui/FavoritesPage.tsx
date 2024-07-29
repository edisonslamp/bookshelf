import useBookStore from "src/app/providers/StoreProvider";
import { BookGrid } from "src/widgets/BookGrid";

export const FavoritesPage = () => {
  const favorites = useBookStore((state) => state.favorites);
  return <BookGrid books={favorites} />;
};
