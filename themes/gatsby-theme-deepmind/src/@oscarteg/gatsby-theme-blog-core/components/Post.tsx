import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { format, parseISO } from "date-fns";
import PageTitle from "../../../components/PageTitle";
import ProgressScroll from "../../../components/ProgressScroll";
import Tags from "./Tags";
import TableOfContents from "../../../components/TableOfContents";

interface PostProps {
  title: string;
}

export default function Post({
  title,
  excerpt,
  image,
  tags,
  caption,
  date,
  body,
  tableOfContents,
}: PostProps) {
  return (
    <article className="post prose prose-sm lg:prose-lg mx-auto mb-12">
      <ProgressScroll />
      <PageTitle title={title} excerpt={excerpt}>
        <small>{format(parseISO(date), "MMMM dd, yyyy")}</small>
      </PageTitle>
      {image?.full && (
        <figure>
          <Img fluid={image.full.fluid} title={title} alt={caption || title} />
          {caption && (
            <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
          )}
        </figure>
      )}

      {tableOfContents.items && (
        <TableOfContents items={tableOfContents?.items} />
      )}
      {body && <MDXRenderer>{body}</MDXRenderer>}
      {tags && (
        <div className="text-sm mt-8 pt-8 md:mt-16 md:pt-16 border-t border-offwhite dark:border-text text-text dark:text-white">
          Tagged with <Tags tags={tags} />
        </div>
      )}
    </article>
  );
}
