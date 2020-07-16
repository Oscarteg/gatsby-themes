import { Link } from "gatsby";
import React from "react";
import slugify from "slugify";

export type TagsProps = {
  tags: string[];
};

export default function Tags({ tags = [] }: TagsProps) {
  return (
    <>
      {tags.map((tag, i) => {
        const divider = i < tags.length - 1 && <span>{`, `}</span>;
        return (
          <span key={`tag-${i}`}>
            <Link
              to={`/blog/tags/${slugify(tag.toLowerCase())}`}
              className="text-dark font-bold underline dark:text-white"
            >
              {tag}
            </Link>
            {divider}
          </span>
        );
      })}
    </>
  );
}
