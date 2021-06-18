import './StoreProducts.css'
import { Link } from 'react-router-dom'

export default function StoreProducts( {products} ) {
  const handleIncrement = () => {

  }

  const handleDecrement = () => {

  }

  return (
    <div className="StoreProducts">
      {products.map((item) => (
          <div className="product-info product-hover" key={item.id}>
            <Link to={`/store/${item.id}`} key={item.id}>
              <div className="product-image">
                <img src={item.image} alt={item.name}/>
              </div>
            </Link>
            <div className="product-details">
              <div className="addtocart-btns">
                <button onClick={handleIncrement}>–</button>
                <button onClick={handleDecrement}>+</button>
              </div>
              <div className="product-category">{item.category}</div>
              <div className="product-name">{item.name}</div>
              <div className="product-price">${item.price = item.price = parseFloat(item.price).toFixed(2)}</div>
            </div>
          </div>
        
      ))}
    </div>
  )
}

