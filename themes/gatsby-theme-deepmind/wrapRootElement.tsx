import { MDXProvider } from "@mdx-js/react";
import React from "react";
import Code from "./src/components/Code";
import Quote from "./src/components/Quote";

const components = {
  pre: (props) => <div {...props} />,
  code: Code,
  blockquote: Quote,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
