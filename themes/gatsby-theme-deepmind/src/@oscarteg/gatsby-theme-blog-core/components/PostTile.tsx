import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import cn from "classnames";

export default function PostTile({
  className,
  title,
  slug,
  image,
  date,
  excerpt,
}) {
  return (
    <Link to={slug} title={`Go to the "${title}" post`}>
      <article
        className={cn(
          className,
          "transition duration-200 hover:bg-indigo-100 rounded px-3"
        )}
      >
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          className="text-2xl font-bold"
        />
        <small className=" block text-gray-400">
          Posted on <span className="font-bold">{date}</span>
        </small>

        {excerpt && (
          <p
            className="mt-5 text-text dark:text-white"
            dangerouslySetInnerHTML={{
              __html:
                excerpt.length > 150 ? `${excerpt.substr(0, 150)}...` : excerpt,
            }}
          />
        )}
        <p className="text-indigo-600 font-semibold uppercase transition hover:translate-y-8">
          Read <FontAwesomeIcon icon={["fas", "long-arrow-alt-right"]} />
        </p>
      </article>
    </Link>
  );
}
