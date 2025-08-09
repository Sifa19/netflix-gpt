import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Body from "../pages/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />, // Body is your layout or main container
    children: [
      { index: true, element: <Login /> }, // Default page on "/"
      { path: "browse", element: <Home /> },
    ],
  },
]);

export default appRouter;
