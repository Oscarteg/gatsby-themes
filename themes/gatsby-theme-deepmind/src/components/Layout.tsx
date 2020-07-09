import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import Navigation from "./Navigation";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "./Seo";
import Head from "./Head";
import Footer from "./Footer";

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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Head />
      <Seo
        title={title}
        description={description}
        bodyAttributes={{
          class: "antialiased ",
        }}
      />
      <Navigation
        title={title}
        menuLinks={menuLinks}
        socialLinks={socialLinks}
      />
      <main className="container flex-grow mt-4">
        <MDXProvider>{children}</MDXProvider>
      </main>
      <Footer />
    </div>
  );
}
