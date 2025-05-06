import { createBrowserRouter } from "react-router-dom";
import App from "../view/InputForm";
import BaseLayout from "../components/baselayout";
import ListCustomer from "../view/listcustomer";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/listcustomer",
        element: <ListCustomer />,
      },
    ],
  },
]);

export default router;
