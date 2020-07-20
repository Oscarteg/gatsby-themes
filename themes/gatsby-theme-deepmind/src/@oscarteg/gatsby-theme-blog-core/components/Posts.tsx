import { parse, format, parseISO } from "date-fns";
import groupBy from "lodash/groupBy";
import mapKeys from "lodash/mapKeys";
import React from "react";
import PageTitle from "../../../components/PageTitle";
import Pager from "./Pager";
import PostTile from "./PostTile";

export default function Posts({
  posts,
  previousPagePath,
  nextPagePath,
  pageTitle,
  pageExcerpt,
}) {
  const postGroups = groupBy(posts, (post) => {
    return format(parseISO(post.date), "yyyy-MM");
  });
  console.log(Object.entries(postGroups));
  return (
    <>
      <PageTitle
        title={pageTitle}
        excerpt={pageExcerpt}
        titleClass="text-4xl font-extrabold tracking-widest"
      />

      <div className="grid grid-cols-6 gap-4">
        {Object.entries(postGroups).map((postsGroup) => {
          return (
            <>
              <div className="sticky top-0 py-6 px-3">{postsGroup[0]}</div>
              <div className="col-span-5">
                <div className="flex flex-col divide-y divide-gray-200">
                  {postsGroup[1] &&
                    postsGroup[1].map((post) => (
                      <PostTile className="py-6" {...post} key={post.id} />
                    ))}
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Pager {...{ previousPagePath, nextPagePath }} />
    </>
  );
}
