import React from "react";
import Pager from "./Pager";
import PostTile from "./PostTile";

export default ({
  posts,
  previousPagePath,
  nextPagePath,
  pageTitle,
  pageExcerpt,
}) => (
  <>
    {posts && posts.map((post) => <PostTile {...post} key={post.id} />)}
    <Pager {...{ previousPagePath, nextPagePath }}></Pager>
  </>
);
