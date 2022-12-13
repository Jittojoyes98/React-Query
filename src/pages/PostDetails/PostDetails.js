import React from "react";
import { useMutation, useQuery } from "react-query";

const PostDetails = ({ post }) => {
  const { data, isLoading, error } = useQuery(["post details", post.id], () => {
    return fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
    )
      .then((res) => res.json())
      .catch((error) => error.message);
  });

  const deletePost = async (postId) => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    }).then((res) => res.json());
  };

  const updatePost = async (postId) => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "PATCH",
      data: { title: "REACT query" },
    }).then((res) => res.json());
  };

  const deleteMutation = useMutation((postId) => deletePost(postId));

  const updateMutation = useMutation((postId) => updatePost(postId));

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
      <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
      <button onClick={() => updateMutation.mutate(post.id)}>Update</button>
      {deleteMutation.error && <p style={{ color: "red" }}>Error occured</p>}
      {deleteMutation.isLoading && (
        <p style={{ color: "purple" }}>Deleting the post</p>
      )}
      {deleteMutation.isSuccess && (
        <p style={{ color: "green" }}>Post deleted successfully</p>
      )}
      {updateMutation.isSuccess && (
        <p style={{ color: "green" }}>Updated successfully</p>
      )}

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
