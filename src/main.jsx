import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'

import App from './App.jsx'
import Charts from './Charts.jsx';
import Contact from './Contact.jsx';
import Products from './Products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Charts",
    element: <Charts/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
  {
    path: "/Products",
    element: <Products/>,
  },
]);

createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />,
)
