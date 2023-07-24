import "./Footer.css";
import logo from "../../../assets/images/logo-white.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const getyear = () => {
    const data = new Date();
    return data.getFullYear();
  };
  return (
    <footer className="footer-container">
      <div className="footer-top pt-12 lg:pt-16 pb-12">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="col-span-2 text-center lg:text-left">
              <Link to="/">
                <img src={logo} alt="HBMC" className="mx-auto lg:mx-0" />
              </Link>
              <h3 className="text-2xl font-medium text-white">
                Proud member of IKK Group
              </h3>
              <h4 className="text-lg">HBMC Headquarters</h4>
              <p>
                Al Nakheel, Jeddah 23241,
                <br /> Saudi Arabia
              </p>

              <div className="view-others-location ">
                <button className="self-center mx-auto lg:mx-0">
                  <FaTelegramPlane /> View Other Locations
                </button>
              </div>

              <div className="social-icons justify-center lg:justify-start">
                <Link>
                  <FaFacebookF />
                </Link>
                <Link>
                  <FaInstagram />
                </Link>
                <Link>
                  <FaTwitter />
                </Link>
                <Link>
                  <FaYoutube />
                </Link>
              </div>
            </div>

            <div className="col-span-3">
              <div className="footer-links mt-10 lg:mt-0">
                <div className="flex justify-between">
                  <div className="single-links-item">
                    <h3 className="font-medium text-white">Company</h3>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/">Who we are</Link>
                      </li>
                      <li>
                        <Link to="/">Our Products</Link>
                      </li>
                      <li>
                        <Link to="/">Our Recent Projects</Link>
                      </li>
                      <li>
                        <Link to="/">Contact Us</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="single-links-item">
                    <h3 className="font-medium text-white">Contact </h3>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/">About</Link>
                      </li>
                      <li>
                        <Link to="/">Email</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="single-links-item">
                    <h3 className="font-medium text-white">IKK Group</h3>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/">Contact Me</Link>
                      </li>
                      <li>
                        <Link to="/">About</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="single-links-item">
                    <h3 className="font-medium text-white">Privacy Policy</h3>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/">About</Link>
                      </li>
                      <li>
                        <Link to="/">Our Projects</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="site-container">
          <p className="text-center p-3 ">
            © Al Hayat Building Material Company (HBMC) {getyear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
