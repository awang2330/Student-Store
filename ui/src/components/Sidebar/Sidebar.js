import axios from 'axios'
import { useState, useEffect } from 'react'
import './Sidebar.css'

export default function Sidebar( { cart = [], open } ) {
  console.log(open)
  const [isOpen, setIsOpen] = useState(open)
  const handleOnClick = () => {
    if (isOpen) { 
      setIsOpen(false) 
    } else {
      setIsOpen(true)
    }
  }

  var totalCost = 0
  return (
    <div className="Sidebar">
      <div className={isOpen ? "open" : "close"}>
        <div className="sidebar-title">Shopping Cart</div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Cost</th>
            </tr>
            {cart.map(item => (
              <tr key={item.orderProduct.id}>
                <th>{item.orderProduct.name}</th>
                <th>{item.quantity}</th>
                <th>{item.orderProduct.price}</th>
                <th>{item.orderProduct.price * item.quantity}</th>
                <th className="hidden">{totalCost += (item.orderProduct.price * item.quantity)}</th>
              </tr>
            ))}
          </tbody>
        </table>
        <div>Total Cost: {parseFloat(totalCost).toFixed(2)}</div>
      </div>
      <button className="sidebar-btn" onClick={handleOnClick}>{isOpen ? <>&#171;</> : <>&#187;</> }</button>
    </div>
  )
}