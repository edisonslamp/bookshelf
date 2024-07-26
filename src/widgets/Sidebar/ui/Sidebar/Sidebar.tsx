import { FC, memo, useMemo } from "react";
import { TemporaryDrawer } from "src/shared/ui";
import { SidebarItemList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface SidebarProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const Sidebar: FC<SidebarProps> = memo(({ isOpen, handleClose }) => {
  const itemList = useMemo(() => {
    return SidebarItemList.map((item) => (
      <SidebarItem item={item} key={item.path} />
    ));
  }, []);
  return (
    <div>
      <TemporaryDrawer
        isOpen={isOpen}
        itemList={itemList}
        handleClose={handleClose}
      />
    </div>
  );
});
