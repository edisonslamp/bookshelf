import { useBestsellerBooks } from "src/shared/lib";
import { BookGrid } from "src/widgets/BookGrid";

export const MainPage = () => {
  const { bestsellerBooks, isLoading, isError } = useBestsellerBooks();

  if (isError) {
    return <h1>{isError.message}</h1>;
  }

  return (
    <>
      <h1>Top bestsellers</h1>
      {isLoading ? <h1>Loading...</h1> : <BookGrid books={bestsellerBooks} />}
    </>
  );
};
