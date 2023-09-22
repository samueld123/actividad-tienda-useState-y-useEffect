import "./App.css";
import Header from "./Components/Header/Header";
import Stock from "./Components/Stock/Stock";
import Cart from "./Components/Cart/Cart.jsx";
import ProductPreview from "./Components/ProductPreview/ProductPreview";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Stock />} />
        <Route exact path="/products/:id" element={<ProductPreview />} />
        <Route exact path="/cart/" element={<Cart />} />
      </Routes>
    </div>
  );
}
