import React from "react";
import PageTitle from "../../../components/PageTitle";
import ProjectTile from "../../../components/ProjectTile";
import { GatsbyImageProps } from "gatsby-image";

export type ProjectsProps = {
  pageTitle: string;
  pageExcerpt: string;
  projects: {
    id: string;
    title: string;
    excerpt: string;
    slug: string;
    image: {
      thumbnail: GatsbyImageProps;
    };
  }[];
};

export default function Projects({
  pageTitle,
  pageExcerpt,
  projects,
}: ProjectsProps) {
  return (
    <article>
      <PageTitle
        title={pageTitle}
        excerpt={pageExcerpt}
        titleClass="text-4xl font-extrabold tracking-widest"
      />
      <div className="projects flex flex-col divide-y divide-gray-20">
        {projects.map((project) => (
          <ProjectTile className="py-4" {...project} key={project.id} />
        ))}
      </div>
    </article>
  );
}
