import { Link } from "react-router-dom";
import "./Hero.css";
import { LanguageContex } from "../../../Contex/LanguageProvider";
import { useContext } from "react";
import heroBg from "../../../assets/images/hero-images/hero-bg.png";
import hero1 from "../../../assets/images/hero-images/hero-1.png";
import hero2 from "../../../assets/images/hero-images/hero-2.png";
import hero3 from "../../../assets/images/hero-images/hero-3.png";
import hero4 from "../../../assets/images/hero-images/hero-4.png";
import heroRating from "../../../assets/images/hero-images/star.png";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  const { t } = useContext(LanguageContex);

  return (
    <div className="hero-section border py-16 lg:pb-28" id="home">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 place-content-center">
          <div className="hero-text grid place-content-center">
            <h1 className="text-4xl  md:text-6xl hero-title text-center font-medium lg:text-left lg:pr-2">
              {t("heroTitle")}
            </h1>
            <p className="text-center lg:text-left font-light mt-6 mb-10">
              {t("heroSubtitle")}
            </p>

            <div className="hero-buttons flex gap-5 justify-center lg:justify-start">
              <Link to="#" className="site-btn">
                Know More
              </Link>
              <Link to="#" className="site-btn btn-outline">
                See Collection
              </Link>
            </div>
          </div>
          <div className="hero-image relative" style={{ height: 500 }}>
            <div className="max-w-2xl mx-auto relative">
              <div className="hero-rating-area rounded-2xl bg-white shadow-lg border absolute p-3 flex items-center gap-5 left-10 top-10">
                <img src={heroRating} alt="Hero Rating" />
                <div className="rating-text">
                  <p className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />{" "}
                    <strong className="font-bold">4.9</strong>
                  </p>
                  <p>Ratings</p>
                </div>
              </div>

              <img
                src={heroBg}
                alt="hero-image"
                className="w-auto mx-auto mt-6"
              />
              <img
                src={hero1}
                alt="hero-image"
                className="w-2/4 absolute top-0 right-0"
              />
              <img
                src={hero2}
                alt="hero-image"
                className="w-auto absolute left-0 bottom-6"
              />
              <img
                src={hero3}
                alt="hero-image"
                className=" absolute  -bottom-10 md:-bottom-14 left-32 md:left-36 w-2/4"
              />
              <img
                src={hero4}
                alt="hero-image"
                className="w-auto absolute right-0 bottom-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
