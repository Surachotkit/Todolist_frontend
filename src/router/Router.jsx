import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../components/Header";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        // layout
      <div className="bg-gray-200 h-screen">
        <Header/>
        <div className="p-8 max-w-xl mx-auto">

        <Outlet/>
        </div>

      </div>
    ),
    children: [
      { path: "/", element: <HomePage/> },
      { path: "/login", element: <LoginPage/> },
      { path: "/register", element: <RegisterPage/> },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
