import "./Header.css";
import HeaderTop from "./HeaderTop/HeaderTop";
import logo from "../../../assets/images/hbmc-logo.svg";
import mobileLogo from "../../../assets/images/mobile-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import en from "../../../assets/images/languages/en.png";
import ar from "../../../assets/images/languages/ar.png";
import menuToggle from "../../../assets/images/menu.png";
import cross from "../../../assets/images/cross.png";
import { useContext, useState } from "react";
import { LanguageContex } from "../../../Contex/LanguageProvider";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  const { languages, handleChangeLanguage } = useContext(LanguageContex);
  const navigate = useNavigate();

  const handleLanguageChange = (code) => {
    handleChangeLanguage(code);
    // console.log(code);
    navigate(`/${code}`);
  };

  // handle navbar  fixed
  let prevPosition = 0;
  const handleScroll = (e) => {
    // get the current position at on the page
    const currentPosition = e.target.documentElement.scrollTop;
    const mainMenu = document.getElementById("mainMenu");

    if (prevPosition < currentPosition) {
      prevPosition = currentPosition;
      mainMenu.classList.remove("header-fixed", "shadow-lg");
    } else if (prevPosition > currentPosition) {
      prevPosition = currentPosition;
      mainMenu.classList.add("header-fixed", "shadow-lg");
    }

    if (currentPosition <= 400) {
      mainMenu.classList.remove("header-fixed", "shadow-lg");
    }
    // console.log(currentPosition);
  };
  window.addEventListener("scroll", (e) => handleScroll(e));

  // handle smooth scroll
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const hash = e.target.hash.slice(1); // get the id
    const elementOffset = document.getElementById(hash).offsetTop; // get offset to top
    // finally scroll to the wight position
    window.scrollTo({
      top: elementOffset,
    });
  };

  const menu_items = (
    <>
      <li>
        <Link
          className="text-sm lg:text-base"
          to="#home"
          onClick={handleSmoothScroll}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="text-sm lg:text-base"
          to="#about"
          onClick={handleSmoothScroll}
        >
          about
        </Link>
      </li>
      <li>
        <Link
          className="text-sm lg:text-base"
          to="#products"
          onClick={handleSmoothScroll}
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          className="text-sm lg:text-base"
          to="#brands"
          onClick={handleSmoothScroll}
        >
          Our Brands
        </Link>
      </li>
      <li>
        <Link
          className="text-sm lg:text-base"
          to="#projects"
          onClick={handleSmoothScroll}
        >
          Projects
        </Link>
      </li>
      <li>
        <div className="language-selector hidden md:block">
          {localStorage.getItem("i18nextLng") === "en-US" ||
          localStorage.getItem("i18nextLng") === "en" ? (
            <button
              className="language-toggle flex items-center gap-2"
              onClick={() => setShowSelector(!showSelector)}
            >
              <img src={en} alt="" />
              <span>Eng</span>
              <span>
                <FaAngleDown />
              </span>
            </button>
          ) : (
            <button
              className="language-toggle flex items-center gap-2"
              onClick={() => setShowSelector(!showSelector)}
            >
              <img src={ar} alt="" />
              <span>Ara</span>
              <span>
                <FaAngleDown />
              </span>
            </button>
          )}
          {showSelector && (
            <div className="absolute w-30 rounded-lg p-2 grid gap-1 bg-white shadow-lg select-language">
              {languages?.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    handleLanguageChange(lang.code);
                    setShowSelector(!showSelector);
                  }}
                  className="flex items-center gap-3"
                >
                  <img src={lang.code === "en" ? en : ar} /> {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </li>
      <li className="contact-us">
        <Link
          className="text-sm lg:text-base"
          to="#contact"
          onClick={handleSmoothScroll}
        >
          Contact us
        </Link>
      </li>
    </>
  );

  return (
    <header className="header-component">
      <HeaderTop></HeaderTop>

      <div
        className="main-menu top-0 w-full bg-white z-10 transition"
        id="mainMenu"
      >
        <div className="site-container">
          <div className="flex justify-between items-center py-3 gap-4">
            <div className="logo-area">
              <Link to="/">
                <img
                  src={logo}
                  alt=""
                  className="w-40 lg:w-auto hidden lg:block"
                />
                <img
                  src={mobileLogo}
                  alt=""
                  className="w-16 block lg:hidden lg:w-auto"
                />
              </Link>
            </div>

            <div className="menu-area">
              <button
                className="block  md:hidden"
                onClick={() => setShow(!show)}
              >
                <img src={!show ? menuToggle : cross} alt="" />
              </button>

              {show && (
                <nav className="mobile-nav  block md:hidden absolute w-44 rounded-lg right-4 bg-white shadow-lg p-4">
                  <ul className="grid gap-3" onClick={() => setShow(!show)}>
                    {menu_items}
                  </ul>
                </nav>
              )}

              <nav className="hidden md:block desktop-menu">
                <ul className="flex gap-4 lg:gap-8 capitalize items-center">
                  {menu_items}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
