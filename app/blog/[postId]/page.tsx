import axios from "axios";
import React from "react";

export default async function BlogPost({ params }: any) {
  const postId = (await params).postId;
  const response = axios.get(
    `https://jsonplaceholder.typicode.com/todos/${postId}`
  );
  const data = (await response).data;

  return (
    <div>
      BlogPost {postId}
      <br />
      title - {data.title}
    </div>
  );
}
