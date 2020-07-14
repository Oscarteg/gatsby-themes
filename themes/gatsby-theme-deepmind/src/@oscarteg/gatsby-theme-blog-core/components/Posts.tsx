import React from "react";
import Pager from "./Pager";
import PostTile from "./PostTile";
import PageTitle from "../../../components/PageTitle";

export default function Posts({
  posts,
  previousPagePath,
  nextPagePath,
  pageTitle,
  pageExcerpt,
}) {
  return (
    <>
      <PageTitle
        title={pageTitle}
        excerpt={pageExcerpt}
        titleClass="text-4xl font-extrabold tracking-widest"
      />
      <div className="flex flex-col divide-y divide-gray-200">
        {posts &&
          posts.map((post) => (
            <PostTile className="py-6" {...post} key={post.id} />
          ))}
      </div>
      <Pager {...{ previousPagePath, nextPagePath }} />
    </>
  );
}
