import Link from "next/link";
import React from "react";
import CreatePost from "./CreatePost";
import { useRouter } from "next/router";

async function getPost() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records"
  , {cache: 'no-store'});
  const data = await res.json();

  console.log('data', data);
  return data?.items as any[];
}

const PostsPage = async () => {
  const posts = await getPost();

  return (
    <div>
      <h1>Posts</h1>
      {posts?.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
      <CreatePost />
    </div>
  );
};

export default PostsPage;

const PostItem = ({ post }: any) => {
  const { id, title, created } = post || {};
  return (
    <Link href={`/posts/${id}`}>
      <div>
        <br />
        <h3>{title}</h3>
        <p>{created}</p>
        <br />
      </div>
    </Link>
  );
};
