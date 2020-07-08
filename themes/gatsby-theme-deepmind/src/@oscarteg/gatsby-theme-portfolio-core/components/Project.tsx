import React from "react";
import PageTitle from "../../../components/PageTitle";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type ProjectProps = {
  title: string;
  excerpt: string;
  url: string;
  body: string;
};

export default function Project({ title, excerpt, url, body }: ProjectProps) {
  return (
    <article className="post mb-12 md:mb-24">
      <PageTitle title={title} excerpt={excerpt}>
        <div className="text-center md:w-4/5 mb-12 mx-auto mt-3">
          <a
            className="inline-flex items-center hover:text-indigo-500"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {url} <FontAwesomeIcon icon="" />
          </a>
        </div>
      </PageTitle>

      <div className="lg:w-4/5 my-6 mx-auto content">
        {body && <MDXRenderer>{body}</MDXRenderer>}
      </div>
    </article>
  );
}
