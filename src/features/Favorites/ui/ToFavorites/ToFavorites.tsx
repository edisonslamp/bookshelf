import { FC, useEffect, useState } from "react";
import useBookStore from "src/app/providers/StoreProvider";
import { Books } from "src/shared/api";
import { FavoriteButton } from "src/shared/ui";

interface ToFavoritesProps {
  book: Books;
  isAddedToFavorites: boolean;
}

export const ToFavorites: FC<ToFavoritesProps> = ({
  book,
  isAddedToFavorites,
}) => {
  const setFavorites = useBookStore((state) => state.setFavorites);
  const removeFavorites = useBookStore((state) => state.removeFavorites);
  const [isFavorite, setIsFavorite] = useState(isAddedToFavorites);

  useEffect(() => {
    setIsFavorite(isAddedToFavorites);
  }, [isAddedToFavorites]);

  const handleOnClick = () => {
    if (isFavorite) {
      removeFavorites(book);
    }
    if (!isFavorite) {
      setFavorites({
        ...book,
        volumeInfo: { ...book.volumeInfo, isFavorite: true },
      });
    }
  };

  return (
    <FavoriteButton isFavorite={isAddedToFavorites} onClick={handleOnClick} />
  );
};
