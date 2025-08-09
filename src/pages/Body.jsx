import { Outlet, RouterProvider } from "react-router-dom";
import appRouter from "../routes/AppRoutes";
import Header from "../components/navbar/Header";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../config/firebase";

import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { useDispatch } from "react-redux";

function Body() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ id: uid, email, name: displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <>
      <Header />
      <RouterProvider router={appRouter}>
        <Outlet />
      </RouterProvider>
    </>
  );
}

export default Body;
