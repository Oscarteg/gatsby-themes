import React from "react";
import PostTile from "./PostTile";
import Pager from "./Pager";
import PageTitle from "../../../components/PageTitle";

export type TagProps = {
  name: string;
  posts: [];
  previousPagePath: string;
  nextPagePath: string;
};

export default function Tag({
  name,
  posts,
  previousPagePath,
  nextPagePath,
}: TagProps) {
  return (
    <>
      <PageTitle
        title={name}
        excerpt={`${posts.length} post${
          posts.length === 1 ? `` : `s`
        } tagged with "${name}"`}
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
