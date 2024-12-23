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
import Details from "../pages/Details/Details";


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
            element:<AllArtifacts></AllArtifacts>,
            loader: ()=> fetch('http://localhost:5000/artifacts')
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
        {
            path:"details/:id",
            element:<Details></Details>,
            loader:({params})=>fetch(`http://localhost:5000/artifacts/${params.id}`)
        },
      ]
    },
  ]);

  export default Router