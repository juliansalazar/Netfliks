import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Sections/Home/Home.jsx' // Especificar la extension del archivo es opcional
import { createBrowserRouter, RouterProvider, Route, Link,} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import ListaPeliculas from './Sections/ListaPeliculas/ListaPeliculas.jsx';
import MovieDetail from './Sections/PeliculaDetalle/MovieDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Sorry: Error 404, no encontre la pagina que estas buscando...</h1>,
    children: [
      {
        path: "/",
        element: <h1>Soy el hijo del home</h1>,
      },
      {
        path: "/comedia",
        element: <ListaPeliculas genero='comedia' key="comedia"/>,
      },
      {
        path: "/independientes",
        element: <ListaPeliculas genero='independientes' key="independientes"/>,
      },
      {
        path: "/cienciaficcion",
        element: <ListaPeliculas genero='cienciaficcion' key="cienciaficcion"/>,
      },
      {
        path: "/:genero/:titulo",
        element: <MovieDetail />,
      }
      
    ],
  },
 
  {
    path: "/contact",
    element: <div>Contact</div>,
  },
  {
    path: "/blog",
    element: <div>Blog</div>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
       <RouterProvider router={router} />
  </React.StrictMode>,
)