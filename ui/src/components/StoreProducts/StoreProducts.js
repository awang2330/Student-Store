import './StoreProducts.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Sidebar from '../Sidebar/Sidebar'

export default function StoreProducts( {products} ) {
  var cart = []

  useEffect(() => {
    <Sidebar cart={cart}/>
  }, [cart])
  const handleIncrement = (event) => {
    const itemName = event.target.name
    if (cart.length === 0) {
      const name = `${itemName}`
      const quantity = parseInt(1)
      cart.push({name, quantity})
    } else {
       cart.forEach((item, index) => {
        if (item.name === itemName) {
          item.quantity += parseInt(1)
        }
        else {
          if (index === cart.length - 1) {
            const name = `${itemName}`
            const quantity = parseInt(1)
            cart.push({name, quantity})
          }
        }
      })
    }
    console.log(cart)
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
                <button name={item.name} onClick={handleDecrement}>–</button>
                <button name={item.name} onClick={handleIncrement}>+</button>
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

