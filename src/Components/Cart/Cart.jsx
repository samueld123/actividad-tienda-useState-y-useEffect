import "./Cart.css";
import { useEffect, useState } from "react";

function Cart() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users/9")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <>
    <p>asdf</p>
    </>
  );
}

export default Cart;
