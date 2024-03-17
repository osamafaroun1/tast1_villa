import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Properties from './pages/Properties/Properties.jsx'
import PropertyDetails from './pages/PropertyDetails/PropertyDetails.jsx';
import ContactUs from './pages/ContactUs/ContactUs.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/tast1_villa",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/tast1_villa',
        element: <Home />,
      },
      {
        path: '/tast1_villa/Properties',
        element: <Properties />
      },
      {
        path: "/tast1_villa/propertyDetails",
        element: <PropertyDetails />
      },
      {
        path: "/tast1_villa/contactUs",
        element: <ContactUs />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
