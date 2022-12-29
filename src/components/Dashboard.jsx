import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Navbar from "./Navbar";
import Categories from "./Categories";
import Product from "./Product";
import Footer from "./Footer";
import Carousel from "./Carousel";
import axios from "axios";

function Dashboard({ token, cartId }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [data, setData] = useState([]);

  const getDataToken = async () => {
    try {
      const decoded = await jwtDecode(token);
      setUserData(await decoded);
      setIsLogin(true);
    } catch {
      navigate("/login");
    }
  };

  let firstName = String(userData.name).split(" ")[0];

  const getCategory = async () => {
    try {
      await axios
        .get("http://localhost:8080/api/categorys")
        .then((response) => {
          setCategory(() => response.data);
          console.log(category[0].image);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async () => {
    try {
      await axios.get("http://localhost:8080/api/products").then((response) => {
        setProduct(() => response.data);
        response.data.map((item, index) => {
          product[index].path = item.productGalleries[0].path;
          return setProduct(product);
        });
        // response.data.map((item) => {
        //   return gallery.push(item.productGalleries[0]);
        // });
        // gallery.map((item, index) => {
        //   return (product[index].path = item.path);
        // });
        // setProduct(product);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateCart = async () => {
    const userId = userData.id;
    const data = {
      userId: userId,
    };
    try {
      console.log(data);
      await axios
        .put(`http://localhost:8080/api/carts/${cartId}`, data)
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataToken();
    getCategory();
    getProduct();
    updateCart();
  }, []);

  return (
    <div>
      <div className="my-8 mx-12">
        <Navbar name={firstName} isLogin={isLogin} />
        {/* <Carousel /> */}
        <p className="text-sm font-bold text-center m-6">Top Categories</p>
        <div className="category-card-item grid grid-cols-1 gap-6 md:grid-cols-6 sm:grid-cols-3">
          {category.map((item) => {
            return <Categories image={item.image} categoryName={item.name} />;
          })}
        </div>
        <p className="text-sm font-bold text-center m-6">Top Product</p>
        <div className="product-card-item grid grid-cols-1 gap-6 md:grid-cols-3">
          {product.map((item) => {
            return (
              <Product
                image={item.path}
                name={item.name}
                price={item.price}
                id={item.id}
              />
            );
          })}
          {/* <Product />
          <Product />
          <Product /> */}
        </div>
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
          <section className="card h-40 rounded-2xl mb-6 mt-3"></section>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
