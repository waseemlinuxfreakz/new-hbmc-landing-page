import Title from "../Title/Title";
import "./LatestProjects.css";

// porjects image
import project1 from "../../assets/images/projects/project-1.png";
import project2 from "../../assets/images/projects/project-2.png";
import project3 from "../../assets/images/projects/project-3.png";

import ProjectCard from "./ProjectCard";
import { useState } from "react";

const LatestProject = () => {
  // Projects JSON
  const projects = [
    { image: project1, catagory: "solar" },
    { image: project2, catagory: "energy" },
    { image: project3, catagory: "solar" },
    { image: project1, catagory: "culter" },
    { image: project2, catagory: "solar" },
    { image: project3, catagory: "energy" },
  ];

  const [catagory, setCatagory] = useState("");

  return (
    <section className="projects-section py-12" id="projects">
      <div className="site-container">
        <Title>Latest Projects</Title>

        <div className="projects-row mt-10">
          <div className="projects-filter">
            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 mb-8">
              <button
                className={`${catagory === "" ? "active" : ""}`}
                onClick={() => setCatagory("")}
              >
                All
              </button>
              <button
                className={`${catagory === "solar" ? "active" : ""}`}
                onClick={() => setCatagory("solar")}
              >
                Solar
              </button>
              <button
                className={`${catagory === "energy" ? "active" : ""}`}
                onClick={() => setCatagory("energy")}
              >
                Energy
              </button>
              <button
                className={`${catagory === "culter" ? "active" : ""}`}
                onClick={() => setCatagory("culter")}
              >
                Culter
              </button>
            </div>
          </div>
          <div className="projects-gallary relative flex flex-wrap justify-center">
            {projects?.map((project, index) => (
              <ProjectCard
                project={project}
                key={index}
                active={catagory}
              ></ProjectCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
