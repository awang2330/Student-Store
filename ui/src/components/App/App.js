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
    console.log("app", cart)
  }

  return (
    <div className="App">
      <div></div>
      <BrowserRouter>
        <Sidebar cart={cart}/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home products={products} handleCartCallback={handleCartCallback}/>}></Route>
          <Route path="/store/:productId" element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
