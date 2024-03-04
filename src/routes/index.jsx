import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/home";
import SingleProduct from "../page/home/singleProduct";





  export const routes = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/shop/:id',
          element: <SingleProduct/>
        }
      ]
    },
  ]);

