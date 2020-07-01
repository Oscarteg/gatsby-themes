import React, { ReactNode } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function Page({
  // title,
  // excerpt,
  body,
  children,
}: {
  body: any;
  children: ReactNode;
}) {
  return (
    <article>
      <div className="lg:w-4/5 my-6 mx-auto content">
        {body && <MDXRenderer>{body}</MDXRenderer>}
        {children}
      </div>
    </article>
  );
}
