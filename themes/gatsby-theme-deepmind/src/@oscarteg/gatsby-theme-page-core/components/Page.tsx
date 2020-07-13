import React, { ReactNode } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PageTitle from "../../../components/PageTitle";

export default function Page({
  title,
  excerpt,
  body,
  children,
}: {
  body: any;
  children: ReactNode;
  title: string;
  excerpt: string;
}) {
  return (
    <article className="post mb-12 md:mb-24">
      <PageTitle title={title} excerpt={excerpt} />
      <div className="lg:w-4/5 my-6 mx-auto content">
        {body && <MDXRenderer>{body}</MDXRenderer>}
        {children}
      </div>
    </article>
  );
}
