import { Bookcard } from "src/entities/Bookcard";
import { SpacingGrid } from "src/shared/ui";
import cls from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <>
      <h1>Main Page</h1>

      <div className={cls.MainPage}>
        {/* it must be in widgets as bookgrid */}
        <SpacingGrid>
          <Bookcard />
        </SpacingGrid>
      </div>
    </>
  );
};
