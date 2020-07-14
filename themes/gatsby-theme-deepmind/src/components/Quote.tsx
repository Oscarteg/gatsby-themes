import React, { ReactNode } from "react";

export default function Quote({ children }: { children?: ReactNode }) {
  return (
    <blockquote className="">
      {/* <div className="stylistic-quote-mark" aria-hidden="true">
        &#8221;
      </div> */}
      {/* <p className="mb-4"> */}
      {children}
      {/* </p> */}
    </blockquote>
  );
}
