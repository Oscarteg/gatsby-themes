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
    <article>
      <PageTitle title={title} excerpt={excerpt} />
      {body && <MDXRenderer>{body}</MDXRenderer>}
      {children}
    </article>
  );
}
