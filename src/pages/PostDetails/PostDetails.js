import React from "react";
import { useQuery } from "react-query";

const PostDetails = ({ post }) => {
  const { data, isLoading, error } = useQuery(["post details", post.id], () => {
    return fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
    )
      .then((res) => res.json())
      .catch((error) => error.message);
  });
  if (isLoading) {
    return "Loading .....";
  }
  if (error) {
    return "An error occured";
  }
  return (
    <div>
      <h1>PostDetails</h1>

      <h3>Title</h3>
      <p style={{ color: "blue" }}>{post.title}</p>
      <button>Delete</button>
      <button>Update</button>

      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comments) => {
        return (
          <li key={comments.id}>
            <span>{comments.email}</span>;<span>{comments.body}</span>
          </li>
        );
      })}
    </div>
  );
};

export default PostDetails;
