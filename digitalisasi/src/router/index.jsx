import { createBrowserRouter } from "react-router-dom";
import App from "../view/InputForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
