import { FC } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import cls from "./Navigation.module.scss";

interface NavigationProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  handleClose: () => void;
}
export const Navigation: FC<NavigationProps> = ({
  isOpen,
  toggleSidebar,
  handleClose,
}) => {
  return (
    <div className={cls.Navigation}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};
