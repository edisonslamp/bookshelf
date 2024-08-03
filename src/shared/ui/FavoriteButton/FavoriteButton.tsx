import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { FC } from "react";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({
  isFavorite,
  onClick,
}) => {
  return (
    <IconButton aria-label="add to favorites" onClick={onClick}>
      <FavoriteIcon sx={{ color: isFavorite ? "red" : "none" }} />
    </IconButton>
  );
};
