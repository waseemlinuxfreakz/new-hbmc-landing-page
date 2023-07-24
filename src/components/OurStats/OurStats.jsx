import CountUp from "react-countup";
import Title from "../Title/Title";
import "./OurStats.css";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const OurStats = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section className="our-stats-component py-12 md:py-20">
      <div className="site-container">
        <Title>Stats</Title>

        <div
          className="stats-container rounded-xl mt-8"
          style={{ background: "#F8F8F8" }}
        >
          <div className="grid  grid-cols-2 md:grid-cols-4 gap-8 px-5 py-8 shadow-lg">
            <div className="single-stats">
              <h4 className="text-3xl font-semibold">
                <ScrollTrigger onEnter={() => setVisible(true)}>
                  +{visible ? <CountUp end={12} duration={1} /> : "0"}
                </ScrollTrigger>
              </h4>
              <p className="font-light">Years Of Experiance</p>
            </div>
            <div className="single-stats">
              <h4 className="text-3xl font-semibold">
                <ScrollTrigger onEnter={() => setVisible(true)}>
                  +{visible ? <CountUp end={524} duration={1} /> : "0"}
                </ScrollTrigger>
              </h4>
              <p className="font-light">Success Project</p>
            </div>
            <div className="single-stats">
              <h4 className="text-3xl font-semibold">
                <ScrollTrigger onEnter={() => setVisible(true)}>
                  +{visible ? <CountUp end={35} duration={1} /> : "0"}
                </ScrollTrigger>
              </h4>
              <p className="font-light">Active Project</p>
            </div>
            <div className="single-stats">
              <h4 className="text-3xl font-semibold">
                <ScrollTrigger onEnter={() => setVisible(true)}>
                  +{visible ? <CountUp end={430} duration={1} /> : "0"}
                </ScrollTrigger>
              </h4>
              <p className="font-light">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStats;
