import useBookStore from "src/app/providers/StoreProvider";
import { BookGrid } from "src/widgets/BookGrid";

export const WishlistPage = () => {
  const whishlist = useBookStore((state) => state.whishlist);

  return <BookGrid books={whishlist} />;
};
