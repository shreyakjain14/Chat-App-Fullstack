import { useEffect, useState } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return { isLoading, posts };
};

export default usePosts;
