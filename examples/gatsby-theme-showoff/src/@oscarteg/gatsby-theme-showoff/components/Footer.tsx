import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import ShowOffFooter from "@oscarteg/gatsby-theme-showoff/src/components/Footer";

export type FooterProps = {};

export default function Footer(props: FooterProps) {
  const data = useStaticQuery(graphql`
    {
      currentBuildDate {
        currentDate
      }
    }
  `);

  return (
    <ShowOffFooter>
      <div>
        <div className="flex justify-center align-center text-grey font-hairline text-sm text-center">
          <div className="py-8">
            <div className="mb-2">
              © Copyright - {new Date().getFullYear()} - Source on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={data.site.siteMetadata.github}
              >
                github
              </a>
            </div>
            <div className="flex justify-center">
              <Link className="border-l-2 border-r-2 mx-1 px-1" to="/uses">
                Uses
              </Link>
              <Link className="border-l-2 border-r-2 mx-1 px-1" to="/about">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ShowOffFooter>
  );
}
