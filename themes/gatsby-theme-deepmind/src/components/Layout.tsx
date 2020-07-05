import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import Navigation from "./Navigation";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "./Seo";
import Helmet from "react-helmet";
import Head from "./Head";

export default function Layout({ children }: { children: ReactNode }) {
  const data = useStaticQuery(graphql`
    {
      allSite {
        nodes {
          siteMetadata {
            title
            description
            menuLinks {
              name
              link
            }
          }
        }
      }
    }
  `);

  const {
    title,
    description,
    // copyright,
    // socialLinks,
    menuLinks,
  } = data.allSite.nodes[0].siteMetadata;

  return (
    <div className="min-h-screen bg-white">
      <Head />
      <Seo
        title={title}
        description={description}
        bodyAttributes={{
          class: "antialiased bg-white dark:bg-dark px-4",
        }}
      />
      <Navigation title={title} menuLinks={menuLinks} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <main className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <MDXProvider>{children}</MDXProvider>
        </main>
      </div>
    </div>
  );
}
