import ProjectsCarousel from "./carousel";
import NavHeader from '../../../../components/newsHeader'
import "./style.scss";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__container container">
        <div className="projects-inner">
          <NavHeader name='Loyihalar'/>
          <ProjectsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Projects;