import BookmarkIcon from "@mui/icons-material/Bookmark";
import { IconButton } from "@mui/material";
import { FC } from "react";

interface FavoriteButtonProps {
  isAddedToWishlist: boolean;
  onClick: () => void;
}

export const ToWishlistButton: FC<FavoriteButtonProps> = ({
  isAddedToWishlist,
  onClick,
}) => {
  return (
    <IconButton aria-label="add to wishlist" onClick={onClick}>
      <BookmarkIcon sx={{ color: isAddedToWishlist ? "red" : "none" }} />
    </IconButton>
  );
};
