import DeepMindFooter from "@oscarteg/gatsby-theme-deepmind/src/components/Footer";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export type FooterProps = {};

export default function Footer(props: FooterProps) {
  const data = useStaticQuery(graphql`
    {
      currentBuildDate {
        currentDate
      }
    }
  `);

  return <DeepMindFooter>{data.currentBuildDate.currentDate}</DeepMindFooter>;
}
