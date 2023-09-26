import { Card } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { RightCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blogs = props.blogs;

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <Card
          className="blog-list__preview"
          key={blog.id}
          title={blog.title}
          type="inner"
          actions={[
            <Link to={`blog/${blog.id}`}>
              <RightCircleOutlined />
            </Link>,
          ]}
        >
          <Paragraph
            className="blog-list__preview__para"
            ellipsis={{ rows: 2, expandable: false }}
          >
            {blog.body}
          </Paragraph>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;
