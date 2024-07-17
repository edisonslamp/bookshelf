import { FC } from "react";
import { Search } from "src/features/SearchBook";
import { SearchAppBar } from "src/shared/ui";

interface NavbarProps {
  toggleSidebar: () => void;
}

export const Navbar: FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <div>
      <SearchAppBar onClick={toggleSidebar}>
        <Search />
      </SearchAppBar>
    </div>
  );
};
