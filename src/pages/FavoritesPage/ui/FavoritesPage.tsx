import useBookStore from "src/app/providers/StoreProvider";
import { BestsellerGrid } from "src/widgets/BestsellerGrid";

export const FavoritesPage = () => {
  const favorites = useBookStore((state) => state.favorites);
  return <BestsellerGrid books={favorites} />;
};
