import React from "react";

export type PageTitleProps = {
  title?: string;
  excerpt?: string;
};

export default function PageTitle({ title, excerpt }: PageTitleProps) {
  return (
    <div className="text-center md:w-4/5 mb-12 mx-auto">
      <h1
        className="text-4xl tracking-widest"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="lead mt-4" dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
}
