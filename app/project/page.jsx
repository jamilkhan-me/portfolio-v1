import ProjectCard from "@/components/ProjectCard";
import React from "react";

const ProjectPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2 mt-20">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectPage;
