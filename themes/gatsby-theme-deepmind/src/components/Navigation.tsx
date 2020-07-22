import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Transition from "@oscarteg/gatsby-theme-core/components/Transition";
import cn from "classnames";
import { Link } from "gatsby";
import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";

interface NavigationProps {
  title: string;
  menuLinks: [{ name: string; link: string; partiallyActive?: boolean }];
  socialLinks: [{ name: string; url: string; icon: IconProp }];
  contactEmail: string;
}

export default function Navigation({
  title,
  menuLinks,
  socialLinks,
  contactEmail,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mobileMenu = useRef(null);

  useClickAway(mobileMenu, () => {
    if (isOpen) setIsOpen(false);
  });

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container px-4 sm:px-6 lg:px-8 flex justify-between sm:block">
        <div className="flex items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to={"/"} className="text-2xl font-mono hover:text-blue-500">
              {title}
            </Link>
          </div>
          <div className="hidden sm:-my-px sm:ml-6 sm:flex uppercase tracking-wide text-xs space-x-6 font-medium flex-1">
            {menuLinks.map((menuLink) => (
              <Link
                key={menuLink.link}
                to={menuLink.link}
                partiallyActive={menuLink.partiallyActive}
                activeClassName="border-indigo-500 hover:text-gray-700 hover:border-gray-300"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-gray-500 hover:text-indigo-700 hover:border-indigo-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                {menuLink.name}
              </Link>
            ))}
          </div>
          <nav className="flex justify-center mt-4 md:mt-0">
            <ul className="hidden sm:flex sm:items-center space-x-4">
              {socialLinks &&
                socialLinks.map(({ name, url, icon }) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-gray-400  hover:text-indigo-500"
                      aria-label={`Follow on ${name}`}
                    >
                      <span className="hidden">{name}</span>
                      <FontAwesomeIcon icon={icon} />
                    </a>
                  </li>
                ))}

              <a
                href="/rss.xml"
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-400 hover:text-indigo-500"
                title="RSS feed"
                aria-label="RSS feed"
              >
                <FontAwesomeIcon icon={["fas", "rss"]} />
              </a>
              {contactEmail && (
                <li>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="h-8 group inline-flex items-center px-4 py-2 border border-gray-400 text-sm leading-5 font-medium rounded-md text-gray-500 bg-white hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:border-gray-500 hover:border-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 mr-1 icon-mail"
                    >
                      <path
                        className="primary"
                        d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"
                      />
                      <path
                        className="secondary"
                        d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"
                      />
                    </svg>
                    Contact me
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div className="-mr-2 flex items-center sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <svg
              className={cn(`h-6 w-6`, { hidden: isOpen, block: !isOpen })}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={cn(`h-6 w-6`, { block: isOpen, hidden: !isOpen })}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <Transition
        show={isOpen}
        appear={true}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-10"
          ref={mobileMenu}
        >
          <div className="rounded-md bg-white shadow-xs">
            <div className="space-y-1">
              {menuLinks.map((menuLink) => (
                <Link
                  key={menuLink.link}
                  to={menuLink.link}
                  activeClassName="border-indigo-500 text-indigo-700 bg-indigo-50"
                  className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  {menuLink.name}
                </Link>
              ))}
              <a
                href="/rss.xml"
                target="_blank"
                rel="noreferrer noopener"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                title="RSS feed"
                aria-label="RSS feed"
              >
                Rss
              </a>
              {contactEmail && (
                <a
                  href={`mailto:${contactEmail}`}
                  className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Contact me
                </a>
              )}
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  );
}
