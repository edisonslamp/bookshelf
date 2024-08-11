import { Books } from "src/shared/api";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface BookStore {
  books: Books[];
  favorites: Books[];
  whishlist: Books[];
  setBooks: (books: Books[] | undefined) => void;
  setFavorites: (favoriteBook: Books) => void;
  setWhishlist: (whishlistBook: Books) => void;
  removeFavorites: (favoriteBook: Books) => void;
  removeWhishlist: (whishlistBook: Books) => void;
}

const useBookStore = create<BookStore>()(
  persist(
    (set) => ({
      books: [],
      favorites: [],
      whishlist: [],
      setBooks: (books: Books[] | undefined) => set({ books }),
      setFavorites: (favoriteBook: Books) => {
        set((state) =>
          state.favorites.some((book) => book.id === favoriteBook.id)
            ? { favorites: [...state.favorites] }
            : { favorites: [...state.favorites, favoriteBook] }
        );
      },

      setWhishlist: (whishlistBook: Books) => {
        set((state) =>
          state.whishlist.some((book) => book.id === whishlistBook.id)
            ? { whishlist: [...state.whishlist] }
            : { whishlist: [...state.whishlist, whishlistBook] }
        );
      },

      removeWhishlist: (whishlistBook: Books) => {
        set((state) => ({
          whishlist: state.whishlist.filter(
            (book) => book.id !== whishlistBook.id
          ),
        }));
      },

      removeFavorites: (favoriteBook: Books) => {
        set((state) => ({
          favorites: state.favorites.filter(
            (book) => book.id !== favoriteBook.id
          ),
        }));
      },
    }),
    {
      name: "bookshelf-storage", // unique name
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useBookStore;
