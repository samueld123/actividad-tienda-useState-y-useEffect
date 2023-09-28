import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductPreview.css";
import { FaPlus, FaMinus } from "react-icons/fa6";

function Product() {
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || {};
    setCartItems(savedCart);
  }, []);

  const handleClickSubstract = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || {};
    console.log("hola");
    if (existingCart[product.id]) {
      if (existingCart[product.id].quantity >= 1) {
        existingCart[product.id].quantity -= 1;
        console.log("2", existingCart[product.id].quantity);
        if (existingCart[product.id].quantity === 0) {
          delete existingCart[product.id];
        }
      }
    }

    console.log(existingCart);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setCartItems(existingCart);
  };

  const handleClickAdd = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || {};
    console.log("hola");
    if (existingCart[product.id]) {
      existingCart[product.id].quantity += 1;
    } else {
      existingCart[product.id] = {
        item: product,
        quantity: 1,
      };
    }
    console.log(existingCart);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setCartItems(existingCart);
  };

  return (
    <div className="product-preview">
      <Link to={"/"}>
        <button className="preview-back-button">🡐 Volver</button>
      </Link>
      {product ? (
        <div className="preview-card">
          <img
            className="preview-img"
            src={product.image}
            alt={product.category}
          />
          <div className="preview-card-text">
            <h2 className="preview-card-titles">{product.title}</h2>
            <h3>{product.category}</h3>
            <h2 className="preview-card-titles">$ {product.price}</h2>
            <p className="preview-card-description">{product.description}</p>
            <div className="buttons-field">
              <button
                className="operation-buttons"
                onClick={() => handleClickSubstract(product)}
              >
                <FaMinus size={15} color="red" />
              </button>
              <h3>
                {cartItems[product.id] ? cartItems[product.id].quantity : 0}
              </h3>
              <button
                className="operation-buttons"
                onClick={() => handleClickAdd(product)}
              >
                <FaPlus size={15} color="green" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div> Cargando... </div>
      )}
    </div>
  );
}

export default Product;
