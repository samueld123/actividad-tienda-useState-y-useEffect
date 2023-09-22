import "./Header.css";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users/9")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <header>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h2>Samuel's Shop</h2>
      </Link>
      <div className="right-side">
        <Link to={"/cart/"}>
          <FaCartShopping size={35} />
        </Link>
        <div className="user-data">
          {user.name != null
            ? user.name.firstname[0] + user.name.lastname[0]
            : ""}
        </div>
      </div>
    </header>
  );
}

export default Header;
