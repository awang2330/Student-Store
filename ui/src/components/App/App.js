import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios'

import Navbar from '../Navbar/Navbar'
import StoreProducts from '../StoreProducts/StoreProducts'
import './App.css'

export default function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    console.log("hi")
    const fetchProducts = async () => {
      try {
        const req = await axios.get("http://localhost:3001/store")
        const products = req?.data?.products
        console.log(products)
        if (products) {
          setProducts(products)
        }
      } catch(err) {
        setError(err)
      }
    }

    fetchProducts()
  }, [])
  return (
   
    <div className="App">
      <Navbar />
      <StoreProducts products={products}/>
    </div>
  )
}
