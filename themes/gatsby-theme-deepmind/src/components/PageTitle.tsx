import React, { ReactNode } from "react";
import classNames from "classnames";

export type PageTitleProps = {
  title?: string;
  excerpt?: string;
  children?: ReactNode;
  titleClass?: string;
};

export default function PageTitle({
  title,
  excerpt,
  children,
  titleClass,
}: PageTitleProps) {
  return (
    <div className="text-center mb-12">
      {title && (
        <h1
          className={classNames(titleClass)}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {excerpt && (
        <p
          className="text-gray-600 text-lg fmt-4"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      )}
      {children}
    </div>
  );
}
