import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Ladies from './pages/Ladies.jsx';
import Men from './pages/Men.jsx';
import GiftCard from './pages/GiftCard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/men",
    element: <Men/>,
  },
  {
    path: "/ladies",
    element: <Ladies/>,
  },
  {
    path: "/giftCard",
    element: <GiftCard/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)
