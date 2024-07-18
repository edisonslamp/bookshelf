import { FC } from "react";
import { MultiCard } from "src/shared/ui";

interface SearchedBooks {
  title: string;
  author: string[];
  description: string;
  book_image: string;
  year: string;
}

export const SearchedBooks: FC<SearchedBooks> = ({
  title,
  author,
  description,
  book_image,
  year,
}) => {
  const handleToFavorites = () => {
    console.log("handleToFavorites");
  };
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
