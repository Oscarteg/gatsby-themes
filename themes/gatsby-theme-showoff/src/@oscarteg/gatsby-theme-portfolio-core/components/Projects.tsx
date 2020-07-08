import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import SEO from "../../../components/Seo";
import ProjectTile from "../../../components/ProjectTile";

interface ProjectsProps {
  projects: [
    {
      id: string;
      title: string;
      excerpt: string;
      slug: string;
    }
  ];
}

export default function Projects({ projects }: ProjectsProps) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  console.log(projects, data);
  const { title, description } = data.site.siteMetadata;
  return (
    <>
      <SEO
        title="Home"
        keywords={[`homepage`, `oscar te giffel`, `gatsby`]}
        description={description}
      />
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => {
          return <ProjectTile {...project} key={project.id} />;
        })}
      </div>
    </>
  );
}
