import React from "react";
import { Link } from "gatsby";

export type ProjectTileProps = { excerpt: string; title: string; slug: string };

export default function ProjectTile({
  title,
  excerpt,
  slug,
  ...props
}: ProjectTileProps) {
  console.log(props);
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <Link to={slug}>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-5 text-gray-500">{excerpt}</p>
        </Link>
      </div>
    </div>
  );
}
