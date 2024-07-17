import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: OverridableComponent<SvgIconTypeMap<Record<string, never>, "svg">> & {
    muiName: string;
  };
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: "/favorites",
    text: "Favorites",
    Icon: FavoriteIcon,
  },
  {
    path: "/wishlist",
    text: "Want to read",
    Icon: BookmarkIcon,
  },
];
