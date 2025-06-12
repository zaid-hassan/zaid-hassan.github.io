import { useSelector } from "react-redux";

function ProjectCard() {
  const currentProject = useSelector(
    (state) => state.isCurrentProject.currentProject
  );
  return (
    <div className="">
      <img src={currentProject} alt="Project Photo" />
    </div>
  );
}

export default ProjectCard;
