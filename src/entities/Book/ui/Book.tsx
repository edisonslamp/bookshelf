import { FC } from "react";
import { MultiCard } from "src/shared/ui";

interface BookProps {
  title: string;
  author: string[];
  description: string;
  book_image: string;
  year: string;
  handleToFavorites: () => void;
}

export const Book: FC<BookProps> = ({
  title,
  author,
  description,
  book_image,
  year,
  handleToFavorites,
}) => {
  return (
    <MultiCard
      handleToFavorites={handleToFavorites}
      title={title}
      author={author}
      description={description}
      image={book_image}
      year={year}
    ></MultiCard>
  );
};
