import { graphql, Link, useStaticQuery } from "gatsby";
import React, { ReactNode } from "react";
import FooterList from "./FooterList";

export default function Footer({ children }: { children?: ReactNode }) {
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
        {children}
      </div>
    </footer>
  );
}
