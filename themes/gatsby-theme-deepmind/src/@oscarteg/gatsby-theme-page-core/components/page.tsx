import React, { ReactNode } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function Page({
  title,
  // excerpt,
  body,
  children,
}: {
  body: any;
  children: ReactNode;
  title: string;
}) {
  return (
    <article>
      <div className="lg:w-4/5 my-6 mx-auto content">
        <h1>{title}</h1>
        {body && <MDXRenderer>{body}</MDXRenderer>}
        {children}
      </div>
    </article>
  );
}
