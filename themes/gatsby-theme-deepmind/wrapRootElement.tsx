import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Code from "./src/components/Code";

const components = {
  code: Code,
  wrapper: ({ children }) => <>{children}</>,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
