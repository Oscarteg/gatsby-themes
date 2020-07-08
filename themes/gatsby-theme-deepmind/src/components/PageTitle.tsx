import React, { ReactNode } from "react";

export type PageTitleProps = {
  title?: string;
  excerpt?: string;
  children?: ReactNode;
};

export default function PageTitle({
  title,
  excerpt,
  children,
}: PageTitleProps) {
  return (
    <div className="text-center md:w-4/5 mb-12 mx-auto">
      <h1
        className="text-4xl tracking-widest"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p
        className="text-gray-600 mt-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      {children}
    </div>
  );
}
