import './StoreProducts.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function StoreProducts( {products} ) {
  const cart = []
  const handleIncrement = (event) => {
    const id = event.target.name
    console.log(cart[id])
    if (cart[id]) {
      cart[id] += 1
    } else {
      cart.push((id,1))
      
    }
    console.log(cart)
    
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

