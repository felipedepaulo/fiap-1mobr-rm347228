// Router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";  

// Pages


import { Home,NotFound } from "../pages/";
  
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<Home />} />,
      <Route path="*" element={<NotFound />} />,
    ])
  );
  
  function Router() {
    return <RouterProvider router={router} />;
  }
  
  export { Router };
  