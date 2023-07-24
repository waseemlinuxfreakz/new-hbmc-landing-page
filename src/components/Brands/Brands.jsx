import "./Brands.css";
import Title from "../Title/Title";
import brand1 from "../../assets/images/brands/b-1.png";
import brand2 from "../../assets/images/brands/b-2.png";
import brand3 from "../../assets/images/brands/b-3.png";
import brand4 from "../../assets/images/brands/b-4.png";
import brand5 from "../../assets/images/brands/b-5.png";
import brand6 from "../../assets/images/brands/b-6.png";
import Slider from "react-slick";

const Brands = () => {
  const logos = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 3500,
    speed: 3500,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="projects-section py-12" id="brands">
      <div className="container mx-auto px-4">
        <Title>Brands</Title>

        <div className="brands-logo mt-10">
          <div className="logos">
            <Slider {...settings}>
              {logos?.map((logo, index) => (
                <div key={index}>
                  <img src={logo} alt="Brand logo" className="w-auto" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
