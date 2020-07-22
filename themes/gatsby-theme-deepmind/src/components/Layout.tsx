import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { MDXProvider } from "@mdx-js/react";
import { graphql, useStaticQuery } from "gatsby";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Head from "./Head";
import Navigation from "./Navigation";
import Seo from "./Seo";

library.add(far, fab, fas);

interface LayoutProps {
  title: string;
  children: ReactNode;
  description?: string;
}

export default function Layout({ title, description, children }: LayoutProps) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          contactEmail
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
  `);

  const { socialLinks, menuLinks } = data.site.siteMetadata;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col text-gray-800">
      <Head />
      <Seo
        title={title || data.site.siteMetadata.title}
        description={description || data.site.siteMetadata.description}
        bodyAttributes={{
          class: "antialiased",
        }}
      />
      <Navigation
        title={data.site.siteMetadata.title}
        menuLinks={menuLinks}
        contactEmail={data.site.siteMetadata.contactEmail}
        socialLinks={socialLinks}
      />
      <main className="container flex-grow mt-12 px-8 sm:p-0">
        <MDXProvider>{children}</MDXProvider>
      </main>
      <Footer />
    </div>
  );
}
