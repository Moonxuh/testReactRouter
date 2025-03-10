import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './views/Login/Login.jsx';
import Home from './views/Home/Home.jsx';
import Products from './views/Products/Products.jsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/products/:productId",
    element: <Products />,
  },
  {
    path: "/pay",
    element: <Pay title='Contador' lista={["maca", "pera", "uva"]} />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
