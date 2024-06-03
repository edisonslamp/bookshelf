import { FC } from "react";
import { MultiCard } from "src/shared/ui";
import { BookcardType } from "../model/BookcardType";

// questionable move
interface BookcardProps extends BookcardType {}

export const Bookcard: FC<BookcardProps> = ({
  description,
  title,
  author,
  year,
}) => {
  return (
    <>
      <MultiCard
        description={description}
        title={title}
        author={author}
        year={year}
      />
    </>
  );
};
