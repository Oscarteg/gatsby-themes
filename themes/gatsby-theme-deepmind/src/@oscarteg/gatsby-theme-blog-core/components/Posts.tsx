import React from "react";
import Pager from "./Pager";
import PostTile from "./PostTile";

export default function Posts({
  posts,
  previousPagePath,
  nextPagePath,
  pageTitle,
  pageExcerpt,
}) {
  return (
    <>
      {posts && posts.map((post) => <PostTile {...post} key={post.id} />)}
      <Pager {...{ previousPagePath, nextPagePath }}></Pager>
    </>
  );
}
