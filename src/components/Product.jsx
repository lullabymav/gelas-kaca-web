import "./../index.css";
import { Link } from "react-router-dom";
import category_1 from "./../asset/category_1.jpg";

function Product(props) {
  return (
    <div>
      <Link to="/product">
        <section className="card h-96 rounded-2xl mb-6 md:p-4">
          <div>
            <img
              src={props.image}
              alt={props.name}
              className="w-full h-72 background-white rounded-xl object-cover"
            />
          </div>
          <div>
            <p className="text-xl font-semibold mt-2">{props.name}</p>
            <span>Rp {props.price}</span>
          </div>
        </section>
      </Link>
    </div>
  );
}

export default Product;
