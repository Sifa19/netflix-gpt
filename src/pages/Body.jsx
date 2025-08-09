import { Outlet, RouterProvider } from "react-router-dom";
import appRouter from "../routes/AppRoutes";
import Header from "../components/navbar/Header";

function Body() {
  return (
    <>
      <Header />
      <RouterProvider router={appRouter}>
        <div>
          <Outlet />
        </div>
      </RouterProvider>
    </>
  );
}

export default Body;
