import App from "@/App";
import LogIn from "@/pages/LogIn/LogIn";
import Tasks from "@/pages/Tasks/Tasks";
import Users from "@/pages/Users/Users";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "/profile",
        element: <h1>This is profile page.</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);
