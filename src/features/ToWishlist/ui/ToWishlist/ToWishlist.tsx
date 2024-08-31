import { FC, useEffect, useState } from "react";
import useBookStore from "src/app/providers/StoreProvider";
import { Books } from "src/shared/api";
import { ToWishlistButton } from "src/shared/ui";

interface ToWishlistProps {
  book: Books;
  isAddedToWishlist: boolean;
}

export const ToWishlist: FC<ToWishlistProps> = ({
  book,
  isAddedToWishlist,
}) => {
  const setWishlist = useBookStore((state) => state.setWhishlist);
  const removeWishlist = useBookStore((state) => state.removeWhishlist);
  const [isAdded, setIsAdded] = useState(isAddedToWishlist);

  useEffect(() => {
    setIsAdded(isAddedToWishlist);
  }, [isAddedToWishlist]);

  const handleOnClick = () => {
    if (isAdded) {
      removeWishlist(book);
    }
    if (!isAdded) {
      setWishlist({
        ...book,
        volumeInfo: { ...book.volumeInfo, isInWishlist: true },
      });
    }
  };

  return (
    <ToWishlistButton
      isAddedToWishlist={isAddedToWishlist}
      onClick={handleOnClick}
    />
  );
};
