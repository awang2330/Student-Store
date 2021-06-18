import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

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

  return (  
    <div className="product-info">
      <div className="product-image">
        <img src={product.image} alt={product.name}/>
      </div>
      <div className="product-category">{product.category}</div>
      <div className="product-name">{product.name}</div>
      <div className="product-price">{product.price}</div>
      <div className="product-desc">{product.description}</div>
    </div>
  )
}
 