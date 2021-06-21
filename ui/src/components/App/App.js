import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios'

import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Sidebar from '../Sidebar/Sidebar'
import ProductDetail from '../ProductDetail/ProductDetail'
import './App.css'

export default function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState()
  const [cart, setCart] = useState([])
  const [orderProducts, setOrderProducts] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const req = await axios.get("http://localhost:3001/store")
        const products = req?.data?.products
        if (products) {
          setProducts(products)
        }
      } catch(err) {
        setError(err)
      }
    }
    fetchProducts()
  }, [])

  const handleCartCallback = (newOrderId) => {
    setIsOpen(true)
    if (cart.length === 0) {
      const id = `${newOrderId}`
      const quantity = parseInt(1)
      setCart([...cart, {id, quantity}])
    } else {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === newOrderId) {
          cart[i].quantity += parseInt(1)
          break
        }
        else {
          if (i === cart.length - 1) {
            const id = `${newOrderId}`
            const quantity = parseInt(1)
            setCart([...cart, {id, quantity}])
          }
        }
      }
    }
    try {
      console.log(cart)
      setOrderProducts([])
      cart.forEach(async (item, index) => {
        const res = await axios.get(`http://localhost:3001/store/${item.id}`)
        const orderProduct = res?.data?.product
        const quantity = item.quantity
        console.log(quantity)
        if (orderProduct) {
          setOrderProducts(orderProducts => [...orderProducts, {quantity, orderProduct}])
        }
      })
    } catch(err) {
      console.log(err)
    }
  }
  console.log(orderProducts)

  return (
    <div className="App">
      <div></div>
      <BrowserRouter>
        <Sidebar cart={orderProducts} open={isOpen}/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home products={products} handleCartCallback={handleCartCallback}/>}/>
          <Route path="/store/:productId" element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
