import { StrictMode, useState } from "react";
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
  const [token, setToken] = useState("");
  const [cartId, setCartId] = useState(0);
  return (
    <div>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/category" element={<Category token={token} />} />
            <Route path="/" element={<LandingPage setCartId={setCartId} />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/register" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={<Dashboard token={token} cartId={cartId} />}
            />
            <Route
              path="/product/:id"
              element={<ProductDetail token={token} cartId={cartId} />}
            />
            <Route
              path="/cart"
              element={<Cart token={token} cartId={cartId} />}
            />
            <Route path="/confirm" element={<Confirm token={token} />} />
            <Route path="/success" element={<Success token={token} />} />
            <Route path="/history" element={<History token={token} />} />
            <Route path="/profile" element={<Profile token={token} />} />
            <Route path="/proof" element={<Proof token={token} />} />
            <Route path="/list" element={<List token={token} />} />
            <Route path="/return" element={<Returned token={token} />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
}

render(<App />, document.getElementById("root"));
