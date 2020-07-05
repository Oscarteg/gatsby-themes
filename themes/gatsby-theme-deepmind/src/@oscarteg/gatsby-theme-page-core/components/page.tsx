import React, { ReactNode } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

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
      <div className="lg:w-4/5 my-6 mx-auto content">
        <div className="text-center ">
          {title && (
            <h1
              className="text-4xl tracking-widest"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          {excerpt && (
            <p
              className="mt-4 text-gray-600"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
          )}
        </div>
        {body && <MDXRenderer>{body}</MDXRenderer>}
        {children}
      </div>
    </article>
  );
}
