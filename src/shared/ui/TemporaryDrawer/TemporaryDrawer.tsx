import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import React, { FC } from "react";

interface TemporaryDrawerProps {
  isOpen: boolean;
  itemList: React.ReactNode[];
  handleClose: () => void;
}

export const TemporaryDrawer: FC<TemporaryDrawerProps> = ({
  isOpen,
  itemList,
  handleClose,
}) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleClose}>
      <List>{itemList}</List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer open={isOpen} onClose={handleClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
