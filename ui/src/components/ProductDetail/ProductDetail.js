import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

import './ProductDetail.css'

export default function ProductDetail() {
  const { productId } = useParams()
  const [product, setProduct] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/store/${productId}`)
        const product = res?.data?.product
        if (product) {
          setProduct(product)
        }
      } catch(err) {
        console.log(err)
        setError(err)
      }
    }
    fetchProductById()
  }, [productId])

  product.price = parseFloat(product.price).toFixed(2)

  return (  
    <div className="ProductDetail">
       <div className="productdetail-info">
        <div className="productdetail-image">
          <img src={product.image} alt={product.name}/>
        </div>
        <div className="product-details">
          <div className="productdetail-category">{product.category}</div>
          <div className="productdetail-name">{product.name}</div>
          <div className="productdetail-price">${product.price}</div>
          <div className="productdetail-desc">{product.description}</div>
        </div>
      </div>
    </div>
   
  )
}
 