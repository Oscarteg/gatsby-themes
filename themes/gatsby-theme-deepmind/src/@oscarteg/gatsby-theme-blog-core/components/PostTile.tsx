import React from "react";
import { Link } from "gatsby";

export default function PostTile({ title, slug, image, date, excerpt }) {
  return (
    <Link to={slug} title={`Go to the "${title}" post`}>
      <div className="bg-white shadow overflow-hidden rounded-lg px-4 py-2">
        <article className="flex-col md:flex md:flex-row justify-between">
          <h2 dangerouslySetInnerHTML={{ __html: title }} className="text-" />
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
        </article>
      </div>
    </Link>
  );
}
