import React from "react";

async function getPost(postId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/posts/records/${postId}`
  );

    if(!res.ok) {
        // 가장 가까이에 있는 error.js activated
        throw new Error('Failed to fetch data');
    }

  const data = await res.json();
  console.log("data", data);
  return data;
}

const DetailPage = async ({ params }: any) => {
  const post = await getPost(params.id);
  return (
    <div>
      <h1>DetailPage</h1>
      <div>
        <h2>posts/{post.id}</h2>
        <br />
        <h3>{post.title}</h3>
        <p>{post.created}</p>
      </div>
    </div>
  );
};

export default DetailPage;
