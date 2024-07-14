import { Book } from "src/shared/api";
import { create } from "zustand";

interface BookStore {
  books: Book[];
  setBooks: (books: Book[] | undefined) => void;
}

const useBookStore = create<BookStore>((set) => ({
  books: [],
  setBooks: (books: Book[] | undefined) => set({ books }),
}));

export default useBookStore;
