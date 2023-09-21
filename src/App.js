import './App.css';
import { useEffect , useState} from 'react';
import ProductCard from './ProductCard.jsx';


function App() {
  const [showAll, setShowAll] = useState(false);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users/9')
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [])

  function handleClick() {
    setShowAll(!showAll);
  }

  // 

  return (
    <div className="App">
    <header>
      <h2>¡Bienvenido, {user.username}!</h2> 
      <div className='userData'>{user.name != null ? user.name.firstname[0]+user.name.lastname[0] : ''}</div> 
    </header>
    
      <div className='productContainer'> 
      {
        showAll ?
        products.map((product) => (
          <ProductCard product = {product} ></ProductCard>
        )):
        products.filter((product) => { 
          if (product.id < 10){
            return product
          }}).map((product) => (
          <ProductCard product = {product} ></ProductCard>
        )) 
      }
      </div>
    <button onClick={handleClick}>{showAll ? "Ver menos" : "Ver más"}</button>
    </div>
  );
}

export default App;

