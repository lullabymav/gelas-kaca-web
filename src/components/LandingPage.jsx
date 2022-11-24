import Navbar from './Navbar';
import Categories from './Categories';
import Product from './Product';
import Footer from './Footer';

function LandingPage() {
    return(
        <div>
            <div className='my-8 mx-12'>
                <Navbar />
                <p className='text-sm font-bold text-center m-6'>Top Categories</p>
                <div className='category-card-item grid grid-cols-6 gap-6'>
                    <Categories />
                    <Categories />
                    <Categories />
                    <Categories />
                    <Categories />
                    <Categories />
                </div>
                <div className='category-card-item grid grid-cols-6 gap-6'>
                    <Categories />
                    <Categories />
                    <Categories />
                    <Categories />
                    <Categories />
                    <Categories />
                </div>
                <p className='text-sm font-bold text-center m-6'>Top Product</p>
                <div className='product-card-item grid grid-cols-3 gap-6'>
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className='product-card-item grid grid-cols-3 gap-6'>
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className='product-card-item grid grid-cols-3 gap-6'>
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className='product-card-item grid grid-cols-3 gap-6'>
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className='product-card-item grid grid-cols-3 gap-6'>
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
            <div>
                <hr />
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage;