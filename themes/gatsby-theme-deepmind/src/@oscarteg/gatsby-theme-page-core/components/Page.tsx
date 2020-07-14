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
    <article className="page prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto mb-12 max-w-none">
      <PageTitle title={title} excerpt={excerpt} />
      <div className="">
        {body && <MDXRenderer>{body}</MDXRenderer>}
        {children}
      </div>
    </article>
  );
}
