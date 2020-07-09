import { graphql, Link, useStaticQuery } from "gatsby";
import React, { ReactNode } from "react";
import FooterList from "./FooterList";

export default function Footer({ children }: { children?: ReactNode }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          repoUrl
          social {
            blog
          }
        }
      }
    }
  `);

  return <footer className="border-t border-gray-200">{children}</footer>;
}
