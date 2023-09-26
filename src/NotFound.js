import { LeftCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import NotFoundImage from "./assets/404.svg";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <img className="not-found__image" src={NotFoundImage} alt="404" />
      <Link to={"/"}>
        <Button icon={<LeftCircleOutlined />}>Back to Homepage</Button>
      </Link>
    </div>
  );
};

export default NotFound;
