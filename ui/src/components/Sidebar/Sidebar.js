import axios from 'axios'
import { useState, useEffect } from 'react'
import './Sidebar.css'

export default function Sidebar( { cart = [], open = false } ) {
  // console.log(cart)
  const [isOpen, setIsOpen] = useState(open)
  const [products, setProducts] = useState([])
  const handleOnClick = () => {
    if (isOpen) { 
      setIsOpen(false) 
    } else {
      setIsOpen(true)
    }
    // try {
    //   cart.forEach(async (item, index) => {
    //     const res = await axios.get(`http://localhost:3001/store/${item.id}`)
    //     const product = res?.data?.product
    //     const quantity = item.quantity
    //     console.log(quantity)
    //     if (product) {
    //       setProducts([...products, {quantity, product} ])
    //     }
    //   })
    // } catch(err) {
    //   console.log(err)
    // }
  }

  var totalCost = 0
  // console.log(products)
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
              <tr>
                <th>{item.orderProduct.name}</th>
                <th>{item.quantity}</th>
                <th>{item.orderProduct.price}</th>
                <th>{item.orderProduct.price * item.quantity}</th>
                <span className="hidden">{totalCost += (item.orderProduct.price * item.quantity)}</span>
              </tr>
              
              // <tr>
              //   <th>{item[1].name}</th>
              //   <th>{item[0]}</th>
              //   <th>{item[1].price}</th>
              //   <th>{item[1].price * item[0]}</th>
              // </tr>
            ))}
          </tbody>
        </table>
        <div>Total Cost: {parseFloat(totalCost).toFixed(2)}</div>
      </div>
      <button className="sidebar-btn" onClick={handleOnClick}>{isOpen ? <>&#171;</> : <>&#187;</> }</button>
    </div>
  )
}