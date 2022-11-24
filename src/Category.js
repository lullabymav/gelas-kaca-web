import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
// import Dashboard from './Dashboard'

function Category() {
  return (
    <div className="my-8 mx-12">
      <div>
        <Navbar />
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
            <Product />
            <Product />
            <Product />
          </div>
          <div className="product-card-item grid grid-cols-3 gap-6">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="product-card-item grid grid-cols-3 gap-6">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="product-card-item grid grid-cols-3 gap-6">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="product-card-item grid grid-cols-3 gap-6">
            <Product />
            <Product />
            <Product />
          </div>
        </div>
        {/* Product End */}
        <div>
          <hr className="my-12" />
          <Footer className="mb-12" />
        </div>
      </div>
    </div>
  );
}

export default Category;
