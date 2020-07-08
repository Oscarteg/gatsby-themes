import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import FooterList from "./FooterList";

export default function Footer() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          repoUrl
          social {
            blog
          }
        }
      }
    }
  `);

  console.log("data", data);
  return (
    <footer className="border-t border-gray-200">
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          <FooterList
            title="Frontend"
            items={[
              `ES 5/6/7 en Typescript`,
              `React (Redux / GatsbyJs / SPA met React Router)`,
              `Vue (Vuex / Vuepress / SPA met Vue Router)`,
              `React Native`,
              `CSS (SASS)`,
              `Bootstrap / Bulma / Tailwindcss`,
              `REST/Graphql`,
              `Android (beginner)`,
            ]}
          />

          <FooterList
            title="Backend"
            items={[`PHP (Laravel)`, `Java`, `GoLang (beginner)`]}
          />

          <FooterList
            title="Database/Devops"
            items={[
              `Docker`,
              `Gitlab CI/CD`,
              `Linux`,
              `MySQL`,
              `Postgresql`,
              `Nginx/Apache`,
              `Vagrant`,
              `Ansible`,
            ]}
          />
        </div>
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
              <a
                className="border-l-2 border-r-2 mx-1 px-1"
                target="_blank"
                rel="noopener noreferrer"
                href={data.site.siteMetadata.social.blog}
              >
                Blog
              </a>

              <a
                className="border-l-2 border-r-2 mx-1 px-1"
                target="_blank"
                rel="noopener noreferrer"
                href={data.site.siteMetadata.social.resume}
              >
                Resume
              </a>

              <Link
                className="border-l-2 border-r-2 mx-1 px-1"
                to="/other-projects"
              >
                Andere projecten
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
