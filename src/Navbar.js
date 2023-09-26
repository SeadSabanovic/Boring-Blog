import { Button } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/">
          <h1 className="navbar__logo">BoringBlog</h1>
        </Link>
        <div className="navbar__links">
          <Link to="/">
            <Button type="text" size="large">
              Home
            </Button>
          </Link>
          <Link to="/create">
            <Button type="primary" size="large">
              New Blog
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
