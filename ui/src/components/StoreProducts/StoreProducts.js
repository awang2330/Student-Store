import './StoreProducts'

export default function StoreProducts( {products} ) {
  console.log(products)
  return (
    <div className="StoreProducts">
        {products.map(item => (
          <div>{item.image}</div>
        ))}
    </div>
  )
}

