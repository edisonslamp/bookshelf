import CloseIcon from "@mui/icons-material/Close";
import { IconButton, InputAdornment } from "@mui/material";
import { FC } from "react";
interface EndAdornmentProps {
  onClick: (e: any) => void;
}
export const EndAdornment: FC<EndAdornmentProps> = ({ onClick }) => {
  return (
    <>
      <InputAdornment position="end" onClick={onClick}>
        <IconButton size="small" edge="start" color="inherit">
          <CloseIcon fontSize="small" sx={{ color: "white" }} />
        </IconButton>
      </InputAdornment>
    </>
  );
};
