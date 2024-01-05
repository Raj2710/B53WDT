import React from 'react'
import AppRoutes from './utils/AppRoutes'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
export const API_URL = 'https://6486a3c8beba6297278efd7e.mockapi.io/blogs'
function App() {
  const router = createBrowserRouter(AppRoutes)
  return <>
    <RouterProvider router={router} />
  </>
}

export default App