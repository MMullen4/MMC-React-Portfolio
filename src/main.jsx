import React from 'react'
import ReactDOM from 'react-dom/client' // react-dom is the new import that will allow us to use the DOM.
import App from './App.jsx' // App.jsx is the new import that will allow us to use the App component.
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // This is the new import that will allow us to use the router

import About from './pages/about.jsx'; // This is the new import that will allow us to use the About component.
import Error from './pages/error.jsx';
import Contact from './pages/contact.jsx';
import Portfolio from './pages/portfolio.jsx';
import Resume from './pages/resume.jsx';


const router = createBrowserRouter([
  // This router is going to be used to navigate between pages.
  {
    path: '/', 
    element: <App />, // define the App component as the element to be rendered from the router.
    errorElement: <Error />,
    children: [
      {
        index: true, // set the index to true to indicate that this is the default page.
        element: <About />,
      },
      {
        path: '/contact', // set the path to /contact to indicate that this is the contact page.
        element: <Contact />,
      },
      {
        path: '/portfolio', // set the path to /portfolio to indicate that this is the portfolio page.
        element: <Portfolio />,
      },
      {
        path: '/resume', // set the path to /resume to indicate that this is the resume page.
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  // creates a new root and renders the RouterProvider component with the router prop.
)
