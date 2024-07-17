import { RouteProps } from "react-router-dom";
import { AboutPage } from "src/pages/AboutPage";
import { BookPage } from "src/pages/BookPage";
import { FavoritesPage } from "src/pages/FavoritesPage";
import { MainPage } from "src/pages/MainPage";
import { NotFoundPage } from "src/pages/NotFoundPage";
import { WishlistPage } from "src/pages/WishlistPage";

export const enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  BOOK = "book",
  FAVORITES = "favorites",
  WISHLIST = "wishlist",
  // goes last
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.BOOK]: "/book",
  [AppRoutes.FAVORITES]: "/favorites",
  [AppRoutes.WISHLIST]: "/wishlist",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },

  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },

  [AppRoutes.BOOK]: {
    path: RoutePath.book,
    element: <BookPage />,
  },

  [AppRoutes.FAVORITES]: {
    path: RoutePath.favorites,
    element: <FavoritesPage />,
  },

  [AppRoutes.WISHLIST]: {
    path: RoutePath.wishlist,
    element: <WishlistPage />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
