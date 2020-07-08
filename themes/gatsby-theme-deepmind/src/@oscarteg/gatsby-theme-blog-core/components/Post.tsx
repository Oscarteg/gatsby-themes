import { Link } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import slugify from "slugify";
import PageTitle from "../../../components/PageTitle";
import ProgressScroll from "../../../components/ProgressScroll";

export default function Post({
  title,
  excerpt,
  image,
  tags,
  caption,
  date,
  body,
}) {
  const tagLinks = tags
    ? tags.map((tag, i) => {
        const divider = i < tags.length - 1 && <span>{`, `}</span>;
        return (
          <span key={`tag-${i}`}>
            <Link
              to={`/blog/tags/${slugify(tag.toLowerCase())}`}
              className="text-dark font-bold underline dark:text-white"
            >
              {tag}
            </Link>
            {divider}
          </span>
        );
      })
    : null;

  return (
    <article className="post mb-12 md:mb-24">
      <ProgressScroll />
      <PageTitle title={title} excerpt={excerpt}>
        <p className="small">{date}</p>
      </PageTitle>

      {image?.full && (
        <figure className="mt-8 mb-10 md:mt-16 mt:mb-20">
          <Img
            fluid={image.full.fluid}
            className="rounded-sm"
            title={title}
            alt={caption || title}
          />
          {caption && (
            <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
          )}
        </figure>
      )}

      <div className="lg:w-4/5 my-6 mx-auto content">
        {body && <MDXRenderer>{body}</MDXRenderer>}
      </div>

      <div className="lg:w-4/5 mx-auto">
        {tags && (
          <div className="text-sm mt-8 pt-8 md:mt-16 md:pt-16 border-t border-offwhite dark:border-text text-text dark:text-white">
            Tagged with {tagLinks}
          </div>
        )}
      </div>
    </article>
  );
}
