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
import Success from "./Success";
import History from "./components/History";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Proof from "./components/Proof";
import List from "./components/List";
import Returned from "./components/Returned";

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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/success" element={<Success />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/proof" element={<Proof />} />
            <Route path="/list" element={<List />} />
            <Route path="/return" element={<Returned />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
}

render(<App />, document.getElementById("root"));
