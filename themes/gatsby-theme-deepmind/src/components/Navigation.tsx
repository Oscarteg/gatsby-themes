import Transition from "@oscarteg/gatsby-theme-core/components/Transition";
import cn from "classnames";
import { Link } from "gatsby";
import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";

interface NavigationProps {
  title: string;
  menuLinks: [{ name: string; link: string }];
}

export default function Navigation({ title, menuLinks }: NavigationProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mobileMenu = useRef(null);

  useClickAway(mobileMenu, () => {
    if (isOpen) setIsOpen(false);
  });

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to={"/"}>{title}</Link>
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex space-x-4">
              {menuLinks.map((menuLink) => (
                <Link
                  key={menuLink.link}
                  to={menuLink.link}
                  activeClassName="border-indigo-500 hover:text-gray-700 hover:border-gray-300"
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  {menuLink.name}
                </Link>
              ))}
            </div>
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
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg"
          ref={mobileMenu}
        >
          <div className="rounded-md bg-white shadow-xs">
            <div className="space-y-1">
              {menuLinks.map((menuLink) => (
                <Link
                  key={menuLink.link}
                  to={menuLink.link}
                  activeClassName="border-indigo-500 text-indigo-700 bg-indigo-50"
                  className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  {menuLink.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  );
}