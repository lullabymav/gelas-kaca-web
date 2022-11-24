import Navbar from './Navbar';
import Categories from './Categories';
import Product from './Product';
import Footer from './Footer';
import Carousel from './Carousel';

function LandingPage() {
    return(
        <div>
            <div className='my-8 mx-12'>
                <Navbar />
                {/* <Carousel /> */}
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
                <div className='flex justify-center'>    
                    <nav aria-label="Page navigation">
                        <ul class="inline-flex items-center -space-x-px">
                            <li>
                                <a href="#" class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white hover:text-gray-700">
                                    <span class="sr-only">Previous</span>
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="px-3 py-2 text-sm leading-tight text-gray-500 bg-white hover:text-gray-700">1</a>
                            </li>
                            <li>
                                <a href="#" class="px-3 py-2 text-sm leading-tight text-gray-500 bg-white hover:text-gray-700">2</a>
                            </li>
                            <li>
                                <a href="#" class="px-3 py-2 text-sm leading-tight text-gray-500 bg-white hover:text-gray-700">3</a>
                            </li>
                            <li>
                                <a href="#" class="px-3 py-2 text-sm leading-tight text-gray-500 bg-white hover:text-gray-700">4</a>
                            </li>
                            <li>
                                <a href="#" class="px-3 py-2 text-sm leading-tight text-gray-500 bg-white hover:text-gray-700">5</a>
                            </li>
                            <li>
                            <a href="#" class="block px-3 py-2 leading-tight text-gray-500 bg-white rounded-r-lg hover:text-gray-700">
                                <span class="sr-only">Next</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
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
                <hr />
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage;