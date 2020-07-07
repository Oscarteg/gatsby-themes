import React from "react";
import ProjectTile from "./ProjectTile";
import PageTitle from "../../../components/PageTitle";

export type ProjectsProps = {
  pageTitle: string;
  pageExcerpt: string;
  projects: {
    id: string;
    title: string;
    excerpt: string;
    slug: string;
  }[];
};

export default function Projects({
  pageTitle,
  pageExcerpt,
  projects,
}: ProjectsProps) {
  return (
    <div>
      <PageTitle title={pageTitle} excerpt={pageExcerpt} />
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectTile {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
