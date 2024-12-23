import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signIn/SignIn";
import AllArtifacts from "../pages/AllArtifacts/AllArtifacts";
import AddArtifacts from "../pages/Add-Artifacts/AddArtifacts";
import MyArtifacts from "../pages/myArtifacts/MyArtifacts";
import MyLikedArtiacts from "../pages/myLikedArtifacts/MyLikedArtiacts";


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
        {
            path:"login",
            element:<SignIn></SignIn>
        },
        {
            path:"allArtifacts",
            element:<AllArtifacts></AllArtifacts>
        },
        {
            path:"add-artifacts",
            element:<AddArtifacts></AddArtifacts>
        },
        {
            path:"my-artifacts",
            element:<MyArtifacts></MyArtifacts>
        },
        {
            path:"my-liked-artifacts",
            element:<MyLikedArtiacts></MyLikedArtiacts>
        },
      ]
    },
  ]);

  export default Router