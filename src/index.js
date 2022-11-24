import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";
import Category from "./Category";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import Confirm from "./Confirm";

function App() {
  return (
    <div>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/category" element={<Category />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/product" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirm" element={<Confirm />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
}

render(<App />, document.getElementById("root"));
