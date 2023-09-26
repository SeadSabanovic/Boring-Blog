import { Button, Divider, Spin } from "antd";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=9"
  );
  const centerStyle = { display: "block", margin: "0 auto" };

  return (
    <div className="home">
      {isLoading && <Spin size="large" style={centerStyle} />}
      {!isLoading && (
        <>
          <BlogList blogs={blogs} />
          <Divider />
          <Button type="ghost" style={centerStyle}>
            Load More...
          </Button>
        </>
      )}
    </div>
  );
};

export default Home;
