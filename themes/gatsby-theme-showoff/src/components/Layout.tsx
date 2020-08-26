import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Bio from "../components/Bio";
import Footer from "../components/Footer";
import Header from "../components/Header";

library.add(fas, far, fab);

interface LayoutProps {
  children?: any;
  className?: string;
}

export default function Layout({ children, className = "" }: LayoutProps) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;
  return (
    <>
      <Header siteTitle={title} />
      <div className={`container ${className}`}>{children}</div>
      <div className="container max-w-2xl">
        <Bio />
      </div>
      <Footer />
    </>
  );
}
