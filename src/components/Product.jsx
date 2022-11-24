import "./../index.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <Link to="/product">
        <section className="card h-96 rounded-2xl mb-6"></section>
      </Link>
    </div>
  );
}

export default Product;
