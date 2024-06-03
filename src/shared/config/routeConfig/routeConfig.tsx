import { RouteProps } from "react-router-dom";
import { AboutPage } from "src/pages/AboutPage";
import { MainPage } from "src/pages/MainPage";
import { NotFoundPage } from "src/pages/NotFoundPage";

export const enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  // goes last
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
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

  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
