import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./routes/HomePage.jsx";
import ShoppingPage from "./routes/ShoppingPage.jsx";
import Cart from "./routes/Cart.jsx";
import HomeLanding from "./routes/HomeLanding.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<HomeLanding/>} />
          <Route path="shop" element={<ShoppingPage />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
