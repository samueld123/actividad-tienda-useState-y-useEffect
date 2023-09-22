import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductPreview.css";

function Product() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  console.log("id-producto", id);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="product-preview">
      <Link to={"/"}>
        <button className="preview-back-button">🡐 Volver</button>
      </Link>
      {product ? (
        <div className="preview-card">
          <img className = "preview-img" src={product.image} alt={product.category} />
          <div className="preview-card-text">
            <h2 className="preview-card-titles">{product.title}</h2>
            <h3>{product.category}</h3>
            <h2 className="preview-card-titles">$ {product.price}</h2>
            <p className="preview-card-description">{product.description}</p>
            <button>Agregar al carrito</button>
          </div>
        </div>
      ) : (
        <div> loading... </div>
      )}
    </div>
  );
}

export default Product;
