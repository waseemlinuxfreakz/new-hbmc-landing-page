/* eslint-disable react/prop-types */
import play from "../../assets/images/play.png";

const ProjectCard = ({ project, active }) => {
  const { image, catagory } = project;
  console.log(active);
  const hidden = active && catagory !== active ? "hidden" : "";

  return (
    <div
      key={project}
      className={`md:px-4 project-outer ${catagory} ${hidden}`}
    >
      <div className="single-project">
        <div className="project-image">
          <img src={image} alt="" />
        </div>

        <div className="project-info">
          <div className="play">
            <button>
              <img src={play} alt="" />
              <span>Watch video</span>
            </button>
          </div>
          <h3 className="mt-5 text-lg font-semibold">
            Al Raha Beach Buildings
          </h3>

          <p className="font-light text-sm lg:text-lg">
            Lorem ipsum dolor sit amet consectetur. Ac dui blandit rhoncus sit
            nulla sagittis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
