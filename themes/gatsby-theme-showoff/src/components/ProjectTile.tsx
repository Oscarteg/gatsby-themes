import { GatsbyImageProps } from "gatsby-image";
import React from "react";
import { Link } from "gatsby";

interface ProjectTileProps {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  image: GatsbyImageProps;
  description: string;
  tags: Array<string>;
}

export default function ProjectTile({
  title,
  image,
  slug,
  excerpt,
  tags,
}: ProjectTileProps) {
  console.log(slug);
  return (
    <Link to={slug}>
      <div className="card bg-white rounded shadow block flex-1 border-b-2 border-yellow-200 h-full">
        <div className="thumbnail-container overlay">
          <div className="absolute w-4/5 -mt-10 left-0 right-0 mx-auto image-overlay">
            {/* <Img
            fluid={image.childImageSharp.fluid}
            className={"thumbnail"}
            alt={title}
          /> */}
          </div>
        </div>
        <div className="p-4 mt-4 pt-32 md:pt-64 ">
          <h3 className="my-1 text-xl inline-block text-black">{title}</h3>
          <p className="text-gray-600 my-4 text-base">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
