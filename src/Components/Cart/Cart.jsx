import "./Cart.css";
import { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

function Cart() {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || {};
    setCartItems(savedCart);
  }, []);

  const handleClickSubstract = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || {};
    if (existingCart[product.item.id].quantity > 1) {
      existingCart[product.item.id].quantity -= 1;
    } else {
      delete existingCart[product.item.id];
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setCartItems(existingCart);
  };

  const handleClickAdd = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || {};
    existingCart[product.item.id].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setCartItems(existingCart);
  };

  return (
    <>
      <div className="cart">
        {Object.keys(cartItems).length > 0 ? (
          <>
            <div className="cart-list">
              <h1>Carrito de compras</h1>
              <ul>
                {Object.values(cartItems).map((product) => (
                  <li key={product.item.id}>
                    <div className="cart-item">
                      <img
                        className="cart-item-img"
                        src={product.item.image}
                        alt={product.item.title}
                      />
                      <div className="cart-item-details">
                        <h4>{product.item.title}</h4>
                        <h3>{product.item.category}</h3>
                        <p>Cantidad: {product.quantity}</p>
                        <p>Precio unitario: $ {product.item.price}</p>
                        <p>
                          Precio total:{" "}
                          <strong>
                            $ {product.item.price * product.quantity}
                          </strong>
                        </p>
                        <div className="buttons-field">
                          <button
                            className="operation-buttons"
                            onClick={() => handleClickSubstract(product)}
                          >
                            <FaMinus size={15} color="red" />
                          </button>
                          <button
                            className="operation-buttons"
                            onClick={() => handleClickAdd(product)}
                          >
                            <FaPlus size={15} color="green" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cart-checkout">
              <h1>Resumen</h1>
              <div className="cart-checkout-card">
                <div className="cart-checkout-card-line">
                  <h4>Cantidad de productos: </h4>
                  <p>
                    {Object.values(cartItems).reduce(
                      (total, product) => total + product.quantity,
                      0
                    )}
                  </p>
                </div>
                <div className="cart-checkout-card-line">
                  <h4>Precio total: </h4>
                  <p>
                    <strong>
                      ${" "}
                      {Object.values(cartItems).reduce(
                        (total, product) =>
                          total + product.item.price * product.quantity,
                        0
                      )}
                    </strong>
                  </p>
                </div>
                <hr />
                <button className="cart-checkout-pay">Pagar</button>
              </div>
            </div>
          </>
        ) : (
          <h1>El carrito está vacío</h1>
        )}
      </div>
    </>
  );
}

export default Cart;
