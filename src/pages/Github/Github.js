import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

import PostDetails from "../PostDetails/PostDetails";
import "./github.css";

const Github = () => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  // pre-fetching data
  useEffect(() => {
    let nextPage = page + 1;
    queryClient.prefetchQuery(["posts", nextPage], () => fetchPosts(nextPage));
  }, [page, queryClient]);

  const fetchPosts = async (page) => {
    return await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    ).then((res) => res.json());
  };

  const { isLoading, error, data, isFetching } = useQuery(
    ["posts", page],
    () => fetchPosts(page),
    {
      staleTime: 20000,
      keepPreviousData: true,
    }
  );

  const [post, setPost] = useState(null);

  if (isLoading) {
    console.log("---loading--");
    console.log(isFetching);
    return "Loading...";
  }
  //   if (isFetching) {
  //     console.log("---FETCHING--");
  //     return "Fetching...";
  //   }
  if (error) {
    return "An error occured";
  }
  console.log(post);
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {data.map((value) => {
          return (
            <li className="post-list" onClick={() => setPost(value)}>
              {value.title}
            </li>
          );
        })}
      </ul>
      <div className="buttons-next">
        <button
          disabled={page <= 1}
          onClick={() => setPage((page) => page - 1)}
        >
          Page previous
        </button>
        <h1>Page {page}</h1>
        <button onClick={() => setPage((page) => page + 1)}>Page next</button>
      </div>

      {post && <PostDetails post={post} />}
    </div>
  );
};

export default Github;
