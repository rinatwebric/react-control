import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../pages/layouts/MainLayout";
import { HomePage } from "../pages/HomePage";
import { CatalogPage } from "../pages/CatalogPage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { ProductPage } from "../pages/ProductPage";
import { RecentPage } from "../pages/RecentPage";
import { NotFoundPage } from "../pages/NotFoundPage";

import { getProducts, getProductById } from "../api/api";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "catalog", element: <CatalogPage />, loader: getProducts },
      { path: "favorites", element: <FavoritesPage /> },
      { path: "product/:id", element: <ProductPage />, loader: getProductById },
      { path: "recent", element: <RecentPage /> },
    ],
  },
]);