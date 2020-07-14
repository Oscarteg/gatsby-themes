import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import PageTitle from "../../../components/PageTitle";

export type ProjectProps = {
  title: string;
  excerpt: string;
  url: string;
  body: string;
};

export default function Project({ title, excerpt, url, body }: ProjectProps) {
  return (
    <article className="project prose prose-sm lg:prose-lg mx-auto mb-12">
      <PageTitle title={title} excerpt={excerpt}>
        <div className="text-center md:w-4/5 mb-12 mx-auto mt-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            {url}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="ml-2 w-6 icon-link"
            >
              <path
                className="secondary"
                d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"
              />
              <path
                className="primary"
                d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"
              />
            </svg>
          </a>
        </div>
      </PageTitle>

      {body && <MDXRenderer>{body}</MDXRenderer>}
    </article>
  );
}
