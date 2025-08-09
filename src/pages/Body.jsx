import { Outlet, RouterProvider } from "react-router-dom";
import Header from "../components/navbar/Header";

function Body() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Body;
