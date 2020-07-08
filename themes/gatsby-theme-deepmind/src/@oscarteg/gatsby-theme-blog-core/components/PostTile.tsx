import React from "react";
import { Link } from "gatsby";

export default function PostTile({ title, slug, image, date, excerpt }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <Link to={slug} title={`Go to the "${title}" post`}>
          <article className="flex-col md:flex md:flex-row justify-between">
            <div className="md:w-1/2 py-4 md:py-0 lg:py-6 md:pl-4 lg:pl-2">
              <h2
                dangerouslySetInnerHTML={{ __html: title }}
                className="text-"
              />
              <small className="mt-2 block">{date}</small>

              {excerpt && (
                <p
                  className="mt-5 text-text dark:text-white"
                  dangerouslySetInnerHTML={{
                    __html:
                      excerpt.length > 150
                        ? `${excerpt.substr(0, 150)}...`
                        : excerpt,
                  }}
                />
              )}
            </div>
          </article>
        </Link>
      </div>
    </div>
  );
}
