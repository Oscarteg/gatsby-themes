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
      <PageTitle title={pageTitle} excerpt={pageExcerpt} />
      <div className="grid gap-4">
        {posts && posts.map((post) => <PostTile {...post} key={post.id} />)}
      </div>
      <Pager {...{ previousPagePath, nextPagePath }} />
    </>
  );
}
