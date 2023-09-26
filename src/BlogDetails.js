import { Link, useParams } from "react-router-dom";
import { Button, Divider, Space, Spin } from "antd";
import { DeleteOutlined, LeftCircleOutlined } from "@ant-design/icons";
import useFetch from "./useFetch";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const postApi = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const { data: post, isLoading } = useFetch(postApi);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const centerStyle = { display: "block", margin: "0 auto" };

  const deletePost = async () => {
    setIsButtonLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );

      setTimeout(() => {
        if (response.status === 200) {
          console.log(`Post with ID ${id} deleted successfully.`);
          setIsDeleted(true);
        } else {
          console.error(`Failed to delete post with ID ${id}.`);
        }
        setIsButtonLoading(false);
      }, 1000);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="details">
      {isLoading && <Spin size="large" style={centerStyle} />}
      {!isLoading && (
        <div className="details__content">
          {!isDeleted && (
            <>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </>
          )}
          {isDeleted && (
            <>
              <h2>JSONPlaceholder is a fake online REST API</h2>
              <p>
                Used for testing and prototyping, and it does not allow you to
                perform actual CRUD (Create, Read, Update, Delete) operations on
                its data.
              </p>
            </>
          )}
        </div>
      )}
      <Divider />
      <Space wrap>
        <Link to="/">
          <Button icon={<LeftCircleOutlined />}>Back to Posts</Button>
        </Link>
        {!isLoading && !isDeleted && (
          <Button
            loading={isButtonLoading}
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={deletePost}
          >
            Delete Post
          </Button>
        )}
      </Space>
    </div>
  );
};

export default BlogDetails;
