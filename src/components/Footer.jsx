import { Link } from "react-router-dom";
import "./../index.css";
import logo from "./../asset/logo.png";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <section className="footer-logo flex justify-center m-10">
          <img src={logo} className="h-10" alt="logo-alt" />
        </section>
        <section className="footer-info flex justify-center">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h2 class="mb-6 text-sm font-semibold dark:text-white">
                Perusahaan
              </h2>
              <ul className="text-sm">
                <li className="mb-4">
                  <Link to="/tentang-kami" className="hover:underline">
                    Tentang Kami
                  </Link>
                </li>
                <li classNameName="mb-4">
                  <Link to="/karir" className="hover:underline">
                    Karir
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold dark:text-white">
                Bantuan
              </h2>
              <ul className="text-sm ">
                <li className="mb-4">
                  <Link to="/register" className="hover:underline ">
                    Registrasi Pengguna
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/snk" className="hover:underline">
                    Syarat & Kondisi
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/kebijakan-privasi" className="hover:underline">
                    Kebijakan Privasi
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/FAQ" className="hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold dark:text-white">
                Hubungi Kami
              </h2>
              <p className="text-xl font-bold mb-4">+62853 0000 0000</p>
              <ul className="flex gap-4">
                <li class="mb-4">
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      class="w-4 h-5"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="w-5 h-5"
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                      class="w-4 h-5"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold dark:text-white">
                Buletin
              </h2>
              <ul className="text-sm">
                <li class="mb-4">
                  <Link to="/" class="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" class="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
