import Title from "../Title/Title";
import "./About.css";
import aboutImage from "../../assets/images/what-we-do.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about-section  py-12 md:py-20" id="about">
      <div className="site-container">
        <div className="custom-flex">
          <div className=" text-column text-center  lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 300 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <Title className="lg:text-left" subtitle={"What"}>
                We do ?
              </Title>

              <p className="font-light mt-8">
                Our team of experts is committed to providing you with the best
                possible service, from start to finish. We work closely with you
                to understand your needs and ensure that we deliver the right
                materials for your project
              </p>

              <h3 className="mt-5 mb-2 font-semibold">
                Source and Supply Materials
              </h3>
              <p className="font-light">
                We have a vast network of suppliers and manufacturers, and we
                source the best quality building materials at competitive
                prices.
              </p>
              <div className="inline-block  mt-8">
                <Link className="site-btn w-auto" to={"#"}>
                  Shop Now
                </Link>
              </div>
            </motion.div>
          </div>

          <div className=" image-col text-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.0, duration: 1 }}
            >
              <img
                src={aboutImage}
                alt="about-image"
                className="mt-10 lg:mt-0 mx-auto lg:pr-8"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
