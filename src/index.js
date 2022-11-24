import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./components/LandingPage";
import Category from "./Category";

function App() {
  return (
    <div>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/category" element={<Category />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
}

render(<App />, document.getElementById("root"));
