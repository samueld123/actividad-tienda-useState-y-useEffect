import './App.css';

const ProductCard = ({product}) => {
  return (
    
    <div className='card' title={product.description}>
        <img src={product.image} alt='' />
        <p className='product-name'><strong>{product.title}</strong></p>
        <p className='product-price'>${product.price}</p>
    </div>
    
  )
}

export default ProductCard