import Title from "../Title/Title";
import "./Products.css";
import product1 from "../../assets/images/products/product-1.png";
import product2 from "../../assets/images/products/product-2.png";
import product3 from "../../assets/images/products/product-3.png";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      title: "Faucets",
      desc: "Lorem ipsum dolor sit amet consectetur. Vulputate ut arcu. ",
      rating: 4,
      image: product1,
    },
    {
      title: "Sanitary Ware",
      desc: "Lorem ipsum dolor sit amet consectetur. Vulputate ut arcu. ",
      rating: 4,
      image: product2,
    },
    {
      title: "Tiles",
      desc: "Lorem ipsum dolor sit amet consectetur. Vulputate ut arcu. ",
      rating: 4,
      image: product3,
    },
    {
      title: "Faucets",
      desc: "Lorem ipsum dolor sit amet consectetur. Vulputate ut arcu. ",
      rating: 4,
      image: product1,
    },
    {
      title: "Sanitary Ware",
      desc: "Lorem ipsum dolor sit amet consectetur. Vulputate ut arcu. ",
      rating: 4,
      image: product2,
    },
    {
      title: "Tiles",
      desc: "Lorem ipsum dolor sit amet consectetur. Vulputate ut arcu. ",
      rating: 4,
      image: product3,
    },
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplaySpeed: 3500,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    prevArrow: (
      <button id="prev" className="slider-control">
        <FaAngleLeft />
      </button>
    ),
    nextArrow: (
      <button id="next" className="slider-control">
        <FaAngleRight />
      </button>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="projects-section py-12" id="products">
      <div className="site-container">
        <Title>Products</Title>

        <div className="products-grid mt-10">
          <div className="product-slider relative">
            <Slider {...settings}>
              {products?.map((p, index) => (
                <div className="px-4" key={index}>
                  <div className="single-product rounded-lg">
                    <div className="product-body">
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                      <div className="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                    <div className="product-img">
                      <img src={p.image} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="view-all-button text-center mt-10">
            <Link to="" className="site-btn inline-block ">
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
