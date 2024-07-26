import { grey } from "@mui/material/colors";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FC } from "react";
import { Link } from "react-router-dom";
import { SidebarItemType } from "../../model/items";

interface SidebarItemProps {
  item: SidebarItemType;
}

export const SidebarItem: FC<SidebarItemProps> = ({ item }) => {
  return (
    <Link to={item.path} style={{ textDecoration: "none", color: grey[600] }}>
      <ListItem key={item.text} disablePadding>
        <ListItemButton>
          <ListItemIcon>{<item.Icon />}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};
