import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img className="card-image" src={product.image} alt="" />
      <p className="product-name">
        <strong>{product.title}</strong>
      </p>
      <p className="product-price">${product.price}</p>
      <Link to={`products/${product.id}`}>
        <button>Ver más</button>
      </Link>
    </div>
  );
};

export default ProductCard;
