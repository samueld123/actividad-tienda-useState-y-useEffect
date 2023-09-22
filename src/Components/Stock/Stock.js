import "./Stock.css";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";

function Stock() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard product={product}></ProductCard>
      ))}
    </div>
  );
}

export default Stock;
