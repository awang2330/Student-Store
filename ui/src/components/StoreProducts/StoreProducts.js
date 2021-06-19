import './StoreProducts.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Sidebar from '../Sidebar/Sidebar'

export default function StoreProducts( { products, handleCartCallback} ) {
  const [cart, setCart] = useState([])

  // useEffect(() => {
  //   <Sidebar cart={cart}/>
  // }, [cart])
  const handleIncrement = (event) => {
    const itemId = event.target.name
    handleCartCallback(itemId)
  }

  const handleDecrement = (event) => {
    <Sidebar increment={false} id={event.target.name}/>
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
                <button name={item.id} onClick={handleDecrement}>–</button>
                <button name={item.id} onClick={handleIncrement}>+</button>
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

