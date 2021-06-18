import { useState } from 'react'
import './Sidebar.css'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
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
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Cost</th>
          </tr>
        </table>
      </div>
      <button className="sidebar-btn" onClick={handleOnClick}>{isOpen ? <>&#60;</> : <>&#62;</> }</button>
    </div>
  )
}