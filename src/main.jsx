import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Meals from './components/Meals/Meals';
import MealDetails from './components/MealDetails/MealDetails';
import Comments from './components/Comments/Comments';
import CmtD from './components/CmtD/CmtD';


const router = new createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [

      {
        path: '/meals',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
        element: <Meals></Meals>
      }, {
        path: '/meal/:idMeal',
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element: <MealDetails></MealDetails>

      },

      {
        path: '/comments',
        loader: () => fetch('https://jsonplaceholder.typicode.com/comments'),
        element: <Comments></Comments>
      },
      {
        path: '/comment/:commentId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        element: <CmtD></CmtD>
      }
    ]
  }



]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
