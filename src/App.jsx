import Body from "./pages/Body";
import appRouter from "./routes/appRoutes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <RouterProvider router={appRouter}>
      <Body />
    </RouterProvider>
  );
}

export default App;
