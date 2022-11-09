import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/error-page";
import  RequireAuth  from "./pages/RequireAuth";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage/>
    },
    {
      path:"/products/:category",
      element: <ProductList />,
      errorElement: <ErrorPage/>
    },
    {
      path:"/product/:id",
      element: <Product />,
      errorElement: <ErrorPage/>
    }
    ,
    {
      path:"/cart",
      element: <Cart />,
      errorElement: <ErrorPage/>
    }
    ,
    {
      path:"/login",
      element: <RequireAuth><Login /></RequireAuth>,
      errorElement: <ErrorPage/>
    }
    ,
    {
      path:"/register",
      element: <Register />,
      errorElement: <ErrorPage/>
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  );
};

export default App;