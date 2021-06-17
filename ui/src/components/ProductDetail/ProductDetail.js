import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function ProductDetail() {
  const { productId } = useParams()
  const [product, setProduct] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    console.log("test")
    const fetchProductById = async () => {
      console.log("test")
      try {
        const res = await axios.get(`http://localhost:3001/store/${productId}`)
        console.log(res)
        if (res?.data?.product) {
          setProduct(res?.data?.product)
          console.log(res?.data?.product)
        } else {
          setError("error")
        }
        // const productItem = res?.data?.product
        // console.log(productItem)
        // if (productItem) {
        //   setProduct(productItem)
        // }
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
 