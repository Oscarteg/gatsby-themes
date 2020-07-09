import React from "react";
import PostTile from "./PostTile";

interface Post {}

export type TagProps = {
  name: string;
  posts: [];
};

export default function Tag({ name, posts, ...props }: TagProps) {
  return (
    <div className="text-center">
      {name && (
        <h1
          className="text-4xl tracking-widest"
          dangerouslySetInnerHTML={{ __html: name }}
        />
      )}
      {`${posts.length} post${
        posts.length === 1 ? `` : `s`
      } tagged with "${name}"`}

      <div className="grid gap-4 grid-cols-3">
        {posts && posts.map((post) => <PostTile {...post} key={post.id} />)}
      </div>
    </div>
  );
}
