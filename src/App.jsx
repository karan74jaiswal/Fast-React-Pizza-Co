import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import NotFound from "./ui/Error";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <NotFound />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        errorElement: <NotFound />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
