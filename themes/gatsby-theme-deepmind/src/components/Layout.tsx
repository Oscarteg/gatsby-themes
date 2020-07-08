import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import Navigation from "./Navigation";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "./Seo";
import Head from "./Head";

export default function Layout({ children }: { children: ReactNode }) {
  const data = useStaticQuery(graphql`
    {
      allSite {
        nodes {
          siteMetadata {
            title
            description
            socialLinks {
              name
              url
              icon
            }
            menuLinks {
              name
              link
              partiallyActive
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
    socialLinks,
    menuLinks,
  } = data.allSite.nodes[0].siteMetadata;

  return (
    <>
      <Head />
      <Seo
        title={title}
        description={description}
        bodyAttributes={{
          class: "antialiased min-h-screen bg-gray-50",
        }}
      />
      <Navigation
        title={title}
        menuLinks={menuLinks}
        socialLinks={socialLinks}
      />
      <div className="container">
        <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-7">
          <MDXProvider>{children}</MDXProvider>
        </main>
      </div>
    </>
  );
}
