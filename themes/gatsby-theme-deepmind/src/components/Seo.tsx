import React from "react";
import { Helmet, HtmlProps, BodyProps } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
  htmlAttributes?: HtmlProps;
  bodyAttributes?: BodyProps;
  url?: string;
}

export default ({
  title,
  description,
  image,
  url,
  type = `article`,
  htmlAttributes,
  bodyAttributes,
}: SeoProps) => {
  const data = useStaticQuery(graphql`
    {
      site {
        site: siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const { site } = data.site;
  const absoluteUrl = (path) =>
    path ? `${site.siteUrl}/${path}` : site.siteUrl;

  return (
    <Helmet
      titleTemplate={`%s | ${site.title}`}
      title={title || site.title}
      htmlAttributes={{
        ...htmlAttributes,
        lang: `en`,
      }}
      bodyAttributes={bodyAttributes}
    >
      <link
        href="https://unpkg.com/prism-theme-night-owl@1.4.0/build/style.css"
        rel="stylesheet"
      />
      <link rel="canonical" href={absoluteUrl(url) || site.siteUrl} />
      <meta name="description" content={description || site.description} />
      <meta name="og:title" content={title || site.title} />
      <meta name="og:type" content={type} />
      <meta name="og:url" content={absoluteUrl(url)} />
      <meta name="og:image" content={absoluteUrl(image)} />
      <meta name="og:description" content={description || site.description} />
      <meta name="og:site_name" content={site.title} />
    </Helmet>
  );
};
