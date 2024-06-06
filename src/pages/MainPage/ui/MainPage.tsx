import { useBestsellerBooks } from "src/shared/lib";
import { BookGrid } from "src/widgets/BookGrid";

// const mockBook: Book[] = [
//   {
//     id: 1,
//     description: "description1",
//     title: "title1",
//     author: "author1",
//     year: 2022,
//   },
//   {
//     id: 2,
//     description: "description2",
//     title: "title2",
//     author: "author2",
//     year: 2023,
//   },
//   {
//     id: 3,
//     description: "description3",
//     title: "title3",
//     author: "author3",
//     year: 2024,
//   },
// ];

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
