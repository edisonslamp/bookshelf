import { FC } from "react";
import { TemporaryDrawer } from "src/shared/ui";

interface SidebarProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ isOpen, handleClose }) => {
  return (
    <div>
      <TemporaryDrawer isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};
