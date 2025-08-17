import { Outlet, RouterProvider } from "react-router-dom";
import Header from "../components/navbar/Header";

function Body() {
  return (
    <div className="box-border">
      <Header />
      <Outlet />
    </div>
  );
}

export default Body;
