import React, { useEffect, useState } from "react";
import usePosts from "../hooks/usePosts";
import ShimmerPosts from "./ShimmerPosts";

const Posts = () => {
  const { isLoading, posts } = usePosts();

  return (
    <div className="flex-[1.5] mb-24 p-4">
      {posts.length > 0 &&
        posts.map(({ creator, time, replies }: any) => (
          <div className="p-2 bg-white shadow-lg rounded-lg">
            <div className="flex">
              <img
                className="w-10 h-10 rounded-[1.25rem] mr-2"
                src={creator.imgUrl}
                alt="user"
              />
              <div>
                <div className="font-bold text-base">
                  {creator.name},{" "}
                  <span className="font-normal text-sm">{time} hours ago</span>{" "}
                </div>
              </div>
            </div>
          </div>
        ))}
      {posts.length === 0 && isLoading && <ShimmerPosts />}
      {posts.length === 0 && !isLoading && (
        <h1 className="text-lg font-bold">No posts available</h1>
      )}
    </div>
  );
};

export default Posts;
