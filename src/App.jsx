import { RouterProvider } from "react-router-dom";
import { router } from "./router/router"; // Путь к файлу, где создан createBrowserRouter

export default function App() {
  return <RouterProvider router={router} />;
}