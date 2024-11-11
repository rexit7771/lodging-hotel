import { createBrowserRouter, redirect } from "react-router-dom";
import FormAddLodging from "./components/FormAddLodging";
import Lodgings from "./components/Lodgings";
import Login from "./components/login";
import Pagination from "./components/pagination";
import Register from "./components/register";
import SearchComponent from "./components/searchComponent";
import TableLodgings from "./components/tableLodgings";
import UpdateImageUrl from "./components/updateImage";
import LodgingById from "./components/LodgingById";
import RootLayout from "./layouts/RootLayout";
import RootCMS from "./layouts/RootCMS";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    // loader: () => {
    //   const access_token = localStorage.getItem("access_token");
    //   if (access_token) {
    //     throw redirect("/");
    //   }
    //   return null;
    // },
  },
  {
    path: "/pub/lodgings",
    element: <RootLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <Lodgings />,
      },
      {
        path: ":id",
        element: <LodgingById />,
      },
    ],
  },
  {
    path: "/",
    element: <RootCMS />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        return null;
      }
      throw redirect("/login");
    },
    children: [
      {
        path: "",
        index: true,
        element: <TableLodgings />,
      },
      {
        path: "/add-user",
        element: <Register />,
      },
      {
        path: "/create",
        element: <FormAddLodging form={"addLodging"} />,
      },
      {
        path: "/edit/:id",
        element: <FormAddLodging form={"edit"} />,
      },
    ],
  },
]);
