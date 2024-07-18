import { BestsellerBook } from "src/entities/BestsellerBooks";
import { Book } from "src/shared/api";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface BookStore {
  books: Book[];
  favorites: BestsellerBook[];
  setBooks: (books: Book[] | undefined) => void;
  setFavorites: (favoriteBook: BestsellerBook) => void;
}

const useBookStore = create<BookStore>()(
  persist(
    (set) => ({
      books: [],
      favorites: [],
      setBooks: (books: Book[] | undefined) => set({ books }),
      setFavorites: (favoriteBook: BestsellerBook) => {
        set((state) =>
          state.favorites.includes(favoriteBook)
            ? { favorites: [...state.favorites] }
            : { favorites: [...state.favorites, favoriteBook] }
        );
      },
    }),
    {
      name: "bookshelf-storage", // unique name
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useBookStore;
