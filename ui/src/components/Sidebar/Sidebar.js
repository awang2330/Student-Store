import axios from 'axios'
import { useState, useEffect } from 'react'
import './Sidebar.css'

export default function Sidebar( { cart = [], open = false } ) {
  console.log(cart)
  console.log("hi")
  const [isOpen, setIsOpen] = useState(open)
  const [products, setProducts] = useState([])
  const handleOnClick = () => {
    if (isOpen) { 
      setIsOpen(false) 
    } else {
      setIsOpen(true)
    }
  }

  useEffect(() => {
    const getProducts = async => {
      try {
        cart.forEach(async (item) => {
          const res = await axios.get(`http://localhost:3001/store/${item.id}`)
          const product = res?.data?.product
          if (product) {
            setProducts(products => [...products, product])
          }
        })
      } catch(err) {
        console.log(err)
      }
    }
    getProducts()
  }, [cart])

  console.log(products)
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