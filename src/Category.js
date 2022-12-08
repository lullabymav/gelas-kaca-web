import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

function Category({ token }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const [products, setProducts] = useState([]);

  const getDataToken = async () => {
    try {
      const decoded = await jwtDecode(token);
      setUserData(await decoded);
      setIsLogin(true);
    } catch {
      navigate("/login");
    }
  };

  const getProducts = () => {
    try {
      axios.get("http://localhost:8080/api/products").then((res) => {
        setProducts(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataToken();
    getProducts();
  }, []);

  let firstName = String(userData.name).split(" ")[0];

  return (
    <div className="my-8 mx-12">
      <div>
        <Navbar name={firstName} isLogin={isLogin} />
      </div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-start mt-12 mb-2">
          Kategori Barang Sewa
        </h1>
        {/* dropdown start */}
        <div className="flex flex-rows gap-8">
          <Filter
            name1="Sound Sytem"
            name2="Lighting"
            name3="Bridging"
            name4="Kursi & Meja"
          />
          <Filter
            name1="Beta Three"
            name2="Homonculus"
            name3="Bala"
            name4="Beta"
          />
          <Filter
            name1="Rendah ke Tinggi"
            name2="Tinggi ke Rendah"
            name3="Normal"
            name4="Biasa"
          />
        </div>
        {/* Dropdown End */}
      </div>
      {/* Product Start */}
      <div>
        <div>
          <div className="product-card-item grid grid-cols-3 gap-6">
            {products.map((product) => {
              return (
                <Product
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              );
            })}
          </div>
        </div>
        {/* Product End */}
        {/* Page Navigation */}
        <div className="flex justify-center">
          <nav aria-label="Page navigation">
            <ul class="inline-flex items-center -space-x-px">
              <li>
                <a
                  href="#"
                  class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white hover:text-gray-700"
                >
                  <span class="sr-only">Previous</span>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="px-3 py-2 text-sm leading-tight text-gray-500 bg-white hover:text-gray-700"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="px-3 py-2 text-sm leading-tight text-gray-500 bg-white hover:text-gray-700"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="px-3 py-2 text-sm leading-tight text-gray-500 bg-white hover:text-gray-700"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="px-3 py-2 text-sm leading-tight text-gray-500 bg-white hover:text-gray-700"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="px-3 py-2 text-sm leading-tight text-gray-500 bg-white hover:text-gray-700"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-3 py-2 leading-tight text-gray-500 bg-white rounded-r-lg hover:text-gray-700"
                >
                  <span class="sr-only">Next</span>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Footer className="mb-12" />
        </div>
      </div>
    </div>
  );
}

export default Category;
