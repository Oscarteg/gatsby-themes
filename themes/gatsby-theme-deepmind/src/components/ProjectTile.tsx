import { Link } from "gatsby";
import React from "react";
import cn from "classnames";
import Img, { GatsbyImageProps } from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type ProjectTileProps = {
  excerpt: string;
  title: string;
  slug: string;
  className: string;
  image?: {
    thumbnail: GatsbyImageProps;
  };
};

export default function ProjectTile({
  title,
  excerpt,
  slug,
  className,
  image,
}: ProjectTileProps) {
  return (
    <Link to={slug} title={`Go to the "${title}" post`}>
      <article
        className={cn(
          className,
          "group transition rounded px-3 sm:flex hover:text-indigo-500"
        )}
      >
        {image ? (
          <Img
            className="w-full sm:w-1/4 rounded shadow-2xl hover:translate-y-8"
            fluid={image.thumbnail.fluid}
          />
        ) : (
          <div className="w-full sm:w-1/4" />
        )}

        <div className="sm:w-3/4 sm:ml-8 mt-5">
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            className="text-2xl font-bold"
          />

          {excerpt && (
            <p
              className="mt-5 text-text dark:text-white"
              dangerouslySetInnerHTML={{
                __html:
                  excerpt.length > 150
                    ? `${excerpt.substr(0, 150)}...`
                    : excerpt,
              }}
            />
          )}
          <p className="text-indigo-600 font-semibold uppercase transition hover:translate-y-8">
            Read <FontAwesomeIcon icon={["fas", "long-arrow-alt-right"]} />
          </p>
        </div>
      </article>
    </Link>
  );
}
