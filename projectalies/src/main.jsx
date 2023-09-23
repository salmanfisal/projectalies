import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./components/home.jsx"
import Products from "./components/products.jsx"
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";

let route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/products" element= {<Products/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={route} />
  </React.StrictMode>
)
