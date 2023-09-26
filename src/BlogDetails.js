import { Link, useParams } from "react-router-dom";
import { Button, Divider, Space, Spin } from "antd";
import { DeleteOutlined, LeftCircleOutlined } from "@ant-design/icons";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const postApi = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const { data: post, isLoading } = useFetch(postApi);
  const centerStyle = { display: "block", margin: "0 auto" };

  return (
    <div className="details">
      {isLoading && <Spin size="large" style={centerStyle} />}
      {!isLoading && (
        <div className="details__content">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
      <Divider />
      <Space wrap>
        <Link to="/">
          <Button icon={<LeftCircleOutlined />}>Back to Posts</Button>
        </Link>
        {!isLoading && (
          <Button type="primary" danger icon={<DeleteOutlined />}>
            Delete Post
          </Button>
        )}
      </Space>
    </div>
  );
};

export default BlogDetails;
