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
    <article className="post prose prose-sm lg:prose-lg mx-auto mb-12">
      <ProgressScroll />
      <PageTitle title={title} excerpt={excerpt}>
        <small>{date}</small>
      </PageTitle>

      {image?.full && (
        <figure>
          <Img fluid={image.full.fluid} title={title} alt={caption || title} />
          {caption && (
            <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
          )}
        </figure>
      )}

      {body && <MDXRenderer>{body}</MDXRenderer>}

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
