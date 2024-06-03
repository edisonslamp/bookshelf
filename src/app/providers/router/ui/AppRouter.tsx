import { RouteObject, useRoutes } from "react-router-dom";
import { routeConfig } from "src/shared/config";

export const AppRouter = () => {
  const elements: RouteObject[] = [];

  Object.values(routeConfig).map(({ path, element }) =>
    elements.push({ path, element })
  );
  const element = useRoutes(elements);
  return element;
};
