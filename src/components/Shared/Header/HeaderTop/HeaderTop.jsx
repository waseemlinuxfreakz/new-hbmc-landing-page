import { Link } from "react-router-dom";
import "./HeaderTop.css";

const HeaderTop = () => {
  return (
    <div className="header-top-component">
      <div className="site-container">
        <div className="header-links">
          <Link to="#">Personal</Link>
          <Link to="#">Business</Link>
          <Link to="#">Wholesale</Link>
          <Link to="#">Sustainability</Link>
          <Link to="#">Investors</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
