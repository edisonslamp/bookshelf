import { FC } from "react";
import { MultiCard } from "../../../shared/ui";

interface BookcardProps {
  description: string;
  title: string;
  author: string;
  year: number;
}

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
