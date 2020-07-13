import React, { ReactNode } from "react";

export default function Quote({ children }: { children?: ReactNode }) {
  return (
    <blockquote className="relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote my-8 pl-12">
      <div className="stylistic-quote-mark" aria-hidden="true">
        &#8221;
      </div>
      <p className="mb-4">{children}</p>
    </blockquote>
  );
}
