import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Head from "./Head";
import Navigation from "./Navigation";
import Seo from "./Seo";

library.add(fab);

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
