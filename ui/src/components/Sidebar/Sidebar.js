import { useState } from 'react'
import './Sidebar.css'

export default function Sidebar( { cart = [], open = false } ) {
  console.log(cart)
  const [isOpen, setIsOpen] = useState(open)
  const handleOnClick = () => {
    if (isOpen) { 
      setIsOpen(false) 
    } else {
      setIsOpen(true)
    }
  }

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
          </tbody>
        </table>
      </div>
      <button className="sidebar-btn" onClick={handleOnClick}>{isOpen ? <>&#171;</> : <>&#187;</> }</button>
    </div>
  )
}