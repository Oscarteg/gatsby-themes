import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";

interface ProjectPageProps {
  title: string;
  excerpt: string;
  url: string;
  body: string;
}

export default function ProjectPage({ title, url, body }: ProjectPageProps) {
  return (
    <>
      <h1 className="title text-center">{title}</h1>

      <div className="max-w-lg mx-auto">
        <div className="flex justify-center my-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-grey font-mono bg-transparent"
            href={url}
          >
            {url}
          </a>
        </div>
        {/* <Img fluid={image.childImageSharp.fluid} /> */}
        <div className="my-6 border-b border-yellow-600" />
        <div className="lg:w-4/5 my-6 mx-auto content">
          {body && <MDXRenderer>{body}</MDXRenderer>}
        </div>
      </div>
    </>
  );
}
