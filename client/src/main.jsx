import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { ThemeProvider } from "@material-tailwind/react";
import Home from "./pages/Home.jsx";
import CreateProducts from "./pages/CreateProducts.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import UpdateProduct from "./pages/UpdateProduct.jsx";
import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_APP_API;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="/crear" element={<CreateProducts />} />
      <Route path="/:id" element={<ProductDetail />} />
      <Route path="/edit/:id" element={<UpdateProduct />} />
    </Route>
  )
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
        {/*<App />*/}
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
