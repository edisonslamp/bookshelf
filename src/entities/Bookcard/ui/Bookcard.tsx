import { FC } from "react";
import { MultiCard } from "src/shared/ui";
import { Book } from "../model/Book";

// questionable move
interface BookcardProps extends Book {}

export const Bookcard: FC<BookcardProps> = ({
  description,
  title,
  author,
  year,
  book_image,
}) => {
  return (
    <>
      <MultiCard
        description={description}
        title={title}
        author={author}
        year={year}
        image={book_image}
      />
    </>
  );
};
