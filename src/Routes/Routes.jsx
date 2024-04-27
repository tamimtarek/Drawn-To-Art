import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Cards from "../Pages/Cards/Cards";
import MyList from "../Pages/MyList/MyList";
import AddCraft from "../Pages/AddCraft/AddCraft";
import PrivetRoute from "./PrivetRoute";
import UpdateItems from "../Pages/UpdateItems/UpdateItems";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/allArt",
          element: <Cards></Cards>
        },
        {
          path: "/mylist",
          element: <PrivetRoute><MyList></MyList></PrivetRoute>
        },
        {
          path: "/addArtCraft",
          element: <PrivetRoute><AddCraft></AddCraft></PrivetRoute>
        },
        {
          path: "/update",
          element: <UpdateItems></UpdateItems>
        }
      ]
    },
  ]);

export default router;