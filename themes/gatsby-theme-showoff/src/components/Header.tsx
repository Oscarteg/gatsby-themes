import { graphql, navigate, useStaticQuery } from "gatsby";
import React from "react";

export default function Header({ siteTitle }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  const { title, description } = data.site.siteMetadata;

  return (
    <div className="container">
      <div className="pt-12 pb-8">
        {/* {location.pathname === rootPath ? ( */}
        <div>
          <div className="max-w-sm md:ml-20">
            <h1 className="cursor-pointer" onClick={() => navigate("/")}>
              {siteTitle}
            </h1>
          </div>
          <p className="text-2xl my-6 leading-loose">{description}</p>
        </div>
        {/* ) : (
          <div>
            <div className="ml-8 inline-block">
              <h3
                className="cursor-pointer highlight"
                onClick={() => navigate("/")}
              >
                {siteTitle}
              </h3>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
