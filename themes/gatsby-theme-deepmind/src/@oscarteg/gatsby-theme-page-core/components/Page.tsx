import React, { ReactNode } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PageTitle from "../../../components/PageTitle";

interface PageProps {
  body: any;
  children: ReactNode;
  title: string;
  excerpt: string;
}

export default function Page({ title, excerpt, body, children }: PageProps) {
  return (
    <article className="page prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto mb-12 max-w-none">
      {title || excerpt ? <PageTitle title={title} excerpt={excerpt} /> : null}
      {body && <MDXRenderer>{body}</MDXRenderer>}
      {children}
    </article>
  );
}
