import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <h2>Rout not found</h2>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"register",
            element:<Register></Register>
        },
      ]
    },
  ]);

  export default Router