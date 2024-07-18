import { FC } from "react";

import { MultiCard } from "src/shared/ui";
import { BestsellerBook } from "../model/types";

// questionable move
interface BookcardProps extends BestsellerBook {
  year: string;
  author: string[];
  description: string;
  book_image: string;
  title: string;
  handleToFavorites: () => void;
}

export const BestsellerBooks: FC<BookcardProps> = ({
  year,
  author,
  description,
  book_image,
  title,
  handleToFavorites,
}) => {
  return (
    <>
      <MultiCard
        handleToFavorites={handleToFavorites}
        description={description}
        title={title}
        author={author}
        year={year}
        image={book_image}
      />
    </>
  );
};
