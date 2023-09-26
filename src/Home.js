import { Button, Divider, Spin } from "antd";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";

const Home = () => {
  const [numPosts, setNumPosts] = useState(9); // Number of posts to fetch
  const [additionalPosts, setAdditionalPosts] = useState([]); // Additional posts to append
  const [isLoadMore, setIsLoadMore] = useState([]);
  const { data: blogs, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=9"
  );
  const centerStyle = { display: "block", margin: "0 auto" };

  const handleLoadMore = () => {
    setNumPosts(numPosts + 9);
    console.log(numPosts);
  };

  useEffect(() => {
    // Fetch additional posts when numPosts changes
    const fetchAdditionalPosts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=9&_start=${numPosts}`
        );
        setIsLoadMore(true);

        if (response.ok) {
          const newPosts = await response.json();
          setTimeout(() => {
            setAdditionalPosts([...additionalPosts, ...newPosts]);
            setIsLoadMore(false);
          }, 1000);
        } else {
          console.error("Failed to fetch additional posts.");
        }
      } catch (error) {
        console.error(
          "An error occurred while fetching additional posts:",
          error
        );
      }
    };

    fetchAdditionalPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numPosts]);

  return (
    <div className="home">
      {isLoading && <Spin size="large" style={centerStyle} />}
      {!isLoading && (
        <>
          <BlogList blogs={blogs.concat(additionalPosts)} />
          <Divider />
          {(numPosts < 90 || isLoadMore) && (
            <Button
              loading={isLoadMore}
              style={centerStyle}
              onClick={handleLoadMore}
            >
              Load More...
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
