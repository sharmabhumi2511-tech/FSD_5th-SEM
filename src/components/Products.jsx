import React from 'react'

export default function Products({ products }) {
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto', gap: '10px'}}>
      {products.map(product => (
        <div key={product.id}  style={{border:"2px solid black", padding:"10px"}}>
          <img src={product.thumbnail} alt={product.title}  />
          <h2>{product.title}</h2>
          {/* <p>{product.description}</p> */}
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  )
}