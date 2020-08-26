import React, { ReactNode } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../../../components/Seo";

interface PageProps {
  body: any;
  children: ReactNode;
  title: string;
  excerpt: string;
}

export default function Page({ title, excerpt, body, children }: PageProps) {
  return (
    <>
      <SEO
        title={title}
        keywords={[`homepage`, title, `oscar te giffel`, `gatsby`]}
        description={excerpt}
      />
      <h1 className="title text-center">{title}</h1>

      <div className="max-w-xl mx-auto">
        <div className="my-6 border-b border-yellow-600" />
        <div className="lg:w-4/5 my-6 mx-auto content">
          {body && <MDXRenderer>{body}</MDXRenderer>}
        </div>
      </div>
    </>
  );
}
